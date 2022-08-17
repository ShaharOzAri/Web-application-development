import axios from "axios";
const url = process.env.REACT_APP_API_URL + "order/";

export const AddNewOrder = async (order) => {
  var res = axios.post(url + "create/", {
    params: order,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getOrdersNameGroupBy = async () => {
  var res = await axios.get(url + "getOrdersGroupBy/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getOrdersByDate =  async(date) => {
  return axios
    .post(url + "getOrdersByDate/", {
      params: date,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

export const getOrdersByUser = (user) => {
  return axios
    .post(url + "getOrdersByUser/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

export const getOrderById = (id) => {
  return axios
    .post(url + "getOrderById/", {
      params: id,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

export const updateOrder = (order) => {
  return axios
    .post(url + "update/", {
      params: order,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};

export const deleteOrder = (id) => {
  return axios
    .post(url + "delete/", {
      params: id,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
};
