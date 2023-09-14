import styles from './MovieList.module.scss'
import {IMovieCard} from '../../Types'
import {MovieCard} from '../MovieCard/MovieCard.tsx'
import classNames from 'classnames'


interface IMovieList {
  className?: string
}

export const MovieList = ({className}: IMovieList) => {

  const classes = classNames(styles.movies, className)
  const renderList = (data: IMovieCard[]) => {
    return data.map((movieData) => <MovieCard data={movieData}/>)
  }

  return (
    <div className={classes}>
      {renderList(movies)}
    </div>
  )
}
