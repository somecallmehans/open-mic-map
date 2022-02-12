const db = require("./db");
const Events = require("./models/Events");
const EventType = require("./models/EventType");
const Locations = require("./models/Locations");

//Add model
Events.belongsTo(Locations);
Locations.hasMany(Events, { as: "location" });

EventType.hasMany(Events, { as: "eventtype" });

module.exports = {
  db,
  models: {
    Events,
    EventType,
    Locations,
  },
};
