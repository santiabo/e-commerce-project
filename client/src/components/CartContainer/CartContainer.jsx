import React from 'react'
import CartItem from '../CartItem/CartItem'

//const { cart } = (viene del store)

const CartContainer = () => {

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
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your cart</h2>
      </header>
      {/* cart items */}
      <div>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>$0.00</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => console.log('clear cart')}
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
