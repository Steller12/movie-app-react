import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api.ts";

function Home() {
  const [searchquery, setsearchquery] = useState("");
  const [movies, setMovies] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();

        const mappedMovies = popularMovies.map((m) => ({
          id: m.id,
          title: m.title,
          release_date: m.release_date?.split("-")[0],
          url: m.poster_path
            ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
            : "https://via.placeholder.com/500x750?text=No+Image",
        }));

        setMovies(mappedMovies);
      } catch (err) {
        console.error(err);
        setError("Failed to load movies....");
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handlesearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchquery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchquery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handlesearch} className="search-form">
        <input
          type="text"
          placeholder="search for movies..."
          className="search-input"
          value={searchquery}
          onChange={(e) => setsearchquery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>

      {error && <div className="error">{error}</div>}
      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
