import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { GetCoffeeButton } from "../GetCoffeeButton";

import styles from "./styles.module.scss";

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false);

  function handleToggleActiveMenu() {
    const isActive = !activeMenu;

    setActiveMenu(isActive);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <img src="/assets/logo-mobile.svg" alt="Logo" />

        <div className={styles.menuSection} >
          <div className={`${styles.openMenuToggle} ${activeMenu ? styles.on : styles.openMenuToggle}`} onClick={handleToggleActiveMenu} >
            <div></div>
            <div></div>
          </div>

          <nav className={`${styles.menuNav} ${activeMenu ? styles.active : ""}`}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Recompensas</a>
              </li>
              <li>
                <a href="/">Gift Card</a>
              </li>
              <li>
                <a href="/">Lojas</a>
              </li>
            </ul>
          </nav>
        </div>
        
        <GetCoffeeButton />
      </div>
    </header>
  );
}