const NodeGeocoder = require("node-geocoder");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const coordinateFinder = async (locationData) => {
  try {
    const options = {
      provider: "google",
      // Optional depending on the providers
      apiKey: process.env.REACT_APP_API_KEY, // for Mapquest, OpenCage, Google Premier
      formatter: null, // 'gpx', 'string', ...
    };
    const geocoder = NodeGeocoder(options);

    const res = await geocoder.geocode(locationData);
    console.log("INSIDE FINDER");
    return { lat: res[0].latitude, long: res[0].longitude };
  } catch (error) {
    console.log(error);
  }
};

module.exports = coordinateFinder;
