import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/Storecontext';

const Cart = () => {
  const { cartitems, food_list, removefromcart, getTotalcartAmount } = useContext(StoreContext);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {
          food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div key={index}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>${item.price * cartitems[item._id]}</p>
                    <p className='cross' onClick={() => removefromcart(item._id)}>x</p>
                  </div>
                  <hr />
                </div>
              )
            } else {
              return null;
            }
          })
        }
      </div>
      <div className="cart-bottom">
        <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalcartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>$2</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalcartAmount() + 2}</b>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className='cart-promocode'>
          <p>If you have a promo code, enter it here:</p>
          <div className="cart-promocode-input">
            <input type='text' placeholder='Promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
