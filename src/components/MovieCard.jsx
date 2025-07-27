import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
      </Link>
      <h3>{movie.title}</h3>
      <p>{movie.release_date?.slice(0, 4)}</p>
    </div>
  );
};

export default MovieCard;
