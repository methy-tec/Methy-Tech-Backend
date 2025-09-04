import express from "express";
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/ProjectController.js";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { upload } from "../middlewares/uploadMiddleware.js";

const router = express.Router();

router.get("/", getAllProjects);
router.post("/", verifyToken, upload.single("image"), createProject);
router.put("/:id", verifyToken, upload.single("image"), updateProject);
router.delete("/:id", verifyToken, upload.single("image"), deleteProject);

export default router;
