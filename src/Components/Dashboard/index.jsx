import { Header } from "../Header";
import { Main } from "../Main";

import styles from './styles.module.scss'

export function Dashboard() {
  return (
    <div className={styles.container} >
      <Header />
      <Main />

      <img className={styles.blurMobile} src="/assets/blur-mobile.png" alt="Blur mobile" />
      <img className={styles.blurDesktopOne} src="/assets/blur-1.png" alt="First blur desktop" />
      <img className={styles.blurDesktopTwo} src="/assets/blur-2.png" alt="Second blur desktop" />
    </div>
  );
}
