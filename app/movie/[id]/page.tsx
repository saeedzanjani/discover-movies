"use client";

import { FC, use } from 'react';
import { BackButton, MovieDetailsSkeleton, MoviePoster } from '../../../components';
import { useGetMovieDetailsQuery } from '../../../store/apis';
import { MovieDetailsPageProps } from '../../../types';
import MovieMetadata from '../../../components/shared/movie/MovieMetadata';

const MovieDetailsPage: FC<MovieDetailsPageProps> = ({ params }) => {
  const { id } = use(params);
  const { data: movie } = useGetMovieDetailsQuery(parseInt(id));

  if (!movie) {
    return <MovieDetailsSkeleton />;
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <BackButton
          pathname="/"
          label="Back to Movies"
          className="mb-8"
        />

        <div className="grid gap-8 md:grid-cols-[300px,1fr]">
          <MoviePoster posterPath={movie.poster_path} title={movie.title} />
          <MovieMetadata movie={movie} />
        </div>
      </div>
    </main>
  );
};

export default MovieDetailsPage;
