import React from "react";

import { ImageBox, ImagesColumnWrapper } from "./styles";

const images = [
  "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-3-4-turn_2000x.png?v=1587691170",
  "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/Boosted-Rev-Folded_2x_00a83c75-409a-4b19-86b2-9808fcf5208e_2000x.png?v=1587691170",
  "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-light_2000x.png?v=1587691170",
  "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-profile-left_2000x.png?v=1587691170"
]

const ImagesColumn = () => {
  return (
    <ImagesColumnWrapper>
      {images.map(i => <ImageBox src={i} />)}
    </ImagesColumnWrapper>
  )
}

export default ImagesColumn;