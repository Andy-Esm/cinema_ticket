import styles from './Header.module.scss'
import {Link} from 'react-router-dom'
import classNames from 'classnames'
import {Title} from '../Title/Title.tsx'

interface IHeaderProps {
    title?: string
	className?: string;
}
export const Header = ({title, className}: IHeaderProps) => {
  return (
    <header className={classNames(styles.header, className)}>
      <Link to='/'>Home</Link>
      <Title>{title}</Title>
    </header>
  )
}
