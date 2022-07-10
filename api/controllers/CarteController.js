const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const ModesCartes = require("../../database/models/ModesCartes");
const Type = require("../../database/models/Type");
const Mode = require("../../database/models/Mode");
const Review = require("../../database/models/Review");
const Special = require("../../database/models/Special");

async function All(req, res) {
  const cartes = await Carte.findAll({
    include: [Duree, Type, ModesCartes, Special, {model: ModesCartes, include: [Mode]}, {model: Special, attributes: ['name']}],
  });
  res.json(cartes);
}

async function Like(req, res) {
  const cartes = await Carte.findOne({where: {id: req.body.id}});
  if (!cartes) return res.json({error: "Card not found"})
  await new Review({liked: true}).save()
}

async function Dislike(req, res) {
  const cartes = await Carte.findOne({where: {id: req.body.id}});
  if (!cartes) return res.json({error: "Card not found"})
  await new Review({liked: false}).save()
}


module.exports = {
  All,
};
