const products = require("../Model/Product");

module.exports = class ProductService {
  static async createProduct(product) {
    return products
      .insertMany(product)
      .then((value) => {
        return value;
      })
      .catch((error) => {
        //save error in log file
        return null;
      });
  }
};
