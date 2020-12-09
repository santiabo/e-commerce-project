import React from "react";

// Components
import ImagesColumn from "../ImagesColumn";
import Rating from "../Rating";
import Button from "../Button";

// StyledComponents
import {
  ProductWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  RatingWrapper,
  Title,
  Description,
  CategoryTag,
  Price,
  ButtonsWrapper
} from "./styles";


const image = "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-3-4-turn_2000x.png?v=1587691170"

const Product = () => {

  return (
    <ProductWrapper>
      <LeftSide>
        <ImagesColumn />
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <CategoryTag>Monopatin</CategoryTag>
        <Title>Monopatin Dell</Title>
        <RatingWrapper>
          <Rating stars={4} />
          <span>4 (1 review)</span>
        </RatingWrapper>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </Description>
        <Price>
          $ 400.00
        </Price>
        <ButtonsWrapper>
          {/* <UnitsAmount /> */}
          <Button>Add to Cart</Button>
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  )
}

export default Product;