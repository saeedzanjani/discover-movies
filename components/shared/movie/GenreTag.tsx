"use client";

import { memo, FC } from "react";
import { GenreTagProps } from "../../../types";

const GenreTag: FC<GenreTagProps> = ({ genre }) => (
  <span
    key={genre?.id}
    className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
  >
    {genre?.name}
  </span>
);

GenreTag.displayName = 'GenreTag';

export default memo(GenreTag);
