const router = require("express").Router();
//If there's an error check this require first
const {
  models: { Events, Locations },
} = require("../db");
const coordinateFinder = require("./coordinateFinder");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const events = await Events.findAll({ include: Locations });

    events.forEach(async (event) => {
      console.log("ADDRESS: ", event.location.address);
      let coordinates = await coordinateFinder(
        event.location.address +
          " " +
          event.location.city +
          " " +
          event.location.state
      );
      console.log(coordinates);
      event.dataValues = {
        ...event.dataValues,
        latitude: coordinates.lat,
        longitude: coordinates.long,
      };
    });
    //console.log("UPDATED: ", events[0]);
  } catch (error) {
    next(error);
  }
});
