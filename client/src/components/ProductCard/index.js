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
  CategoryTag,
  InfoBox,
  StyledLink
} from './styles';

const ProductCard = ({ product, categories, reviews = { average: 4, } }) => {

  return (
    <StyledLink to={"product/" + product.id}>
      <ProductCardWrapper>

        <ImageContainer>
          <img src={product.images[0]} alt={product.name} />
        </ImageContainer>

        <InfoBox>
        
          <RowWrapper>
            {categories.map(category => <CategoryTag key={category.id}>{category.name}</CategoryTag>)}
            <Rating stars={Math.round(reviews.average)} />
          </RowWrapper>

          <Title>{product.name.substring(0, 55)} {product.name.length > 55 ? "..." : ""}</Title>

          <Price>$ {product.price}</Price>

          <ButtonsWrapper>
            <Button>DETAIL</Button>
          </ButtonsWrapper>

        </InfoBox>

      </ProductCardWrapper>
    </StyledLink >
  );
};

export default ProductCard;