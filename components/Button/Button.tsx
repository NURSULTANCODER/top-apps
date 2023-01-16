import { ButtonProps } from "./ButtonProps";
import styles from "./Button.module.css";
import ArrowIcon from "./arrow.svg"


export const Button = ({children, appearance, arrow = 'none', className, ...props}: ButtonProps): JSX.Element => {
    return (
        <button 
            className={[styles[appearance], styles.button, className].join(' ')}
            {...props}>
            {children}
            {arrow !== 'none' && 
                (<span className={[styles.arrow, styles[arrow]].join(' ')}>
                    <ArrowIcon />
                </span>)
            }
        </button>
    )
}
