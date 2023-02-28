import styles from './Footer.module.css';
import { FooterProps } from './FooterProps';

export const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return (
    <div {...props}>
     Footer
    </div>
  )
}