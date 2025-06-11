import { Suspense } from "react";
import {
  getMovie,
  MovieInfo,
} from "../../../../components/movie-info/movie-info";
import { MovieVideos } from "../../../../components/movie-videos/movie-videos";

type Params = Promise<{ id: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { id } = await params;
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params }: { params: Params }) {
  const { id } = await params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id}></MovieInfo>
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id}></MovieVideos>
      </Suspense>
    </div>
  );
}
