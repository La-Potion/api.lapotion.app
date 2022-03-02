const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");
const Mode = require("./Mode");
const Carte = require("./Carte")

class ModeCarte extends Model {}

ModeCarte.init(
  {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
      },
      carte_id: {
          type: DataTypes.INTEGER,
      },
      mode_id: {
          type: DataTypes.INTEGER,
      },
  },
  {
    sequelize: sequelize,
    modelName: "mode_carte",
    timestamps: false,
  }
);

ModeCarte.belongsTo(Mode, { foreignKey: "mode_id" });

module.exports = ModeCarte;
