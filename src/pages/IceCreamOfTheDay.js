import React, { useEffect, useState } from 'react';

const iceCreamOptions = [
  'Gadbad Ice Cream',
  'Bee Hive',
  'Chocolate Fantasy',
  'Marzi Paan',
  'Vanilla Swirl',
  'Mango Mania',
];

const IceCreamOfTheDay = () => {
  const [iceCream, setIceCream] = useState('');

  useEffect(() => {
    const todayPick = iceCreamOptions[Math.floor(Math.random() * iceCreamOptions.length)];
    setIceCream(todayPick);
  }, []);

  return (
    <div className="mb-4 p-3 bg-warning rounded text-center">
      <h4>🍨 Ice Cream of the Day</h4>
      <p className="fs-5 fw-bold">{iceCream}</p>
    </div>
  );
};

export default IceCreamOfTheDay;