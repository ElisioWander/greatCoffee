import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { GetCoffeeButton } from '../GetCoffeeButton'
import { MenuBurger } from '../MenuBurger'

import styles from './styles.module.scss'

export function Header() {
  const [activeMenu, setActiveMenu] = useState(false)

  function handleToggleActiveMenu() {
    const isActive = !activeMenu

    setActiveMenu(isActive)
  }

  return (
    <header className={styles.header} >
      <div className={styles.headerContent} >
        <img src="/assets/logo-mobile.svg" alt="Logo" />

        <BiMenuAltRight fontSize={35} onClick={handleToggleActiveMenu} />

        <MenuBurger activeMenu={activeMenu} />
      </div>
    </header>
  )
}
