import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Box, Flex } from "@chakra-ui/react";
import { getLocations } from "../../controller/LocationController";
import { useState, useEffect } from "react";
import React from "react";

export default function Map() {
  const [locations, setLocations] = useState(null);

  const getAllLocations = async () => {
    const recivedLocatios = await getLocations();
    if (recivedLocatios.status == 200) {
      setLocations(recivedLocatios.data.msg);
      console.log(typeof recivedLocatios.data.msg);
    }
  };

  useEffect(() => {
    getAllLocations();
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <Flex
      position='relative'
      flexDirection='column'
      alignItems='center'
      h='100vh'
      w='100vw'
    >
      <Box position='absolute' left={"25%"} bottom={0} h='50%' w='50%'>
        <GoogleMap
          zoom={10}
          center={{ lat: 32.03514, lng: 34.876912 }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        >
          {locations != null
            ? locations.map((marker) => (
                <Marker
                  position={{ lat: marker.latitude, lng: marker.longtitude }}
                  key={marker.id}
                />
              ))
            : ""}
        </GoogleMap>
      </Box>
    </Flex>
  );
}
