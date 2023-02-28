import styles from './Sidebar.module.css';
import { SidebarProps } from './SidebarProps';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
     Sidebar
    </div>
  )
}