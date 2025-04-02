import React, { useState, useEffect } from "react";
import "../Css/product.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-toastify';

const categoryIcons = {
  All: "🏪",
  Fruits: "🍎",
  Dairy: "🥛",
  Grains: "🌾"
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  // Get unique categories from products
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      
      <div className="category-section">
        <h3 className="category-title">Categories</h3>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${category === selectedCategory ? "active" : ""}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="category-icon">{categoryIcons[category]}</span>
              <span className="category-name">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <p className={`stock-status ${product.stock <= 0 ? 'out-of-stock' : product.stock < 5 ? 'low-stock' : ''}`}>
              {product.stock <= 0 ? 'Out of Stock' : 
               product.stock < 5 ? `Low Stock: ${product.stock} left` : 
               `In Stock: ${product.stock}`}
            </p>
            <button 
              onClick={() => handleAddToCart(product)} 
              disabled={product.stock <= 0}
              className={product.stock <= 0 ? 'disabled' : ''}
            >
              {product.stock <= 0 ? 'Out of Stock' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
