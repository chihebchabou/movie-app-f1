import Filter from './components/movies/Filter';
import AddMovie from './components/movies/AddMovie';
import MovieList from './components/movies/MovieList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Filter />
          <AddMovie />
          <MovieList />
        </div>
      </div>
    </div>
  );
}

export default App;
