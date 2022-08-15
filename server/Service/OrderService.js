const orders = require("../Model/Order");

module.exports = class OrderService {
  static async insertOrder(order) {
    var returnValue = await orders.insertMany(order);
    //check if all data has been saved
    if (
      Object.keys(order).length ==
      Object.keys(returnValue[0]._doc).length - 2
    ) {
      return returnValue[0]._doc;
    } else {
      return null;
    }
  }

  static async getOrdersByDate(selectedDate) {
    return orders
      .find({ date: selectedDate })
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

  static async getOrdersByUser(user) {
    return orders
      .find({ userId: user })
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

  static async getOrderById(id) {
    return orders.findById(id).exec();
  }

  static async update(order) {
    const res = await orders.findByIdAndUpdate(order.id, order);
    if (res) {
      return res;
    } else {
      return null;
    }
  }

  static async delete(id) {
    const res = await orders.findByIdAndRemove(id);
    if (res) {
      return res;
    } else {
      return null;
    }
  }
};
