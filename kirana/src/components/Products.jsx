import React, { useState } from "react";
import "../Css/product.css";
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { toast } from 'react-toastify';

const productsData = [
  { id: 1, name: "Apple", price: 120, category: "Fruits", image: "src/images/Apple.webp" },
  { id: 2, name: "Banana", price: 40, category: "Fruits", image: "src/images/banana.webp" },
  { id: 3, name: "Cheese", price: 250, category: "Dairy", image: "src/images/Cheese.webp" },
  { id: 4, name: "Milk", price: 50, category: "Dairy", image: "src/images/Milk.webp" },
  { id: 5, name: "Rice", price: 60, category: "Grains", image: "src/images/Rice.webp" },
  { id: 6, name: "Wheat", price: 55, category: "Grains", image: "src/images/Wheat.webp" },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);

  // Get unique categories
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="products-container">
      <h2>🛍️ Our Products</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Price: ₹{product.price}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
