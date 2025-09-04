import models from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Enregistrer un admin (à utiliser une seule fois ou en dev)
export const register = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    const existingUser = await models.User.findOne({ where: { email } });
    if (existingUser) return res.status(400).json({ error: "Email déjà utilisé" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await models.User.create({
      fullname,
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.status(201).json({ message: "Admin créé avec succès", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login admin
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await models.User.findOne({ where: { email } });
    if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Mot de passe incorrect" });

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Connexion réussie", token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
