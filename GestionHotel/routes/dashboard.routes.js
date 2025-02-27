const express = require("express");
const Hotel = require("../models/hotel.model");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Route protégée du Dashboard
router.get("/", authMiddleware, async (req, res) => {
  try {
    // Nombre total d'hôtels
    const totalHotels = await Hotel.countDocuments();

    // Liste des 5 derniers hôtels
    const recentHotels = await Hotel.find().sort({ createdAt: -1 }).limit(5);

    // Prix moyen des hôtels
    const averagePrice = await Hotel.aggregate([
      { $group: { _id: null, avgPrice: { $avg: "$prixNuit" } } },
    ]);

    res.json({
      totalHotels,
      recentHotels,
      averagePrice: averagePrice.length > 0 ? averagePrice[0].avgPrice : 0,
    });
  } catch (error) {
    res.status(500).json({ error: "Erreur lors du chargement du Dashboard" });
  }
});

module.exports = router;
