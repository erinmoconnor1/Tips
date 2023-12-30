import React from 'react';

function StarRating({ value, onChange }) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <label key={star}>
          <input
            type="radio"
            name="rating"
            value={star}
            checked={value === star}
            onChange={() => onChange(star)}
          />
          ★
        </label>
      ))}
    </div>
  );
}

export default StarRating;
