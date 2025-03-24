import React from "react";
import { Link } from "react-router-dom";
import "../Css/home.css";
import CarouselComponent from "./CarouselComponent";

const Home = () => {
  return (
    <div className="home-container">
       <CarouselComponent />
      <div className="home-content">
        <h1>Welcome to Kirana Store</h1>
        <p>Get fresh groceries delivered to your home!</p>
        <Link to="/products">
          <button className="shop-now-btn">🛍️ Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;