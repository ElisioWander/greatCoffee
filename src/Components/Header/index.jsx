import { useMenuToggle } from "../contexts/MenuToggleContext";
import { GetCoffeeButton } from "../GetCoffeeButton";
import { NavMenu } from "../NavMenu/NavMenu";

import styles from "./styles.module.scss";

export function Header() {
  const { handleToggleActiveMenu, activeMenu } = useMenuToggle()

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="/assets/logo-mobile.svg" alt="Logo" />

        <div className={styles.menuSection} >
          <div className={`${styles.openMenuToggle} ${activeMenu ? styles.on : styles.openMenuToggle}`} onClick={handleToggleActiveMenu} >
            <div></div>
            <div></div>
          </div>

          <NavMenu activeMenu={activeMenu} />
        </div>
        
        <GetCoffeeButton />
      </div>
    </header>
  );
}
