const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");

const Duree = sequelize.define('durees', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    unite: DataTypes.STRING,
    tour: DataTypes.BOOLEAN,
    other: DataTypes.TEXT,
    nombre: DataTypes.INTEGER,
  },
  {
    sequelize: sequelize,
    modelName: "duree",
    timestamps: false,
  }
);

module.exports = Duree;
