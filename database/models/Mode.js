const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");

const Mode = sequelize.define('modes', {
      id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
      photo: DataTypes.TEXT,
    description: DataTypes.TEXT,
  },
  {
    sequelize: sequelize,
    modelName: "mode",
    timestamps: false,
  }
);

module.exports = Mode;
