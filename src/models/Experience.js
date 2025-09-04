export default (sequelize, DataTypes) => {
  const Experience = sequelize.define("Experience", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false }, // ex: "Développeur Web"
    company: { type: DataTypes.STRING }, // ex: "MethyCode SARL"
    startDate: { type: DataTypes.DATE },
    endDate: { type: DataTypes.DATE },
    description: { type: DataTypes.TEXT }
  });
  return Experience;
};
