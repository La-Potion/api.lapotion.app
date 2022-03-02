const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");

class Mode extends Model {}

Mode.init(
  {
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
