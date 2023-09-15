import styles from './MovieList.module.scss'
import {IMovie} from '../../types'
import {MovieCard} from '../MovieCard/MovieCard.tsx'
import classNames from 'classnames'
import {useGetAllMoviesQuery} from '../../api'
import {Title} from '../Title/Title.tsx'




interface IMovieList {
  className?: string
}

export const MovieList = ({className}: IMovieList) => {

  const classes = classNames(styles.movies, className)

  const {data, isLoading} = useGetAllMoviesQuery()

  const renderList = (data: IMovie[]) => {
    return data.map((movieData) => <MovieCard data={movieData} key={movieData.id}/>)
  }

  if(isLoading) return <Title>loading...</Title>

  return (
    <div className={classes}>
      {data && renderList(data)}
    </div>
  )
}
