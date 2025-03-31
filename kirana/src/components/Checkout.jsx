import React, { useState } from "react";
import { useSelector } from 'react-redux';
import "../Css/checkout.css";

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [showPayment, setShowPayment] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <div className="checkout-form">
        {!showPayment ? (
          <>
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
              </div>
            </form>
          </>
        ) : (
          <div className="payment-section">
            <h2>💳 Payment Details</h2>
            <div className="payment-amount">
              <h3>Amount to Pay</h3>
              <span className="amount">₹{totalAmount}</span>
            </div>
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div className="payment-options">
                <button className="payment-option active">
                  <span className="icon">💳</span>
                  <span>Credit/Debit Card</span>
                </button>
                <button className="payment-option">
                  <span className="icon">📱</span>
                  <span>UPI</span>
                </button>
                <button className="payment-option">
                  <span className="icon">🏦</span>
                  <span>Net Banking</span>
                </button>
              </div>
              <button className="proceed-payment-btn">
                Proceed to Payment
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
