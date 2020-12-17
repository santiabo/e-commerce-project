import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";

// Components
import ImagesColumn from "../ImagesColumn";
import Rating from "../Rating";
import Button from "../Button";
import UnitsAmount from "../UnitsAmount";

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
  NoStockAlert
} from "./styles";
import NotFound from '../../containers/NotFound';

const Product = ({ match, reviews = { average: 4, total: 200 } }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);

  const product = useSelector(state => state.product.productDetail);

  const keys = Object.keys(product);
  const inStock = product.stock > 0;

  if (!product.id) {
    return <NotFound />;
  }

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
        {!inStock && <NoStockAlert>This product is currently out of stock, please come back later.</NoStockAlert>}
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

        <ButtonsWrapper>
          <UnitsAmount />
          <Button disabled={!inStock}>Add to Cart</Button>
        </ButtonsWrapper>

      </RightSide>

    </ProductWrapper>
  );
};

export default Product;