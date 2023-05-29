import Rate from './Rate';

const MovieCard = ({ movie }) => {
  const { title, posterURL, rating, description } = movie;
  return (
    <div className="card mb-3">
      <img src={posterURL} alt="" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <Rate rating={rating} />
        <p className="card-text">{description}</p>
        <a href="#!" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default MovieCard;
