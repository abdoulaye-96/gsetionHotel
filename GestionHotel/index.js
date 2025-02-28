require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cron = require('node-cron');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Hotel = require('./models/hotel.model');
const User = require('./models/user.model'); // Importez le modèle User
const cleanupOldFiles = require('./utils/cleanup');

const app = express();
app.use(express.json());


const cors = require('cors');

// Autoriser toutes les origines (pour le développement uniquement)
app.use(cors());

// Ou autoriser une origine spécifique (recommandé pour la production)
app.use(cors({
  origin: 'http://localhost:5173', // Remplacez par l'URL de votre frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes autorisées
  allowedHeaders: ['Content-Type', 'Authorization'], // En-têtes autorisés
}));


// Configuration de Multer pour le stockage des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/hotels';
    fs.mkdirSync(dir, { recursive: true }); // Crée le dossier si inexistant
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `hotel-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      const error = new Error('Seules les images sont autorisées (JPG/PNG)');
      error.code = 'FILE_TYPE';
      return cb(error);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 2
  }
});

// Middleware de sécurité pour les fichiers statiques
const secureStatic = (req, res, next) => next();
app.use('/uploads', secureStatic, express.static('uploads'));

// Middleware de validation pour les hôtels
const validateHotelInput = (req, res, next) => {
  try {
    req.body.prixNuit = typeof req.body.prixNuit === 'string' 
      ? Number(req.body.prixNuit.replace(/\D/g, '')) 
      : Number(req.body.prixNuit);

    if (isNaN(req.body.prixNuit)) throw new Error('Prix invalide');
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Middleware d'authentification JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ message: 'Accès non autorisé.' });

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token invalide.' });
    req.user = user;
    next();
  });
};

// Route d'accueil
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API de gestion hôtelière');
});

// Routes d'authentification
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    console.log('Tentative d\'inscription avec:', { name, email, password });
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log('Email déjà utilisé:', email);
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    const hashedPassword = await bcrypt.hash(password, 4);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    console.log('Utilisateur inscrit avec succès:', newUser);
    res.status(201).json({ message: 'Utilisateur inscrit avec succès.', token });
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ message: 'Erreur lors de l\'inscription.', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect.' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Connexion réussie.', token });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la connexion.', error: error.message });
  }
});

// Routes CRUD pour les hôtels

// 1. READ - Récupérer tous les hôtels
app.get('/api/hotels', async (req, res) => {
  try {
    const hotels = await Hotel.find().sort('-createdAt');
    res.json({
      count: hotels.length,
      data: hotels
    });
  } catch (error) {
    res.status(500).json({ 
      error: "Erreur lors de la récupération",
      details: error.message 
    });
  }
});

// 2. READ - Récupérer un hôtel par son ID
app.get('/api/hotels/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      return res.status(404).json({ error: "Aucun hôtel trouvé avec cet ID" });
    }
    res.json(hotel);
  } catch (error) {
    res.status(400).json({ error: "ID invalide", details: error.message });
  }
});

// 3. CREATE - Créer un hôtel
app.post('/api/hotels',  upload.array('photos'), validateHotelInput, async (req, res) => {
  try {
    const hotelData = {
      ...req.body,
      photos: req.files?.map(file => file.path) || []
    };

    const hotel = await Hotel.create(hotelData);
    res.status(201).json(hotel);
  } catch (error) {
    if (error.code === 'FILE_TYPE') {
      return res.status(400).json({ error: 'Seules les images (JPG/PNG) sont autorisées' });
    }
    res.status(400).json({ error: error.message });
  }
});

// 4. UPDATE - Mettre à jour un hôtel
app.put('/api/hotels/:id', upload.array('photos'), validateHotelInput, async (req, res) => {
  try {
    // Convertir req.body.prixNuit en chaîne si ce n'est pas déjà le cas
    const prixNuit = typeof req.body.prixNuit === 'string' ? req.body.prixNuit : String(req.body.prixNuit);

    const hotelData = {
      ...req.body,
      prixNuit: Number(prixNuit.replace(/\D/g, '')), // Nettoyer et convertir en nombre
      photos: req.files?.map(file => file.path) || [] // Gérer les fichiers uploadés
    };

    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      hotelData,
      { new: true, runValidators: true }
    );

    if (!updatedHotel) {
      return res.status(404).json({ error: "Hôtel non trouvé" });
    }

    res.json(updatedHotel);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 5. DELETE - Supprimer un hôtel
app.delete('/api/hotels/:id', async (req, res) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    message = "Hôtel supprimé avec succès";
    if (!hotel) {
      return res.status(404).json({ error: "Hôtel non trouvé" });
    }

    // Supprimer les fichiers associés
    hotel.photos.forEach(photoPath => {
      fs.unlinkSync(photoPath);
    });

    res.json({ 
      message: "Hôtel supprimé avec succès",
      deletedHotel: hotel 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Nettoyage des fichiers avec node-cron
cron.schedule('0 0 * * *', () => {
  const dir = path.join(__dirname, 'uploads');
  if (fs.existsSync(dir)) {
    fs.readdir(dir, (err, files) => {
      files?.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).mtime < Date.now() - 7 * 86400000) {
          fs.unlinkSync(filePath);
        }
      });
    });
  }
});

// Connexion MongoDB
mongoose.connect('mongodb+srv://seneabdoulaye124:g9AS80H2nurCYP4c@mongodb.erfvf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=mongoDB')
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
    cleanupOldFiles();
  })
  .catch((error) => {
    console.log('Error connecting to database:', error.message);
  });

// Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Une erreur est survenue.', error: err.message });
});
