import styles from './P.module.css';
import { PProps } from './PProps';

export const P = ({ children, size = 'm', ...props }: PProps): JSX.Element => {
  return (
    <p className={[styles.p, styles[size]].join(' ')} {...props}>
     {children}
    </p>
  )
}