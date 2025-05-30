"use client";

import { FC, memo } from 'react';
import { Skeleton } from '../common';

const MovieDetailsSkeleton: FC = () => {
  return (
    <Skeleton asContainer className="space-y-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <Skeleton className="h-[450px] w-full md:w-[300px]" />
        <div className="flex-1 space-y-6">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-32 w-full" />
        </div>
      </div>
      <div className="space-y-4">
        <Skeleton className="h-6 w-1/4" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="aspect-[2/3] w-full" />
          ))}
        </div>
      </div>
    </Skeleton>
  );
};

export default memo(MovieDetailsSkeleton);
