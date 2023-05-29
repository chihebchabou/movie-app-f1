import React from 'react';
import Rate from './Rate';

const Filter = ({ rating, setRating, title, setTitle }) => {
  const onInputChange = e => setTitle(e.target.value);
  return (
    <div className="my-5">
      <input
        type="text"
        value={title}
        onChange={onInputChange}
        className="form-control"
      />
      <Rate rating={rating} setRating={setRating} />
    </div>
  );
};

export default Filter;
