import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('accept', 'application/json');
      headers.set('Authorization', `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`);
      return headers;
    },
  }),
  keepUnusedDataFor: 3600,
  tagTypes: ['Movies'],
  endpoints: () => ({}),
});
