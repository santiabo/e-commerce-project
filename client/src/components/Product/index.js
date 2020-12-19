import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";
import { setItemToCart, decrementItem,incrementItem } from "../../redux/actions/cart";


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
  ButtonsWrapper,
  CategoriesTags,
} from "./styles";
import { UnitsAmountWrapper } from "../UnitsAmount/styles";

const Product = ({ match, reviews = { average: 4, total: 200 } }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  const product = useSelector(state => state.product.productDetail);

  const { cart } = useSelector(state => state.cart);

  console.log('cart',cart)
  
  const quantity=1;
  

  const handleClick = () => {
    if (!cart) {
       quantity = cart[0].quantity;
    }
    dispatch(setItemToCart(product, quantity));
  };

  const inStock = product.stock > 0;

  let keys = Object.keys(product);
  return (
    <ProductWrapper>
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
          <Rating stars={Math.round(reviews.average)} />
          <span>{reviews.average} ({reviews.total} reviews)</span>
        </RatingWrapper>
        <Description>
          {product.description}
        </Description>
        <Price>
          $ {product.price}
        </Price>
        <h4>Units: {product.quantity}</h4>
        <ButtonsWrapper>
        <UnitsAmountWrapper>
                <input type="button"  value='-'  onClick={() => product.quantity > 1 && dispatch(decrementItem(product.id))}  />
                <input type="button" value={product.quantity} />
                <input type="button" value='+' onClick={() => dispatch(incrementItem(product.id))} />
        </UnitsAmountWrapper>
          <Button disabled={!inStock} onClick={handleClick}>Add to Cart</Button>
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  );
};

export default Product;