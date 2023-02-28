import styles from './Header.module.css';
import { HeaderProps } from './HeaderProps';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div {...props}>
     Header
    </div>
  )
}