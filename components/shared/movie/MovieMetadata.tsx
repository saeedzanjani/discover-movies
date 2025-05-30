"use client";

import { memo, FC, useMemo } from "react";
import { UnifiedMovieMetadataProps } from "../../../types";
import MovieCardMetadata from "./MovieCardMetadata";
import MovieDetailsMetadata from "./MovieDetailsMetadata";

const MovieMetadata: FC<UnifiedMovieMetadataProps> = ({
  movie,
  variant = "details",
  className = ""
}) => {
  const Component = useMemo(() =>
    variant === "card" ? MovieCardMetadata : MovieDetailsMetadata,
    [variant]
  );

  return <Component movie={movie} className={className} />;
};

MovieMetadata.displayName = 'MovieMetadata';

export default memo(MovieMetadata);
