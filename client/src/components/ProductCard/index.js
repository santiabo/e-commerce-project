import React from 'react';

// Components
import Button from '../Button';
import Rating from '../Rating';

// Styled Components
import {
  ProductCardWrapper,
  ButtonsWrapper,
  ImageContainer,
  Price,
  Title,
  RowWrapper,
  CategoryTag
} from './styles';

const ProductCard = ({ product, category, reviews }) => {

  return (
    <ProductCardWrapper>

      <ImageContainer>
        <img src={product.images[0] + 'asddf3'} alt={product.title} />
      </ImageContainer>

      <RowWrapper>
        <CategoryTag>{category.name}</CategoryTag>
        <Rating stars={Math.round(reviews.average)} />
      </RowWrapper>

      <Title>{product.title}</Title>

      <Price>$ {product.price}</Price>

      <ButtonsWrapper>
        <Button>Add to Cart</Button>
      </ButtonsWrapper>

    </ProductCardWrapper>
  );
};

export default ProductCard;