const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./database/connexion");
const status = require('./api/status')
var cors = require("cors");

const app = express();

sequelize.sync({ logging: console.log, alter: true })
status.sync(app)
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/", require("./routes/index"));

module.exports = app;
