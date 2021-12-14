const { Op } = require("sequelize");
const Carte = require("../../database/models/Carte");
const Duree = require("../../database/models/Duree");
const Type = require("../../database/models/Type");

async function Update(req, res) {
  const request_date = new Date(req.body.last_update);
  const cartes = await Carte.findAll({
    where: { updated_at: { [Op.gte]: request_date } },
    include: [Duree, Type],
  });
  res.json(cartes);
}

module.exports = {
  Update,
};
