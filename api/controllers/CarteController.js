const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const ModesCartes = require("../../database/models/ModesCartes");
const Type = require("../../database/models/Type");
const Mode = require("../../database/models/Mode");
const Review = require("../../database/models/Review");

async function All(req, res) {
  const cartes = await Carte.findAll({
    include: [Duree, Type, ModesCartes, {model: ModesCartes, include: [Mode]}],
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
