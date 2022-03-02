const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const ModesCartes = require("../../database/models/ModesCartes");
const Type = require("../../database/models/Type");
const Mode = require("../../database/models/Mode");

async function All(req, res) {
  const cartes = await Carte.findAll({
    include: [Duree, Type, ModesCartes, {model: ModesCartes, include: [Mode]}],
  });
  res.json(cartes);
}

module.exports = {
  All,
};
