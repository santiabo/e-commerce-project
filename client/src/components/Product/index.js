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
import UnitsAmount from "../UnitsAmount";


const image = "https://cdn.shopify.com/s/files/1/0268/1454/6031/products/boosted-rev-3-4-turn_2000x.png?v=1587691170"

const Product = ({ product, category, reviews }) => {

  return (
    <ProductWrapper>
      <LeftSide>
        <ImagesColumn images={product.images} />
        <ImageContainer>
          <img src={product.images[0]} />
        </ImageContainer>
      </LeftSide>
      <RightSide>
        <CategoryTag>{category.name}</CategoryTag>
        <Title>{product.title}</Title>
        <RatingWrapper>
          <Rating stars={Math.round(reviews.average)} />
          <span>{reviews.average} ({reviews.total} reviews)</span>
        </RatingWrapper>
        <Description>
          {product.description}
        </Description>
        <Price>
          $ {product.price}
        </Price>
        <ButtonsWrapper>
          <UnitsAmount />
          <Button>Add to Cart</Button>
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  )
}

export default Product;