'use client';

import { FC, useMemo, useState, useTransition, useDeferredValue } from 'react';
import { MovieGrid } from '../components/movies';
import { SearchBar } from '../components/shared/common';
import Pagination from '../components/shared/common/Pagination';
import { useGetMoviesQuery } from '../store/apis/movieApi';

const Movies: FC = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPending, startTransition] = useTransition();

  const deferredSearchQuery = useDeferredValue(searchQuery);

  const { data: movies } = useGetMoviesQuery({
    page,
    search: deferredSearchQuery || undefined,
  });

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    startTransition(() => {
      setPage(1);
    });
  };

  const handlePageChange = (newPage: number) => {
    startTransition(() => {
      setPage(newPage);
    });
  };

  const movieList = useMemo(() => movies?.results ?? [], [movies?.results]);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Movie Discovery
        </h1>

        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
        </div>

        <MovieGrid
          movies={movieList}
          isLoading={isPending}
        />

        {movies && (
          <Pagination
            currentPage={page}
            totalPages={movies?.total_pages}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </main>
  );
}

export default Movies;
