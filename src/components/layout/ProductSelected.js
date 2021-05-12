import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Product() {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://placedog.net/${size}/${size}`,
  }));

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default Product;
