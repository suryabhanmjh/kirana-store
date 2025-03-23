import React, { useState } from "react";
import Payment from "./Payment"; // ✅ Payment Button Import Kiya

const Checkout = () => {
  const [form, setForm] = useState({ name: "", address: "", phone: "" });

  // Form Data Handle
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  return (
    <>
    <div className="container mt-5">
      <h2>📝 Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Address</label>
          <input type="text" name="address" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input type="text" name="phone" className="form-control" onChange={handleChange} required />
        </div>

        {/* ✅ Order Button */}
        <button type="submit" className="btn btn-primary">Place Order</button>

        {/* ✅ Payment Button */}
        <Payment />
      </form>
    </div>
    </>
  );
};

export default Checkout;
