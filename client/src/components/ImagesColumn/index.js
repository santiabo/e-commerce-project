import React from "react";

import { ImageBox, ImagesColumnWrapper } from "./styles";

const ImagesColumn = ({ images }) => {
  return (
    <ImagesColumnWrapper>
      {images.map(i => <ImageBox src={i} />)}
    </ImagesColumnWrapper>
  )
}

export default ImagesColumn;