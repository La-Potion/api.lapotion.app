const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const Type = require("../../database/models/Type");

async function All(req, res) {
  const cartes = await Carte.findAll({
    include: [Duree, Type],
  });
  res.json(cartes);
}

module.exports = {
  All,
};
