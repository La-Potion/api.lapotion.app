const { DataTypes } = require("sequelize");
const sequelize = require("../connexion");

const Type = sequelize.define('types', {
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
