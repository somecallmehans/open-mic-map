const Sequelize = require("sequelize");
const db = require("../db");

const Links = db.define("links", {
  url: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Links;
