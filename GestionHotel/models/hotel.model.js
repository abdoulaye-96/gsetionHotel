const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: [true, "Le nom de l'hôtel est obligatoire"],
    trim: true
  },
  adresse: {
    type: String,
    required: [true, "L'adresse est obligatoire"]
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Email invalide']
  },
  telephone: {
    type: String,
    required: false,
    validate: {
      validator: function(v) {
        return /^(?:\+221|00221|0)(\s?[7][0-9]\s?){8}$/.test(v);
      },
      message: 'Format: +221 XX XXX XX XX ou 77 777 77 77'
    }
  },
  prixNuit: {
    type: Number,
    required: true,
    min: [10000, "Le prix minimum est de 10 000 XOF"]
  },
  devise: {
    type: String,
    enum: ['F CFA (XOF)'],
    default: 'F CFA (XOF)'
  },
  photos: [{
    type: String,
    default: 'https://via.placeholder.com/300x200.png?text=Hôtel'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
