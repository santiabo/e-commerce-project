import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setItemToCart, postItemToCart } from "../../redux/actions/cart";

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
  StyledLink,
  NoStockTag,
  StyledImg
} from './styles';

const ProductCard = ({ product, categories, reviews }) => {

  const count = 1;
  const dispatch = useDispatch();

  const average = reviews.reduce((prev, curr) => prev + curr.stars, 0) / reviews.length;

  const { isUser, user } = useSelector(state => state.user);
  const orders = useSelector(state => state.order.userOrders);
  console.log(orders);
  const [order] = orders.filter(o => {
    if (o.status === "on_cart")
      return true;
    return false;
  });

  const handleClick = () => {
    if (!isUser) {
      dispatch(setItemToCart(product, count));

    } else {
      dispatch(postItemToCart({
        quantity: count,
        productId: product.id,
        price: product.price,
        orderId: order.id
      }));
      // dispatch((user.id))
    }
  };

  const inStock = product.stock > 0;
  return (
    <ProductCardWrapper>

      <StyledLink to={"product/" + product.id}>
        <ImageContainer>
          {!inStock && <NoStockTag>No Stock</NoStockTag>}
          <StyledImg src={product.images[0]} alt={product.name} inStock={inStock} />
        </ImageContainer>
      </StyledLink >

      <InfoBox>

        <RowWrapper>
          {categories.map(category => <CategoryTag key={category.id}>{category.name}</CategoryTag>)}
          {average ? <Rating stars={average} /> : null}
        </RowWrapper>

        <StyledLink to={"product/" + product.id}>
          <Title>{product.name.substring(0, 55)} {product.name.length > 55 ? "..." : ""}</Title>
        </StyledLink>

        <Price>$ {product.price}</Price>

        <ButtonsWrapper>
          <Button disabled={!inStock} onClick={handleClick}>Add to Cart</Button>
        </ButtonsWrapper>

      </InfoBox>

    </ProductCardWrapper>
  );
};

export default ProductCard;