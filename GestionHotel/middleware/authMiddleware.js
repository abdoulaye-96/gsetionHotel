const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ error: "Accès refusé. Token manquant." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.SECRET_KEY);
    req.user = decoded; // Stocke les infos de l'utilisateur dans req.user
    next();
  } catch (error) {
    res.status(401).json({ error: "Token invalide" });
  }
};

module.exports = authMiddleware;
