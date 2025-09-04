import models from "../models/index.js";

// Afficher toutes les expériences
export const getAllExperiences = async (req, res) => {
  try {
    const experiences = await models.Experience.findAll();
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ajouter une expérience
export const createExperience = async (req, res) => {
  try {
    const { title, company, startDate, endDate, description } = req.body;
    const experience = await models.Experience.create({
      title,
      company,
      startDate,
      endDate,
      description
    });
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Modifier une expérience
export const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await models.Experience.findByPk(id);
    if (!experience) return res.status(404).json({ error: "Expérience non trouvée" });

    await experience.update(req.body);
    res.json(experience);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une expérience
export const deleteExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const experience = await models.Experience.findByPk(id);
    if (!experience) return res.status(404).json({ error: "Expérience non trouvée" });

    await experience.destroy();
    res.json({ message: "Expérience supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
