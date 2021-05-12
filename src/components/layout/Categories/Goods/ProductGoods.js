import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";

function ProductGoods() {
  const images = [900, 800, 700, 600, 500].map((size) => ({
    src: `https://res.cloudinary.com/dux0yt3qn/image/upload/v1620795817/GroupProject/158394224_767631524187876_8650270203093827287_n_wwcmkr.jpg`,
  }));

  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default ProductGoods;
