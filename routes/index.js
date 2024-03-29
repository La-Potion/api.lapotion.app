var express = require("express");
const { All } = require("../api/controllers/CarteController");
const { Update, GetAllID } = require("../api/controllers/UpdateController");
const AppToken = require("../api/middlewares/AppToken");
var router = express.Router();

router.get(
  "/cartes",
  (req, res, next) => AppToken(req, res, next),
  (req, res) => All(req, res)
);
router.post(
    "/update",
    (req, res, next) => AppToken(req, res, next),
    (req, res) => Update(req, res)
);
router.get(
    "/getIDs",
    (req, res, next) => AppToken(req, res, next),
    (req, res) => GetAllID(req, res)
);

module.exports = router;
