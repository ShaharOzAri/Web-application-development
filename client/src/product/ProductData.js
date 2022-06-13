import axios from "axios";

export const getProduct = () => {
  // http request to the server to fetch the product
  //   return axios.get("https://api.npms.io/v2/search?q=react").then((response) => {
  //     console.log("sdfsdf");
  //   });
  return {
    status: 200,
    data: { productName: "classic name necklace", productPrice: "29.90" },
  };
};
