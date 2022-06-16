import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderImage from "./CarouselImage";
import Banner1 from "../images/banner1.png";
import Banner2 from "../images/banner2.png";

function MyCarousel(props) {
  var images = [
    {
      src: Banner1,
      alt: "This is Banner 1!",
    },
    {
      src: Banner2,
      alt: "This is Banner 2!",
    },
  ];

  return (
    <Carousel sx={{ marginBottom: 5 }}>
      {images.map((image, i) => (
        <SliderImage key={i} image={image} />
      ))}
    </Carousel>
  );
}

export default MyCarousel;
