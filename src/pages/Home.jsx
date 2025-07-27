import useFetch from '../hooks/useFetch.jsx';
import MovieCard from '../components/MovieCard.jsx';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const query = new URLSearchParams(useLocation().search).get('search');
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const url = query
    ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;

  const { data, loading, error } = useFetch(url);

  return (
    <div className="movie-grid">
      {loading && <p>Loading...</p>}
      {error && <p>Error loading movies.</p>}
      {data?.results?.length === 0 && <p>No movies found.</p>}
      {data?.results?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Home;
