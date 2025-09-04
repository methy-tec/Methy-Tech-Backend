import models from "../models/index.js";

// Afficher toutes les compétences
export const getAllSkills = async (req, res) => {
  try {
    const skills = await models.Skill.findAll();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Ajouter une compétence
export const createSkill = async (req, res) => {
  try {
    const { name, level, category } = req.body;
    const skill = await models.Skill.create({ name, level, category });
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Modifier une compétence
export const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await models.Skill.findByPk(id);
    if (!skill) return res.status(404).json({ error: "Compétence non trouvée" });

    await skill.update(req.body);
    res.json(skill);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer une compétence
export const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const skill = await models.Skill.findByPk(id);
    if (!skill) return res.status(404).json({ error: "Compétence non trouvée" });

    await skill.destroy();
    res.json({ message: "Compétence supprimée avec succès" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
