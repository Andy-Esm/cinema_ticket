import {configureStore} from '@reduxjs/toolkit'
import {moviesReducer} from './slices'
import {moviesApi} from '../api/rtkApi.ts'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware)  => getDefaultMiddleware().concat(moviesApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
