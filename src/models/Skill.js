export default (sequelize, DataTypes) => {
  const Skill = sequelize.define("Skill", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false }, // ex: "JavaScript"
    level: { type: DataTypes.STRING }, // ex: "Avancé", "Intermédiaire"
    category: { type: DataTypes.STRING } // ex: "Frontend", "Backend", "Database"
  });
  return Skill;
};
