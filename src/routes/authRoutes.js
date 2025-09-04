import express from "express";
import { register, login } from "../controllers/AuthController.js";

const router = express.Router();

// Route pour créer un admin (à supprimer ou sécuriser après la première utilisation)
router.post("/register", register);

// Login
router.post("/login", login);

export default router;
