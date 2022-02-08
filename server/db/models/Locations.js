const Sequelize = require("sequelize");
const db = require("../db");

const Locations = db.define("locations", {
  address: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
});

module.exports = Locations;
