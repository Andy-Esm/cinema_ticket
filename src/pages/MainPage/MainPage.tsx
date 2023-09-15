import styles from './MainPage.module.scss'
import {MovieList, Title} from '../../components'


export const MainPage = () => {


  return (
    <main className={styles.main}>
      <Title center className={styles.title}>Order cinema tickets</Title>
      <MovieList/>
    </main>
  )
}
