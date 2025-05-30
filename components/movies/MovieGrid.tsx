import { memo, FC } from 'react';
import { MovieGridProps } from '../../types';
import MovieCard from './MovieCard';

const MovieGrid: FC<MovieGridProps> = ({ movies, isLoading }) => {
  if (isLoading) {
    return (
      <div className="mb-4 text-center text-sm text-gray-500">
        Updating results...
      </div>
    );
  }

  if (!movies?.length) {
    return (
      <div className="rounded-lg bg-gray-50 p-4 text-center text-gray-700">
        No movies found. Try a different search term.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies?.map((movie, index) => (
        <MovieCard
          key={`${movie.id}-${index}`}
          movie={movie}
          index={index}
        />
      ))}
    </div>
  );
};

export default memo(MovieGrid);
