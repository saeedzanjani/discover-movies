"use client";

import { memo, FC, useMemo } from "react";
import { MovieReleaseDateProps } from "../../../types";

const MovieReleaseDate: FC<MovieReleaseDateProps> = ({ releaseDate }) => {
  const formattedDate = useMemo(() =>
    new Date(releaseDate).toLocaleDateString(),
    [releaseDate]
  );

  return (
    <time
      dateTime={releaseDate}
      className="text-sm text-gray-500"
      aria-label={`Release date: ${formattedDate}`}
    >
      {formattedDate}
    </time>
  );
};

export default memo(MovieReleaseDate);
