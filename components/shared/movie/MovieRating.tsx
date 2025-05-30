"use client";

import { memo, FC, useMemo } from "react";
import { MovieRatingProps } from "../../../types";

const MovieRating: FC<MovieRatingProps> = ({ voteAverage, voteCount }) => {
  const formattedRating = useMemo(() =>
    (voteAverage ?? 0).toFixed(1),
    [voteAverage]
  );

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="Movie ratings">
      <span
        className="text-xs text-gray-500"
        aria-label={`${voteCount} votes`}
      >
        ({voteCount} votes)
      </span>
      <span
        className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary"
        aria-label={`Rating: ${formattedRating} stars`}
      >
        {formattedRating} ★
      </span>
    </div>
  );
};

export default memo(MovieRating);
