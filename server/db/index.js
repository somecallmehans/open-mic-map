const db = require("./db");
const Events = require("./models/Events");
const EventType = require("./models/EventType");
const Links = require("./models/Links");
const Locations = require("./models/Locations");

//Add model

module.exports = {
  db,
  models: {
    Events,
    EventType,
    Links,
    Locations,
  },
};
