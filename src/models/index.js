import Sequelize, { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

import UserModel from "./User.js";
import ProjectModel from "./Project.js";
import SkillModel from "./Skill.js";
import ExperienceModel from "./Experience.js";
import ContactModel from "./Contact.js";

const models = {};

models.User = UserModel(sequelize, Sequelize.DataTypes);
models.Project = ProjectModel(sequelize, Sequelize.DataTypes);
models.Skill = SkillModel(sequelize, Sequelize.DataTypes);
models.Experience = ExperienceModel(sequelize, Sequelize.DataTypes);
models.Contact = ContactModel(sequelize, DataTypes);

// Associations
models.User.hasMany(models.Project, { foreignKey: "userId" });
models.Project.belongsTo(models.User, { foreignKey: "userId" });

export default models;
