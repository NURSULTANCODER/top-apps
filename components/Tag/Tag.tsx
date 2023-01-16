import styles from './Tag.module.css';
import { TagProps } from './TagProps';

export const Tag = ({ children, size = 'm', color = 'ghost', href, ...props}: TagProps): JSX.Element => {
  return (
    <div className={[styles.tag, styles[size], styles[color]].join(' ')} {...props}>
      {href ? (<a href={href}>{children}</a>) : children}
    </div>
  )
}