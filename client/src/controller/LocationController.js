import axios from "axios";

export const AddNewLocation = (location) => {
  return axios
    .post(process.env.REACT_APP_API_URL + "location/createlocation/", {
      params: location,
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

export const getLocations = async () => {
  const result = await axios.get(
    process.env.REACT_APP_API_URL + "location/getLocations/",
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return result;
};
