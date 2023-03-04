import styles from './Footer.module.css';
import { FooterProps } from './FooterProps';

export const Footer = ({className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={`${styles.footer} ${className}`} {...props}>
      <div>OwlTop © 2020 - 2023 Все права защищены</div>
      <a href="#" target='_blank'>Пользовательское соглашение</a>
      <a href="#" target='_blank'>Политика конфиденциальности</a>
    </footer>
  )
}