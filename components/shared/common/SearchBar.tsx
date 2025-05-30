"use client";

import { memo, FC } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "./input";
import { SearchBarProps } from "../../../types";

const SearchBar: FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search movies..."
      variant="search"
      icon={<MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />}
      iconPosition="left"
      fullWidth
      size="lg"
      className="rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
    />
  );
};

export default memo(SearchBar);
