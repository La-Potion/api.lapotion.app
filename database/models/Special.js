const { DataTypes } = require("sequelize");
const sequelize = require("../connexion");

const Special = sequelize.define('specials', {
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
