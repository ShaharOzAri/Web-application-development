import axios from "axios";

export const getProduct = () => {
  // http request to the server to fetch the product
  //   return axios.get("https://api.npms.io/v2/search?q=react").then((response) => {
  //     console.log("sdfsdf");
  //   });
  return {
    status: 200,
    data: { productName: "Classic Name Necklace", productPrice: "$29.90" },
  };
};
