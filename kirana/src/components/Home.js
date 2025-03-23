import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to Kirana Store</h1>
      <p>Get fresh groceries delivered to your home!</p>
      <Link to="/products">
        <button className="btn btn-warning">Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
