const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");
const Mode = require("./Mode");

const ModeCarte = sequelize.define('mode_cartes', {
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
