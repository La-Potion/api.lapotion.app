const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");
const Duree = require("./Duree");
const Type = require("./Type");
const ModesCartes = require("./ModesCartes");

class Carte extends Model {}

Carte.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    question: DataTypes.TEXT,
    subix: DataTypes.TEXT,
    display: DataTypes.BOOLEAN,
    commun: DataTypes.BOOLEAN,
    question_bis: DataTypes.TEXT,
    joueurs: DataTypes.INTEGER,
    type_ref: DataTypes.CHAR(2),
    duree_id: DataTypes.BIGINT,
  },
  {
    sequelize: sequelize,
    modelName: "carte",
    timestamps: false,
  }
);

Carte.belongsTo(Type, { foreignKey: "type_ref" });
Carte.belongsTo(Duree, { foreignKey: "duree_id" });
Carte.hasMany(ModesCartes, { as: 'carte_id', foreignKey: 'id' });

module.exports = Carte;
