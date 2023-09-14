import styles from './MovieCard.module.scss'
import {IMovieCard} from '../../Types'
import {Link} from 'react-router-dom'


interface IMovieCardProps {
	data: IMovieCard

}
export const MovieCard = ({data}: IMovieCardProps) => {

  return (
    <Link to='movie' className={styles.card}>
      <div>
        <img src={data.imgUrl} alt={data.alt} className={styles.cover}/>
      </div>
      <h3 className={styles.title}>{data.title}</h3>
      <span className={styles.genre}>{data.genre}</span>
    </Link>
  )
}
