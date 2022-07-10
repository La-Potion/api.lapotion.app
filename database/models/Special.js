const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");
const Carte = require("./Carte");

class Special extends Model {}

Special.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.BIGINT,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize: sequelize,
    modelName: "special",
    timestamps: false,
  }
);

module.exports = Special;
