import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../store/cartSlice';
import { toast } from 'react-toastify';
import "../Css/cart.css";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (id, amount) => {
    dispatch(updateQuantity({ id, amount }));
  };

  const handleRemove = (id, name) => {
    dispatch(removeFromCart(id));
    toast.error(`${name} removed from cart`);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is Empty!</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} className="cart-product-image" />
                </td>
                <td>{item.name}</td>
                <td>₹{item.price}</td>
                <td>
                  <button className="quantity-btn" onClick={() => handleUpdateQuantity(item.id, -1)}>-</button>
                  {item.quantity}
                  <button className="quantity-btn" onClick={() => handleUpdateQuantity(item.id, 1)}>+</button>
                </td>
                <td>₹{item.price * item.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id, item.name)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <h3>Total: ₹{totalPrice}</h3>
      <Link to="/checkout">
        <button className="btn btn-success">Proceed to Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
