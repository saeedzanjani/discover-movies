"use client";

import { memo, FC } from "react";
import { MovieCardMetadataProps } from "../../../types";
import { MovieTitle, MovieRating, MovieReleaseDate } from "./index";
import MovieOverview from "./MovieOverview";

const MovieCardMetadata: FC<MovieCardMetadataProps> = ({ movie, className = "" }) => (
  <div
    className={`p-4 ${className}`}
    role="article"
    aria-label={`Movie information for ${movie.title}`}
  >
    <MovieTitle
      title={movie.title}
      headingLevel="h3"
      className="mb-2 text-lg font-semibold"
    />
    <MovieOverview
      overview={movie.overview}
      maxLines={2}
      className="mb-3 text-sm text-gray-600 line-clamp-2"
    />
    <div className="mt-auto flex items-center justify-between">
      <MovieReleaseDate releaseDate={movie.release_date} />
      <MovieRating
        voteAverage={movie.vote_average}
        voteCount={movie.vote_count}
      />
    </div>
  </div>
);

MovieCardMetadata.displayName = 'MovieCardMetadata';

export default memo(MovieCardMetadata);
