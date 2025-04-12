import React, { useState } from 'react';

const RatingStars = ({ itemName }) => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p className="mb-1">Rate: {itemName}</p>
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          style={{ cursor: 'pointer', color: i < rating ? 'gold' : 'gray', fontSize: '24px' }}
          onClick={() => setRating(i + 1)}
        >★</span>
      ))}
    </div>
  );
};

export default RatingStars;