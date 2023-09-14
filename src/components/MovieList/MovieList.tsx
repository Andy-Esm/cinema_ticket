import styles from './MovieList.module.scss'
import {IMovieCard} from '../../types'
import {MovieCard} from '../MovieCard/MovieCard.tsx'
import classNames from 'classnames'
import {useAppSelector} from '../../redux/hooks'




interface IMovieList {
  className?: string
}

export const MovieList = ({className}: IMovieList) => {

  const classes = classNames(styles.movies, className)

  const {data} = useAppSelector((state) => state.movies)

  const renderList = (data: IMovieCard[]) => {
    return data.map((movieData) => <MovieCard data={movieData}/>)
  }

  return (
    <div className={classes}>
      {renderList(data)}
    </div>
  )
}
