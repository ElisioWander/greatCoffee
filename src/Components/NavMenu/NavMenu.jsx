import styles from '../Header/styles.module.scss'

export function NavMenu({ activeMenu }) {
  return (
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
  )
}