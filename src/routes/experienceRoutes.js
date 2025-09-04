import express from "express";
import {
  getAllExperiences,
  createExperience,
  updateExperience,
  deleteExperience
} from "../controllers/ExperienceController.js";

import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllExperiences); // public
router.post("/", verifyToken, createExperience);
router.put("/:id", verifyToken, updateExperience);
router.delete("/:id", verifyToken, deleteExperience);

export default router;
