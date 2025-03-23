import React, { useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Wheat Flour (5kg)", price: 250, quantity: 1 },
    { id: 2, name: "Rice (10kg)", price: 600, quantity: 1 },
  ]);

  // Quantity Update Function
  const updateQuantity = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  // Total Price Calculation
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2>🛒 Your Cart</h2>
      {cart.length === 0 ? <p>Cart is Empty!</p> : 
      <table className="table">
        <thead>
          <tr>
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
              <td>{item.name}</td>
              <td>₹{item.price}</td>
              <td>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                {item.quantity}
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </td>
              <td>₹{item.price * item.quantity}</td>
              <td>
                <button className="btn btn-danger" onClick={() => setCart(cart.filter(i => i.id !== item.id))}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>}

      <h3>Total: ₹{totalPrice}</h3>
      <a href="/checkout">
        <button className="btn btn-success">Proceed to Checkout</button>
      </a>
    </div>
  );
};

export default Cart;
