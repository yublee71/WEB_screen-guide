import { Movie } from "../../components/movie/movie";
import styles from "./styles.module.css";
import { API_URL } from "../../constants";

export const metadata = {
  title: "Home",
};

async function getMovies() {
  const response = await fetch(API_URL, {
    cache: "force-cache",
  });
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
