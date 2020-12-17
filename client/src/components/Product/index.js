import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/product";
import { Link } from 'react-router-dom'

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
  CategoriesTags
} from "./styles";


const Product = ({ match, reviews = { average: 4, total: 200 } }) => {
  const cartFromLocalStorage= JSON.parse(localStorage.getItem('cart')) || '[]';
  const [cart, setCart] = useState(cartFromLocalStorage)

  const [componentInCart, setcomponentInCart] = useState(false)

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, []);
  const product = useSelector(state => state.product.productDetail);
  

  const handlerClick = (products, cart) => {
    setCart([
      ...cart,products
    ])
    mapFunction()
  }


  const mapFunction = () => {
    let filterItem = cart.filter((item) => item.id === product.id);
    filterItem.length > 0 ? setcomponentInCart(false) : setcomponentInCart(true)
  }

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
        <ButtonsWrapper>
          <UnitsAmount />
          {
            componentInCart ?
              <Button>
                <Link to='/cart'>
                  <h3>This product is in your Cart</h3>
                </Link>
              </Button>
              :
              <Button>
                <button onClick={() => handlerClick(product, cart)} >
                  Add to Cart
                 </button>
              </Button>

          }
        </ButtonsWrapper>
      </RightSide>
    </ProductWrapper>
  );
};

export default Product;