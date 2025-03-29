import React, { useState } from "react";
import "../Css/product.css";

const productsData = [
  { id: 1, name: "Rice", price: 50, category: "Grains" },
  { id: 2, name: "Wheat", price: 40, category: "Grains" },
  { id: 3, name: "Apple", price: 100, category: "Fruits" },
  { id: 4, name: "Banana", price: 30, category: "Fruits" },
  { id: 5, name: "Milk", price: 60, category: "Dairy" },
  { id: 6, name: "Cheese", price: 200, category: "Dairy" },
];

const categories = ["All", "Grains", "Fruits", "Dairy"];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="products-container">
      <h2>🛍️ Our Products</h2>
      
      {/* Category Filter */}
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product List */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
