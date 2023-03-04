import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';
import { Sidebar } from './Sidebar/Sidebar';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { FunctionComponent } from 'react';
import { JsxElement } from 'typescript';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className={styles.wraper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>
        {children}
      </div>
      <Footer className={styles.footer} />
    </div>
  )
}

export const withLayout = <T extends Record<string, unknown>>(Components: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Components {...props} />
      </Layout>
    )
  }
}