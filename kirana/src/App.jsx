import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./Css/app.css";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Provider store={store}>
      <div className="app-container">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products setCart={setCart} />} />
            <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} />} />
          </Routes>
          <ToastContainer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
