import React, { useState, useEffect } from 'react';

const OrderTracker = () => {
  const [statusIndex, setStatusIndex] = useState(0);
  const stages = ['Order Received', 'Preparing', 'Ready for Pickup', 'Out for Delivery', 'Delivered'];

  useEffect(() => {
    const timer = setInterval(() => {
      setStatusIndex((prev) => (prev < stages.length - 1 ? prev + 1 : prev));
    }, 3000);

    return () => clearInterval(timer);
  }, [stages.length]); // Added stages.length to dependencies

  return (
    <div className="bg-success text-white p-3 mt-4 rounded">
      <h5>🚚 Order Status:</h5>
      <p>{stages[statusIndex]}</p>
    </div>
  );
};

export default OrderTracker;
