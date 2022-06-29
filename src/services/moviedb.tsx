import { MovieDetails, Trending } from '../types'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const movieDBApi = createApi({
	reducerPath: 'movieDB',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',
	}),
	endpoints: (builder) => ({
		getTrending: builder.query<Trending, void>({
			query: () =>
				`trending/all/day?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`,
		}),
		getMovieDetails: builder.query<MovieDetails, string>({
			query: (movie_id) =>
				`movie/${movie_id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US`,
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMovieDetailsQuery, useGetTrendingQuery } = movieDBApi
