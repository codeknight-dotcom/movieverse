import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext.jsx';
import MovieCard from '../components/MovieCard.jsx';

const Watchlist = () => {
  const { watchlist } = useContext(WatchlistContext);

  return (
    <div className="movie-grid">
      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchlist.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default Watchlist;
