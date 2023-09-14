import styles from './Title.module.scss'
import {ReactNode} from 'react'
import classNames from 'classnames'

interface ITitleProps {
  children: ReactNode
  center?: boolean
  className?: string
}

export const Title = ({children, center, className}:ITitleProps) => {
  return (
    <h1 className={classNames({
      [styles.center]: center
    }, className)}>
      {children}
    </h1>
  )

}
