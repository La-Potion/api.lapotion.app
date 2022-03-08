const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");

class Review extends Model {}

Review.init(
  {
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
