import React, { useState } from "react";
import Payment from "./Payment";
import { useSelector } from 'react-redux';
import "../Css/checkout.css";

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        <h2>📝 Checkout</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="order-items">
            {cart.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.name} />
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ₹{item.price * item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="total-amount">
            <h3>Total Amount: ₹{totalAmount}</h3>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Delivery Address</label>
            <textarea name="address" className="form-control" onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phone" className="form-control" onChange={handleChange} required />
          </div>

          <div className="checkout-buttons">
            <button type="submit" className="place-order-btn">Place Order</button>
            <Payment />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
