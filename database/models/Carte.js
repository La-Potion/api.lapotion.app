const { Model, DataTypes } = require("sequelize");
const sequelize = require("../connexion");
const Duree = require("./Duree");
const Type = require("./Type");
const ModesCartes = require("./ModesCartes");
const Special = require("./Special");

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
    special_id: DataTypes.BIGINT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  },
  {
    sequelize: sequelize,
    modelName: "carte",
    timestamps: false,
  }
);

Carte.belongsTo(Type, { foreignKey: "type_ref" });
Carte.belongsTo(Duree, { foreignKey: "duree_id" });
Carte.belongsTo(Special, { foreignKey: "special_id" });
Carte.hasMany(ModesCartes, { foreignKey: 'carte_id' });
ModesCartes.belongsTo(Carte, { foreignKey: 'carte_id'})

module.exports = Carte;
