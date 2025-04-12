import React, { useState } from 'react';

const flavorMap = {
  chocolate: ['Chocolate Fantasy', 'Brownie Sundae'],
  fruit: ['Gadbad Ice Cream', 'Mango Mania'],
  nutty: ['Bee Hive', 'Cashew Crunch'],
};

const FlavorRecommendation = () => {
  const [preference, setPreference] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleChange = (e) => {
    const selected = e.target.value;
    setPreference(selected);
    setRecommendations(flavorMap[selected] || []);
  };

  return (
    <div className="mt-4 p-3 bg-light border rounded">
      <h5>🎯 Get Flavor Recommendations</h5>
      <select className="form-select mb-3" onChange={handleChange}>
        <option value="">Select a preference</option>
        <option value="chocolate">Chocolate</option>
        <option value="fruit">Fruity</option>
        <option value="nutty">Nutty</option>
      </select>

      {recommendations.length > 0 && (
        <ul>
          {recommendations.map((rec, i) => (
            <li key={i}>{rec}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlavorRecommendation;
