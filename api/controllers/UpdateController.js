const { Op } = require("sequelize");
const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const Type = require("../../database/models/Type");
const ModesCartes = require("../../database/models/ModesCartes");
const Mode = require("../../database/models/Mode");

async function Update(req, res) {
  const request_date = new Date(req.body.last_update);
  const cartes = await Carte.findAll({
    where: { updated_at: { [Op.gte]: request_date } },
    include: [Duree, Type, ModesCartes, {model: ModesCartes, include: [Mode]}],
  });
  res.json(cartes);
}

module.exports = {
  Update,
};
