import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const cinemaApi = createApi({
  reducerPath: 'cinemaApi',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
  endpoints: () =>  ({})
})
