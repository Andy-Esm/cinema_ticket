import {createSlice} from '@reduxjs/toolkit'
import {IMovieCard} from '../../types'


interface IMoviesState {
  data: IMovieCard[]
}

const initialState: IMoviesState = {
  data: [
    {
      id: 1,
      imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/23114/144a6fae-059f-42cc-a998-7486aec383a2/s190x280',
      title: 'Телекинез',
      alt: 'Обложка к фильму Телекинез',
      genre: 'Ужасы'
    },
    {
      id: 2,
      imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/23114/3bc86900634ff9adb77de11426600741/s190x280',
      title: 'Нейросеть',
      alt: 'Обложка к фильму Нейросеть',
      genre: 'Ужасы'
    },
    {
      id: 3,
      imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/23114/c1b74e8ad350311199d45ee5c248eb63/s190x280',
      title: 'Гонщики на драйве',
      alt: 'Обложка к фильму Гонщики на драйве',
      genre: 'Комедия'
    },
    {
      id: 4,
      imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/28638/79a8cef0-fec3-41a2-857b-c9adbe2591d6/s190x280',
      title: 'Как украсть реку',
      alt: 'Обложка к фильму Как украсть реку',
      genre: 'Ужасы'
    },
    {
      id: 5,
      imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/35821/00ff9de1-5edd-4850-9b70-ff3a389b9f37/s190x280',
      title: 'Романти́к',
      alt: 'Обложка к фильму Романти́к',
      genre: 'Ужасы'
    }
  ]
}

export const moviesSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {}
})

export const moviesReducer = moviesSlice.reducer
