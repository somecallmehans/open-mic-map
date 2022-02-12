const NodeGeocoder = require("node-geocoder");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

console.log("//////////////////", process.env.REACT_APP_API_KEY);
const newFunc = async () => {
  try {
    const options = {
      provider: "google",
      // Optional depending on the providers
      apiKey: process.env.REACT_APP_API_KEY, // for Mapquest, OpenCage, Google Premier
      formatter: null, // 'gpx', 'string', ...
    };
    const geocoder = NodeGeocoder(options);

    const res = await geocoder.geocode("343 Stratford Avenue Pittsburgh");

    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

newFunc();
