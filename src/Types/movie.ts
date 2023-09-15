export interface IMovieCard {
  id: number
  imgUrl: string
  title: string
  alt: string
  genre: string
}

export type Country = 'США' | 'Россия' | 'Индия' | 'Китай' | 'Великобритания' | 'Корея' | 'Франция' | 'Бельгия'

export interface IMovie extends IMovieCard{
  description: string
  times: string[]
  duration: number
  year: number
  country: Country
}
