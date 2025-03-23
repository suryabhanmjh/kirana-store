import React from "react";

const Payment = () => {
  const handlePayment = () => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY, // Use environment variable
      amount: 50000, // Amount in Paisa (₹500)
      currency: "INR",
      name: "Kirana Store",
      description: "Test Payment",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Suryabhan Singh",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div className="container mt-5 text-center">
      <h2>💳 Payment</h2>
      <button className="btn btn-success" onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
