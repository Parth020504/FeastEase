import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" id="" />
          <input type="text" placeholder="Last Name" id="" />
        </div>

        <input type="email" placeholder="Email ID" id="" />
        <input type="text" placeholder="Street" id="" />

        <div className="multi-fields">
          <input type="text" placeholder="City" id="" />
          <input type="text" placeholder="State" id="" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Pin Code" id="" />
          <input type="text" placeholder="Country" id="" />
        </div>
        <input type="text" placeholder="Mobile Number" id="" />
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Summary</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>$ {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">

              <p>Delivery Fee</p>
              <p>$ {30}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>$ {getTotalCartAmount()===0?0:getTotalCartAmount()+30}</b>
            </div>

          </div>
            <button>Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder