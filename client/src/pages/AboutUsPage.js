import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { Box, Flex } from "@chakra-ui/react";
import { useJsApiLoader } from "@react-google-maps/api";

export default function AboutUsPage() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAirgb_ESgT3BISdOZL8D-_189_aEL0R7g",
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
      <Box position='absolute' left={"25%"} bottom={0} h='30%' w='50%'>
        <GoogleMap
          zoom={10}
          center={{ lat: 32.03514, lng: 34.876912 }}
          mapContainerStyle={{ width: "100%", height: "100%" }}
        ></GoogleMap>
      </Box>
    </Flex>
  );
}
