import { API_URL } from "../../app/(home)/page";
import styles from "./movie-videos.module.css";

async function getVideos(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`, {
    cache: "force-cache",
  });
  return response.json();
}

export async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video, i) => {
        if (i < 3)
          return (
            <iframe
              key={video.id}
              src={`https://youtube.com/embed/${video.key}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={video.name}
            ></iframe>
          );
      })}
    </div>
  );
}
