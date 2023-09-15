import styles from './App.module.scss'
import {MainPage, MoviePage} from './pages'
import {BrowserRouter, Routes, Route} from 'react-router-dom'



export const App = () => {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/movie/:id' element={<MoviePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
