import models from "../models/index.js";

// Afficher tous les projets
export const getAllProjects = async (req, res) => {
  try {
    const projects = await models.Project.findAll();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ajouter un projet
export const createProject = async (req, res) => {
  try {
    const { title, description, technologies, github, demo, userId } = req.body;
    const image = req.file ? req.file.filename :  null;
    const project = await models.Project.create({
      title,
      description,
      technologies,
      github,
      demo,
      userId,
      image,
    });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

// Supprimer un projet
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await models.Project.findByPk(id);
    if (!project) return res.status(404).json({ error: "Projet non trouvé" });

    await project.destroy();
    res.json({ message: "Projet supprimé avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
