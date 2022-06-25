const shopsLocation = require("../Model/ShopsLocation");

module.exports = class ShopsLocationService {
  static async insertLocation(location) {
    shopsLocation
      .insertMany(location)
      .then((value) => {
        console.log("Location Saved Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  static async getAllLocations() {
    return shopsLocation
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }
};
