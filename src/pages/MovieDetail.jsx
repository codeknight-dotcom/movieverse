import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.jsx';
import { useContext } from 'react';
import { WatchlistContext } from '../context/WatchlistContext.jsx';

const MovieDetail = () => {
  const { id } = useParams();
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const { data: movie, loading, error } = useFetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  const { addToWatchlist } = useContext(WatchlistContext);

  if (loading) return <p>Loading movie...</p>;
  if (error || !movie) return <p>Error loading movie detail.</p>;

  return (
    <div className="movie-detail">
      <img src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`} />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>Rating: {movie.vote_average}</p>
        <p>Release: {movie.release_date}</p>
        <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
      </div>
    </div>
  );
};

export default MovieDetail;
