export default (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    technologies: { type: DataTypes.STRING }, // ex: "React, Node.js, MySQL"
    image: { type: DataTypes.STRING }, // lien ou fichier uploadé
    github: { type: DataTypes.STRING },
    demo: { type: DataTypes.STRING }
  });
  return Project;
};
