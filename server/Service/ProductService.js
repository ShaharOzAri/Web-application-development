const products = require("../Model/Product");

module.exports = class ProductService {
  static async createProduct(product) {
    return products
      .insertMany(product)
      .then((value) => {
        return value;
      })
      .catch((error) => {
        //return error;
        return null;
      });
  }

  static async getAllProducts() {
    return products
      .find({})
      .then((value) => {
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getProductById(id) {
    return products.findById(id).exec();
  }

  static async getProductByName(productName) {
    return products
      .find({ name: productName })
      .then((value) => {
        if (value.length == 0) {
          return null;
        }
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async getProductsByCategory(productCategory) {
    return products
      .find({ category: productCategory })
      .then((value) => {
        if (value.length == 0) {
          return null;
        }
        return value;
      })
      .catch((error) => {
        return null;
      });
  }

  static async update(product) {
    const res = await products.findByIdAndUpdate(product.id, {
      product,
    });
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async delete(id) {
    const res = await products.findByIdAndRemove(id);
    if (res) {
      return res;
    } else {
      return null;
    }
  }
};
