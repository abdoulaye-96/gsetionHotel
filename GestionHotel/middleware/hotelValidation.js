exports.validateHotelInput = (req, res, next) => {
  const requiredFields = ['nom', 'adresse', 'email', 'telephone', 'prixNuit'];
  
  // Vérification des champs obligatoires
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ error: `Champ '${field}' manquant` });
    }
  }

  // Validation spécifique au prix
  if (typeof req.body.prixNuit !== 'string') {
    return res.status(400).json({ error: "Format de prix invalide" });
  }

  const prixNuit = Number(req.body.prixNuit.replace(/\D/g, ''));
  
  if (isNaN(prixNuit)) {
    return res.status(400).json({ error: "Prix doit être un nombre valide" });
  }

  req.body.prixNuit = prixNuit;
  next();
};
