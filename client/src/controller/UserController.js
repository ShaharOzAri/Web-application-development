import axios from "axios";

export const AddNewUser = (user) => {
  return axios
    .post(process.env.REACT_APP_API_URL + "user/signup/", {
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
