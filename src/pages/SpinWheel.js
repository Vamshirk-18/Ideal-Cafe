import React, { useState } from 'react';
import './SpinWheel.css'; // We’ll create this for styles

const rewards = [
  '🎉 10% Off',
  '🍦 Free Scoop',
  '🥳 20% Off',
  '😋 Try Again',
  '☕ Free Topping',
  '🎁 Mystery Gift',
];

const SpinWheel = () => {
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);

  const handleSpin = () => {
    if (spinning) return;

    setSpinning(true);
    setResult(null);

    const randomIndex = Math.floor(Math.random() * rewards.length);
    const angle = 360 * 5 + (360 / rewards.length) * randomIndex;

    const wheel = document.querySelector('.wheel');
    wheel.style.transition = 'transform 4s ease-out';
    wheel.style.transform = `rotate(${angle}deg)`;

    setTimeout(() => {
      setSpinning(false);
      setResult(rewards[randomIndex]);
    }, 4000);
  };

  return (
    <div className="text-center my-5">
      <h3>🎯 Spin the Wheel & Win!</h3>
      <div className="wheel-container my-4">
        <div className="wheel" />
        <div className="pointer">▼</div>
      </div>
      <button className="btn btn-warning" onClick={handleSpin} disabled={spinning}>
        {spinning ? 'Spinning...' : 'Spin Now'}
      </button>
      {result && <div className="mt-4 alert alert-success">You got: {result}</div>}
    </div>
  );
};

export default SpinWheel;
