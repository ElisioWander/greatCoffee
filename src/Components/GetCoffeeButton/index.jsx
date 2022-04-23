import styles from './styles.module.scss'

export function GetCoffeeButton() {
  return (
    <button type="button" className={styles.coffeeButton} >
      Pegar meu café
    </button>
  )
}
