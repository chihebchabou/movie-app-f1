import React from 'react';
import Rate from './Rate';
import { useSelector, useDispatch } from 'react-redux';
import { setTitle, setRating } from '../../redux/actions/movieActions';

const Filter = () => {
  const title = useSelector(state => state.moviesReducer.title);
  const rating = useSelector(state => state.moviesReducer.rating);

  const dispatch = useDispatch();

  const onInputChange = e => dispatch(setTitle(e.target.value));
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
