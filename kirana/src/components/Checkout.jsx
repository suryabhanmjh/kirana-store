import React, { useState } from "react";
import { useSelector } from 'react-redux';
import "../Css/checkout.css";

const Checkout = () => {
  const cart = useSelector(state => state.cart);
  const [form, setForm] = useState({ name: "", address: "", phone: "" });
  const [showPayment, setShowPayment] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [upiId, setUpiId] = useState("");
  const [cardDetails, setCardDetails] = useState({
    number: '',
    name: '',
    expiry: '',
    cvv: ''
  });
  const [selectedBank, setSelectedBank] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const renderPaymentForm = () => {
    switch(selectedPayment) {
      case 'card':
        return (
          <div className="payment-form card-form">
            <div className="form-group">
              <label>Card Number</label>
              <input 
                type="text" 
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                value={cardDetails.number}
                onChange={(e) => setCardDetails({...cardDetails, number: e.target.value.replace(/\D/g, '').replace(/(\d{4})/g, '$1 ').trim()})}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Card Holder Name</label>
              <input 
                type="text" 
                placeholder="Name on card"
                value={cardDetails.name}
                onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
                className="form-control"
              />
            </div>
            <div className="card-extra-details">
              <div className="form-group expiry">
                <label>Expiry Date</label>
                <input 
                  type="text" 
                  placeholder="MM/YY"
                  maxLength="5"
                  value={cardDetails.expiry}
                  onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
                  className="form-control"
                />
              </div>
              <div className="form-group cvv">
                <label>CVV</label>
                <input 
                  type="password" 
                  placeholder="***"
                  maxLength="3"
                  value={cardDetails.cvv}
                  onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                  className="form-control"
                />
              </div>
            </div>
          </div>
        );
      case 'netbanking':
        return (
          <div className="payment-form netbanking-form">
            <div className="form-group">
              <label>Select Bank</label>
              <select 
                className="form-control"
                value={selectedBank}
                onChange={(e) => setSelectedBank(e.target.value)}
              >
                <option value="">Choose your bank</option>
                <option value="sbi">State Bank of India</option>
                <option value="hdfc">HDFC Bank</option>
                <option value="icici">ICICI Bank</option>
                <option value="axis">Axis Bank</option>
                <option value="kotak">Kotak Mahindra Bank</option>
              </select>
            </div>
            <p className="payment-note">You will be redirected to your bank's website to complete the payment</p>
          </div>
        );
      case 'upi':
        return (
          <div className="payment-form upi-form">
            <div className="form-group">
              <label>Enter UPI ID</label>
              <input 
                type="text" 
                placeholder="username@upi"
                value={upiId}
                onChange={(e) => setUpiId(e.target.value)}
                className="form-control"
              />
            </div>
            <p className="payment-note">Popular UPI Apps: Google Pay, PhonePe, Paytm</p>
          </div>
        );
      case 'cod':
        return (
          <div className="payment-form cod-form">
            <div className="cod-info">
              <span className="icon">💵</span>
              <h4>Cash on Delivery</h4>
              <p className="payment-note">Pay in cash when your order is delivered</p>
              <ul className="cod-points">
                <li>✓ Pay when you receive your order</li>
                <li>✓ No additional charges</li>
                <li>✓ Keep exact change ready</li>
              </ul>
            </div>
          </div>
        );
      default:
        return null;
    }
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
                <button 
                  className={`payment-option ${selectedPayment === 'card' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('card')}
                >
                  <span className="icon">💳</span>
                  <span>Credit/Debit Card</span>
                </button>
                <button 
                  className={`payment-option ${selectedPayment === 'upi' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('upi')}
                >
                  <span className="icon">📱</span>
                  <span>UPI</span>
                </button>
                <button 
                  className={`payment-option ${selectedPayment === 'netbanking' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('netbanking')}
                >
                  <span className="icon">🏦</span>
                  <span>Net Banking</span>
                </button>
                <button 
                  className={`payment-option ${selectedPayment === 'cod' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('cod')}
                >
                  <span className="icon">💵</span>
                  <span>Cash on Delivery</span>
                </button>
              </div>
              {renderPaymentForm()}
              <button className="proceed-payment-btn">
                {selectedPayment === 'cod' ? 'Place Order' : selectedPayment === 'upi' ? 'Pay Now with UPI' : 'Proceed to Payment'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
