import { Header } from "../Header";
import { Main } from "../Main";

import styles from './styles.module.scss'

export function Dashboard() {
  return (
    <div className={styles.container} >
      <Header />
      <Main />

      <img className={styles.blurMobile} src="/assets/blur-mobile.png" alt="Blur mobile" />
    </div>
  );
}
