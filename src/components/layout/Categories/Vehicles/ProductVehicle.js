import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import CancelIcon from "@material-ui/icons/Cancel";

function ProductVehicle() {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://res.cloudinary.com/dux0yt3qn/image/upload/v1620736392/GroupProject/e254bc159f318a8abd4cce7ac16a095b_c3tr7v.jpg`,
  }));

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default ProductVehicle;
