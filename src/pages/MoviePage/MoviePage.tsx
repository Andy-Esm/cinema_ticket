import styles from './MoviePage.module.scss'
import {Header, Title} from '../../components'
import {useParams} from 'react-router-dom'
import {useGetMovieByIdQuery} from '../../api'





export const MoviePage = () => {

  const params = useParams()
  const {data:movie, isLoading} = useGetMovieByIdQuery(params.id!)

  if(isLoading) return <Title>Loading...</Title>
  if (!movie) return <Title>Фильм не найден</Title>


  return (
    <>
      <main className={styles.main}>
        <Header title='Movie title' className={styles.header}/>
        <div className={styles.wrapper}>
          <img src={movie.imgUrl} alt={movie.alt} className={styles.poster}/>
          <div className={styles.textWrapper}>
            <p className={styles.desc}>{movie.description}</p>
            <div className={styles.info}>
              <div className={styles.infoLabel}>
                <span>Название</span>
                <span>Жанр</span>
                <span>Продолжительность</span>
                <span>Страна</span>
                <span>год</span>
                <span>Время сеанса</span>
              </div>
              <div className={styles.infoValue}>
                <span>{movie.title}</span>
                <span>{movie.genre}</span>
                <span>{movie.duration} мин.</span>
                <span>{movie.country}</span>
                <span>{movie.year}г.</span>
                <ul className={styles.times}>
                  {movie.times?.map((item, idx) => (
                    <li key={idx} className={styles.timesItem}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
