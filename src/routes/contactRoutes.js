import express from "express";
import {
  createContact,
  getContacts,
  deleteContact,
} from "../controllers/contactController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

// POST ➤ créer un message
router.post("/", createContact);

// GET ➤ récupérer tous les messages
router.get("/",verifyToken, getContacts);

// DELETE ➤ supprimer un message par id
router.delete("/:id",verifyToken, deleteContact);

export default router;
