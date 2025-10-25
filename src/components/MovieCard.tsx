import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

interface Movie {
  id: number;
  url: string;
  title: string;
  release_date: string;
}

interface MovieInfo {
  movie: Movie;
}

function MovieCard({ movie }: MovieInfo) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);
  const onFavorite = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (favorite) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavorite}
          >
            🤍
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
