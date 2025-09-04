import models from "../models/index.js";

// Modifier un projet
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await models.Project.findByPk(id);
    if (!project) return res.status(404).json({ error: "Projet non trouvé" });

    await project.update(req.body);
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const getAllProjects = async (req, res) => {
  try {
    const projects = await models.Project.findAll();
    res.status(200).json(projects); // ✅ JSON correct
  } catch (err) {
    console.error("Erreur getAllProjects:", err);
    res.status(500).json({ error: "Erreur lors de la récupération des projets" });
  }
};

/**
 * 📌 Créer un projet avec image Cloudinary
 */
export const createProject = async (req, res) => {
  try {
    const { title, description, technologies, github, demo, userId } = req.body;

    // Debug pour voir ce que Cloudinary retourne
    console.log("📂 Fichier uploadé:", req.file);

    // Vérifie si une image a été uploadée
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "Image manquante ou invalide" });
    }

    const project = await models.Project.create({
      title,
      description,
      technologies,
      github,
      demo,
      userId,
      image: req.file.path, // ✅ URL Cloudinary (ex: https://res.cloudinary.com/...)
    });

    res.status(201).json(project); // ✅ réponse JSON
  } catch (err) {
    next(err);  
  }
};

/**
 * 📌 Supprimer un projet
 */
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await models.Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ error: "Projet introuvable" });
    }

    await project.destroy();
    res.status(200).json({ message: "Projet supprimé avec succès" });
  } catch (err) {
    console.error("Erreur deleteProject:", err);
    res.status(500).json({ error: "Erreur lors de la suppression du projet" });
  }
};
