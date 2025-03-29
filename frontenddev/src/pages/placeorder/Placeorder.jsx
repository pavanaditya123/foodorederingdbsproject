import React, { useContext } from 'react';
import './Placeorder.css'
import { StoreContext } from '../../context/Storecontext';
const Placeorder = () => {
    const { getTotalcartAmount } = useContext(StoreContext);
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
            
            <div className="multi-fields">
                <input type='text' placeholder='First Name'/>
                <input type='text' placeholder='Last Name'  />

            </div>
            <input type='email' placeholder='Email Address' />
            <input type='text' placeholder='Street' />
            <div className="multi-fields">
                <input type='text' placeholder='City'/>
                <input type='text' placeholder='State'/>
            </div>
            <div className="multi-fields">
                <input type='text' placeholder='Zip_code'/>
                <input type='text' placeholder='Country'  />
            </div>
            <input type='text' placeholder='Phone' />
            </div>
            <div className="place-order-right">
            <div className='cart-total'>
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalcartAmount()}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalcartAmount()===0?0:2}</p>
          </div>
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalcartAmount()===0?0:getTotalcartAmount() + 2}</b>
          </div>
          <button>Proceed To Payment</button>
        </div>
            </div>
        </form>
    );
}

export default Placeorder;
