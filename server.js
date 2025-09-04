import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import sequelize from "./src/config/database.js"; // ✅ importer depuis config
import models from "./src/models/index.js"; // ✅ importer seulement models

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//Importation de routes
import projectRoutes from "./src/routes/projectRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import skillRoutes from "./src/routes/skillRoutes.js";
import experienceRoutes from "./src/routes/experienceRoutes.js";

//Utilisation de routes
app.use("/api/projects", projectRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/experiences", experienceRoutes);
app.use("/uploads", express.static("uploads"));

// Route test
app.get("/", (req, res) => {
  res.send("🚀 MethyCode Backend est lancé !");
});

// Connexion DB + Sync
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connecté à Railway MySQL !");
    return sequelize.sync({ alter: false });
  })
  .then(() => {
    console.log("✅ Base de données synchronisée !");
  })
  .catch((err) => {
    console.error("❌ Erreur connexion DB :", err);
  });

// Lancer serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});
