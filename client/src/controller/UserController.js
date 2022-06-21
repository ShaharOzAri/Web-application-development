import axios from "axios";
const url = process.env.REACT_APP_API_URL + "user/";

export const AddNewUser = (user) => {
  return axios
    .post(url + "signup/", {
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

export const checkUserPassword = (user) => {
  return (axios.post(url + "signin/"),
  {
    params: user,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getAllUsers = () => {
  return (axios.post(url + "getAll/"),
  {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const getUserById = (id) => {
  return (axios.post(url + "getUserById/"),
  {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const updateUser = (user) => {
  return (axios.post(url + "update/"),
  {
    params: user,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};

export const deleteuser = (id) => {
  return (axios.post(url + "delete/"),
  {
    params: id,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
};
