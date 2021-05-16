import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import CancelIcon from "@material-ui/icons/Cancel";

function Product({ product }) {
  //  src: `https://placedog.net/${size}/${size}`
  const images = product?.Photos?.map((e) => {
    return { src: e.post };
  });

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default Product;
