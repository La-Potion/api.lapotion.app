const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");

class Type extends Model {}

Type.init(
  {
    type_ref: {
      primaryKey: true,
      type: DataTypes.CHAR(2),
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  {
    sequelize: sequelize,
    modelName: "type",
    timestamps: false,
  }
);

module.exports = Type;
