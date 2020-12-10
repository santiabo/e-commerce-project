import React from "react";

import { ImageBox, ImagesColumnWrapper } from "./styles";

const ImagesColumn = ({ images, product }) => {
  return (
    <ImagesColumnWrapper>
      {/* TODO: Cambiar key por product.id */}
      {images.map((img, i) => <ImageBox src={img} alt={product.title} key={i} />)}
    </ImagesColumnWrapper>
  );
};

export default ImagesColumn;