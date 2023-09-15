import {cinemaApi} from './cinemaApi.ts'
import {IMovie} from '../types'


const moviesApi = cinemaApi.injectEndpoints({
  endpoints: (build) => ({
    getAllMovies: build.query<IMovie[], void>({
      query: () => 'movies'
    }),
    getMovieById: build.query<IMovie, string>({
      query: (id) => `movies/${id}`,
      // transformResponse: (data: IMovie[]) => {
      //   return data[0]
      // }
    })
  }),
  overrideExisting: false
})

export const {useGetAllMoviesQuery, useGetMovieByIdQuery} = moviesApi
