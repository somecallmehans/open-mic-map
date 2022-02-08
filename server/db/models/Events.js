const Sequelize = require("sequelize");
const db = require("../db");

const Events = db.define("events", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  over21: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  recurring: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  rateOfRecurrence: {
    type: Sequelize.ENUM({
      values: ["Weekly", "Every Other Week", "Monthly"],
    }),
  },
  dayOfTheWeek: {
    type: Sequelize.ENUM({
      values: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    }),
    allowNull: false,
  },
});

module.exports = Events;
