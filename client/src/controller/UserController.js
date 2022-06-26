import axios from "axios";
const url = process.env.REACT_APP_API_URL + "user/";

export const AddNewUser = async (user) => {
  try {
    var res = await axios.post(url + "signup/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    sessionStorage.setItem("user", res.data.msg);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const checkUserPassword = async (user) => {
  try {
    var res = await axios.post(url + "signin/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const getAllUsers = () => {
  return (axios.get(url + "getAll/"),
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

export const updateUser = async (user) => {
  try {
    var res = await axios.post(url + "update/", {
      params: user,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return error.response;
  }
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
