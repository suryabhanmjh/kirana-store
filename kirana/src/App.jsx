import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
