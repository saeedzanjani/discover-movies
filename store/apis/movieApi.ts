import { baseApi } from './baseApi';
import { createMovieQueryParams, createQueryEndpoint, handleApiError } from '../../utils';
import { MovieResponse, MovieSearchParams, MovieDetails } from '../../types';

export const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<MovieResponse, MovieSearchParams>({
      query: ({ search, ...params }) => {
        const queryParams = createMovieQueryParams({ search, ...params });

        if (search) {
          return {
            url: '/search/movie',
            params: {
              query: search,
              ...queryParams,
            },
          };
        }

        return {
          url: '/discover/movie',
          params: queryParams,
        };
      },
      serializeQueryArgs: ({ queryArgs }) => {
        const { page, search } = queryArgs;
        return { page, search };
      },
      merge: (currentCache, newItems) => {
        if (newItems.page === 1) {
          return newItems;
        }
        return {
          ...newItems,
          results: [...currentCache.results, ...newItems.results],
        };
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg?.page !== previousArg?.page ||
               currentArg?.search !== previousArg?.search;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.results.map(({ id }) => ({ type: 'Movies' as const, id })),
              { type: 'Movies', id: 'LIST' },
            ]
          : [{ type: 'Movies', id: 'LIST' }],
      ...createQueryEndpoint('getMovies'),
    }),
    getMovieDetails: builder.query<MovieDetails, number>({
      query: (movieId) => ({
        url: `/movie/${movieId}`,
        params: {
          language: 'en-US',
        },
      }),
      ...createQueryEndpoint('getMovieDetails'),
      transformErrorResponse: (response) => handleApiError(response),
      providesTags: (result, error, id) => [{ type: 'Movies', id }],
    }),
  }),
});

export const { useGetMoviesQuery, useGetMovieDetailsQuery } = movieApi;
