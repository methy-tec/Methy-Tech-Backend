import models from "../models/index.js";

const Contact = models.Contact;

// ➤ Créer un message de contact
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Tous les champs sont requis" });
    }

    const newMessage = await Contact.create({ name, email, message });

    res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error("Erreur createContact:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// ➤ Récupérer tous les messages
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.findAll({ order: [["createdAt", "DESC"]] });
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.error("Erreur getContacts:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// ➤ Supprimer un message
export const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.destroy({ where: { id } });

    if (!deleted) {
      return res.status(404).json({ error: "Message non trouvé" });
    }

    res.json({ success: true, message: "Message supprimé" });
  } catch (error) {
    console.error("Erreur deleteContact:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
};
