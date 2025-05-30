"use client";

import { memo, FC } from "react";
import { MoviePageLinkProps } from "../../types";

const MoviePageLink: FC<MoviePageLinkProps> = ({ url }) => {
  if (!url) return null;

  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-primary hover:underline"
      >
        Visit Official Website
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </div>
  );
};

export default memo(MoviePageLink);
