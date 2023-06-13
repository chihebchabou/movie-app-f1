import { useDispatch } from 'react-redux';

const Rate = ({ rating, setRating }) => {
  const dispatch = useDispatch();
  const showStars = numberOfStars => {
    const starsArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= numberOfStars) {
        starsArray.push(
          <span
            style={style}
            className="fs-4"
            key={i}
            onClick={() => {
              setRating() && dispatch(setRating(i));
            }}
          >
            {' '}
            &#9733;
          </span>
        );
      } else {
        starsArray.push(
          <span
            style={style}
            className="fs-4"
            key={i}
            onClick={() => {
              setRating() && dispatch(setRating(i));
            }}
          >
            {' '}
            &#9734;
          </span>
        );
      }
    }
    return starsArray;
  };
  return <div>{showStars(rating)}</div>;
};

Rate.defaultProps = {
  setRating: () => {},
};

const style = {
  color: 'rgb(245, 164, 66)',
  cursor: 'pointer',
};

export default Rate;
