import axios from "axios";
const url = process.env.REACT_APP_API_URL + "product/";

export const AddNewProduct = (product) => {
  return axios
    .post(url + "create/", {
      params: product,
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

export const getAllProducts = () => {
  return axios.get(url + "getAll/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // .then(
  //   (response) => {
  //     console.log(response);
  //   },
  //   (error) => {
  //     console.log(error);
  //   }
  // );
};

export const getProductById = async (id) => {
  var res = await axios.get(url + "getProductById/", {
    params: { id: id },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};

export const getProductByName = (name) => {
  return axios
    .post(url + "getProductByName/", {
      params: name,
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

export const getProductsByCategory = (category) => {
  return axios
    .post(url + "getProductsByCategory/", {
      params: category,
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

export const updateProduct = (product) => {
  return axios
    .post(url + "update/", {
      params: product,
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

export const deleteProduct = (id) => {
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
