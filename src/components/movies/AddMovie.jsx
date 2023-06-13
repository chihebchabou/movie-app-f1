import { useState } from 'react';
import { addNewMovie } from '../../redux/actions/movieActions';
import { useDispatch } from 'react-redux';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    date: '',
    genre: '',
    description: '',
    posterURL: '',
    trailer: '',
    rating: '',
  });

  const dispatch = useDispatch();

  const { title, date, genre, description, posterURL, trailer, rating } = movie;

  const onChange = e => setMovie({ ...movie, [e.target.name]: e.target.value });

  const onFormSubmit = e => {
    e.preventDefault();
    const newMovie = { ...movie, rating: Number(rating), id: Date.now() };
    dispatch(addNewMovie(newMovie));
  };

  return (
    <div className="mb-5">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#addMovie"
      >
        Add new movie
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id="addMovie"
        tabIndex="-1"
        aria-labelledby="addMovieLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="addMovieLabel">
                Add New Movie
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={onFormSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={onChange}
                    id="title"
                    name="title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="date" className="form-label">
                    Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={onChange}
                    id="date"
                    name="date"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="genre" className="form-label">
                    Genre
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={genre}
                    onChange={onChange}
                    id="genre"
                    name="genre"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="rating" className="form-label">
                    Rating
                  </label>
                  <input
                    type="number"
                    max={5}
                    min={0}
                    className="form-control"
                    value={rating}
                    onChange={onChange}
                    id="rating"
                    name="rating"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="posterURL" className="form-label">
                    Poster
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    value={posterURL}
                    onChange={onChange}
                    id="posterURL"
                    name="posterURL"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="trailer" className="form-label">
                    Trailer
                  </label>
                  <input
                    type="url"
                    className="form-control"
                    value={trailer}
                    onChange={onChange}
                    id="trailer"
                    name="trailer"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    value={description}
                    onChange={onChange}
                    id="description"
                    name="description"
                    required
                  ></textarea>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
