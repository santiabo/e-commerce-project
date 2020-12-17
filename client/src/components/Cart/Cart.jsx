import React, { useEffect, useState } from "react";

// Components
import Button from "../Button";
import UnitsAmount from "../UnitsAmount";

// StyledComponents
import {
  ProductWrapper,
  LeftSide,
  RightSide,
  ImageContainer,
  Title,
  Description,
  CategoryTag,
  Price,
  ButtonsWrapper,
  CategoriesTags
} from "./styles";



const CartItem = () => {  
  
  const cartFromLocalStorage= JSON.parse(localStorage.getItem('cart')) || '[]';
  const [cart, setCart] = useState(cartFromLocalStorage)

  useEffect(()=>{
    localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])

  if (cart.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>Your cart</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }

  const removeFromCart = (productToRemove) => {
    let filterCart=cart.filter((item) => item.id !== productToRemove.id);
    setCart(filterCart);
  }

  const clearCart = () => {  
    setCart([])  
  }

  const getTotal = ()=>{
    return cart.reduce((sum,{price})=> sum + Number(price), 0)
  }

  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>Shipping Cart</h2>
      </header>
      {console.log('Cart',cart)}
      {cart.map((item) =>
        <div>
          {console.log('item:',item)}
          <ProductWrapper>
            <LeftSide>
             <ImageContainer>
                <img src={item.images[0]} width={150} alt={item.name} />
             </ImageContainer>             
            </LeftSide>
            <RightSide>
              <CategoriesTags>
                {item.categories.map(category => (
                  <CategoryTag>{category.name}</CategoryTag>
                ))}
              </CategoriesTags>
              <Title>{item.name}</Title>
              <Description>
                {item.description}
              </Description>
              <Price>
                $ {item.price}
              </Price>
              <ButtonsWrapper>
                <UnitsAmount />
                <Button>
                  <button onClick={() => removeFromCart(item)}>
                    Remove
                 </button>
                </Button>
              </ButtonsWrapper>
            </RightSide>
          </ProductWrapper>
        </div>
      )}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${getTotal()}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => clearCart()}
        >
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartItem;