import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { movieDBApi } from '../services/moviedb'

export const store = configureStore({
	reducer: {
		[movieDBApi.reducerPath]: movieDBApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(movieDBApi.middleware),
})

setupListeners(store.dispatch)
