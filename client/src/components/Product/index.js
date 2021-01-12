import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";
import { addItemToCart, setItemToCart } from "../../redux/actions/cart";


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
import ReviewForm from "../ReviewForm";
import { getReviews } from "../../redux/actions/review";

const Product = ({ match }) => {

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProduct(match.params.id));
    dispatch(getReviews(match.params.id));
  }, []);

  let product = useSelector(state => state.product.productDetail);
  let { average, reviews } = useSelector(state => state.reviews);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const handleClick = () => {


    if (!isUser) {
      dispatch(setItemToCart({ ...product, quantity }, quantity));

    } else {
      dispatch(addItemToCart({
        quantity,
        productId: product.id,
        price: product.price,
        // orderId
      }));
    }
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
            {average ? <>
              <Rating stars={average} />
              <span>{average} ({reviews.length} reviews)</span>
            </>
              : null}
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
      <ReviewsList />
      <ReviewForm productId={product.id} />
    </ProductWrapper>
  );
};

export default Product;