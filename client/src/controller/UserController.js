import axios from "axios";

export const AddNewUser = (user) => {
  // http request to the server to fetch the product
  //   return axios.get("https://api.npms.io/v2/search?q=react").then((response) => {
  //     console.log("sdfsdf");
  //   });
  const API_URL = "http://localhost:5000/";
  return axios
    .post(API_URL + "signup/", {
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
