import Link from "next/link";
import styles from "./movie.module.css";

interface IMovieProps {
  id: string;
  poster_path: string;
  title: string;
}

export function Movie({ id, poster_path, title }: IMovieProps) {
  return (
    <div className={styles.movie}>
      <Link href={`/movies/${id}`}>
        <img src={poster_path} alt={title} />
        {title}
      </Link>
    </div>
  );
}
