"use client";

import { memo, FC, useMemo } from "react";
import { MovieOverviewBaseProps } from "../../../types";

const MovieOverview: FC<MovieOverviewBaseProps> = ({
  overview,
  className = '',
  showHeading = false,
  maxLines,
  children
}) => {
  const lineClampClass = useMemo(() =>
    maxLines ? `line-clamp-${maxLines}` : '',
    [maxLines]
  );

  return (
    <div className={className}>
      {showHeading && (
        <h2 className="mb-2 text-lg font-semibold">Overview</h2>
      )}
      <p
        className={`text-gray-700 ${lineClampClass}`}
        aria-label={`Movie overview: ${overview}`}
      >
        {overview}
      </p>
      {children}
    </div>
  );
};

export default memo(MovieOverview);
