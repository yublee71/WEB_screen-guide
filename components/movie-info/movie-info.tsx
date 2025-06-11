import { API_URL } from "../../constants";
import styles from "./movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${API_URL}/${id}`, {
    cache: "force-cache",
  });
  return response.json();
}

export async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} alt={movie.title} />
      <div>
        <h1>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href={movie.homepage} target="_blank">
          Where can I watch this? →
        </a>
      </div>
    </div>
  );
}
