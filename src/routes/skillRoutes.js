import express from "express";
import {
  getAllSkills,
  createSkill,
  updateSkill,
  deleteSkill
} from "../controllers/SkillController.js";

import { verifyToken } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", getAllSkills); // public
router.post("/", verifyToken, createSkill);
router.put("/:id", verifyToken, updateSkill);
router.delete("/:id", verifyToken, deleteSkill);

export default router;
