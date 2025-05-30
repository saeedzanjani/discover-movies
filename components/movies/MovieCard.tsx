"use client";

import { memo, FC, useCallback } from "react";
import { useRouter } from "next/navigation";
import MovieMetadata from "../shared/movie/MovieMetadata";
import { MoviePoster } from "../shared/movie";
import { MovieCardProps } from "../../types";

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/movie/${movie.id}`);
  }, [router, movie.id]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }, [handleClick]);

  return (
    <div
      className="card group cursor-pointer transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${movie.title}`}
    >
      <div className="relative w-full overflow-hidden bg-gray-100">
        <MoviePoster
          posterPath={movie.poster_path}
          title={movie.title}
        />
      </div>
      <MovieMetadata movie={movie} variant="card" />
    </div>
  );
};

export default memo(MovieCard);
