"use client";

import { memo, FC, useMemo } from "react";
import { MovieStatusProps } from "../../../types";
import { formatCurrency } from "../../../utils";

const MovieStatus: FC<MovieStatusProps> = ({ movie }) => {
  const stats = useMemo(() => [
    {
      label: "Release Date",
      value: new Date(movie?.release_date).toLocaleDateString(),
    },
    {
      label: "Runtime",
      value: movie?.runtime ? `${movie?.runtime} minutes` : "N/A",
    },
    {
      label: "Rating",
      value: `${movie?.vote_average.toFixed(1)} (${movie?.vote_count} votes)`,
    },
    {
      label: "Language",
      value: movie?.spoken_languages[0]?.english_name || "N/A",
    },
    {
      label: "Budget",
      value: movie?.budget ? formatCurrency(movie?.budget) : "N/A",
    },
    {
      label: "Revenue",
      value: movie?.revenue ? formatCurrency(movie?.revenue) : "N/A",
    },
  ], [movie]);

  return (
    <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
      {stats?.map(({ label, value }) => (
        <div key={label}>
          <p className="text-gray-500">{label}</p>
          <p className="font-medium">{value}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(MovieStatus);
