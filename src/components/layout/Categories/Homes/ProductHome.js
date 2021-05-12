import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import CancelIcon from "@material-ui/icons/Cancel";

function ProductHome() {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://res.cloudinary.com/dux0yt3qn/image/upload/v1620792410/GroupProject/Si-Racha-Thailand_tpj01s.jpg`,
  }));

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default ProductHome;
