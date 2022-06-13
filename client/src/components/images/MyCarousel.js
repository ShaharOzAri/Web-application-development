import React from "react";
import Carousel from "react-material-ui-carousel";
import SliderImage from "./SliderImage";
import Banner1 from "./banner1.png";
import Banner2 from "./banner2.png";

function MyCarousel(props) {
  var items = [
    {
      src: Banner1,
      alt: "Probably the most random thing you have ever seen!",
    },
    {
      src: Banner2,
      alt: "Hello World!",
    },
  ];

  return (
    <Carousel sx={{ marginBottom: 10 }}>
      {items.map((item, i) => (
        <SliderImage key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default MyCarousel;
