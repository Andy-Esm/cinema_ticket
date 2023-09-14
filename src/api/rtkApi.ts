import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IMovie} from '../types'

export const moviesApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: (build) => ({
    getAllMovies: build.query<IMovie[], string>({
      query: () => 'movies'
    })
  })
})

export const {useGetAllMoviesQuery} = moviesApi
