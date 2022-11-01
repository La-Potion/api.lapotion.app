const { DataTypes } = require("sequelize");
const sequelize = require("../connexion");

const Review = sequelize.define('reviews', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
      liked: DataTypes.BOOLEAN
  },
  {
    sequelize: sequelize,
    modelName: "review",
    timestamps: true,
  }
);

module.exports = Review;
