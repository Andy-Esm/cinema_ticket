import styles from './MoviePage.module.scss'
import {Header} from '../../components'
import {IMovie} from '../../Types'


const movieItem: IMovie = {
  id: 1,
  imgUrl: 'https://avatars.mds.yandex.net/get-afishanew/23114/144a6fae-059f-42cc-a998-7486aec383a2/s190x280',
  title: 'Телекинез',
  alt: 'Обложка к фильму Телекинез',
  genre: 'Ужасы',
  description: 'Москва, 1977 год. В режиме полной секретности учёные исследуют паранормальные явления. Профессор-физик, специалист по телекинезу и гипнозу, сталкивается с' +
        ' необъяснимой силой, в существование которой невозможно поверить. Вскоре его дочь Анна обнаруживает у себя смертельно опасный дар.',
  times: ['19:00', '21:15', '22:45','0:30'],
  country: 'Великобритания',
  duration: 83,
  year: 2023
}

export const MoviePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Header title='Movie title' className={styles.header}/>
        <div className={styles.wrapper}>
          <img src={movieItem.imgUrl} alt={movieItem.alt} className={styles.poster}/>
          <div className={styles.textWrapper}>
            <p className={styles.desc}>{movieItem.description}</p>
            <div className={styles.info}>
              <div className={styles.infoLabel}>
                <span>Время сеанса</span>
                <span>Продолжительность</span>
                <span>Страна</span>
                <span>год</span>
              </div>
              <div className={styles.infoValue}>
                <ul className={styles.times}>
                  {movieItem.times?.map((item, idx) => (
                    <li key={idx} className={styles.timesItem}>{item}</li>
                  ))}
                </ul>
                <span>{movieItem.duration} мин.</span>
                <span>{movieItem.country}</span>
                <span>{movieItem.year}г.</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
