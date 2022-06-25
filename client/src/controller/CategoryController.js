import axios from "axios";
const url = process.env.REACT_APP_API_URL + "category/";

export const AddNewCategory = (category) => {
  return axios
    .post(url + "create/", {
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

export const getAllCategories = () => {
  return axios
    .post(url + "getAll/", {
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

export const getCategoryById = (id) => {
  return axios
    .post(url + "getCategoryById/", {
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

export const updateCategory = (category) => {
  return axios
    .post(url + "update/", {
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

export const deleteCategory = (id) => {
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
