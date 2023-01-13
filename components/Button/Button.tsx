import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";


export const Button = ({children, appearance}: ButtonProps): JSX.Element => {
    return <button className={[styles[appearance], styles.button].join(' ')}>{children}</button>
}
