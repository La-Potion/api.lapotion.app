var express = require("express");
const { All } = require("../api/controllers/CarteController");
const { Update } = require("../api/controllers/UpdateController");
var router = express.Router();

router.get("/cartes", (req, res) => All(req, res));
router.post("/update", (req, res) => Update(req, res));

module.exports = router;
