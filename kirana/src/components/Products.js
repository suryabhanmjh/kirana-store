import React, { useState } from "react";

const Products = () => {
  const [products] = useState([
    { id: 1, name: "Wheat Flour (5kg)", price: 250 },
    { id: 2, name: "Rice (10kg)", price: 600 },
    { id: 3, name: "Cooking Oil (1L)", price: 180 },
    { id: 4, name: "Sugar (1kg)", price: 50 },
  ]);

  return (
    <div className="container mt-5">
      <h2>Our Products</h2>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-3" key={item.id}>
            <div className="card p-3 m-2">
              <h5>{item.name}</h5>
              <p>Price: ₹{item.price}</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
