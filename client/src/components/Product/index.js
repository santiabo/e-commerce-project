import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";
import { setItemToCart, decrementItem, incrementItem } from "../../redux/actions/cart";


// Components
import ImagesColumn from "../ImagesColumn";
import Rating from "../Rating";
import Button from "../Button";
import ReviewList from "../ReviewsList";

// StyledComponents
import {
  ProductWrapper,
  ProductDetailWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  RatingWrapper,
  Title,
  Description,
  CategoryTag,
  Price,
  ButtonsWrapper,
  CategoriesTags,
} from "./styles";
import { UnitsAmountWrapper } from "../UnitsAmount/styles";
import ReviewsList from "../ReviewsList";

const Product = ({ match, reviews = { average: 4, total: 200 } }) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  let product = useSelector(state => state.product.productDetail);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const handleClick = () => {
    dispatch(setItemToCart({ ...product, quantity }, quantity));
  };

  const inStock = product.stock > 0;

  let keys = Object.keys(product);
  console.log(product);
  return (
    <ProductWrapper>
      <ProductDetailWrapper>

        <LeftSide>
          <ImagesColumn product={product} />
          <ImageContainer>
            {
              keys.length &&
              <img src={product.images[0]} alt={product.title} />
            }
          </ImageContainer>
        </LeftSide>
        <RightSide>
          <CategoriesTags>
            {keys.length && product.categories.map(category => (
              <CategoryTag>{category.name}</CategoryTag>
            ))}
          </CategoriesTags>
          <Title>{product.name}</Title>
          <RatingWrapper>
            <Rating stars={reviews.average} />
            <span>{reviews.average} ({reviews.total} reviews)</span>
          </RatingWrapper>
          <Description>
            {product.description}
          </Description>
          <Price>
            $ {product.price}
          </Price>
          <h4>Units: {quantity}</h4>
          <ButtonsWrapper>
            <UnitsAmountWrapper>
              <input type="button" value='-' onClick={() => quantity > 1 && decrement()} />
              <input type="button" value={quantity} />
              <input type="button" value='+' onClick={() => increment()} />
            </UnitsAmountWrapper>
            <Button disabled={!inStock} onClick={handleClick}>Add to Cart</Button>
          </ButtonsWrapper>
        </RightSide>
      </ProductDetailWrapper>
      {
        product.reviews ?
          <ReviewsList reviews={product.reviews} />
          : null
      }
    </ProductWrapper>
  );
};

export default Product;