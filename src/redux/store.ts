import {configureStore} from '@reduxjs/toolkit'
import {moviesReducer} from './slices'
import {cinemaApi} from '../api'

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
  },
  middleware: (getDefaultMiddleware)  => getDefaultMiddleware().concat(cinemaApi.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
