"use client";

import { memo, FC } from "react";
import { MovieTitleBaseProps } from "../../../types";
import { cn } from "@/utils/cn";

const MovieTitle: FC<MovieTitleBaseProps> = ({
  title,
  tagline,
  className,
  headingLevel = "h1",
  showTagline = true
}) => {
  const Heading = headingLevel;

  return (
    <div>
      <Heading className={cn("font-bold text-gray-900", className)}>{title}</Heading>
      {showTagline && tagline && (
        <p className="mt-2 text-lg italic text-gray-600">
          &ldquo;{tagline}&rdquo;
        </p>
      )}
    </div>
  );
};

export default memo(MovieTitle);
