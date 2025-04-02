import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={closeMenu}>
          🛍️ <span className="brand-name">Kirana Store</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <div className="nav-left">
              <li className="nav-item">
                <Link className="nav-link" to="/products" onClick={closeMenu}>🛒 Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart" onClick={closeMenu}>🛍️ Cart</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/checkout" onClick={closeMenu}>Checkout</Link>
              </li>
            </div>
            <div className="nav-right">
              <li className="nav-item">
                <Link className="nav-link auth-link" to="/auth" onClick={closeMenu}>👤 Login/Signup</Link>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;