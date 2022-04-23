import { GetCoffeeButton } from '../GetCoffeeButton'
import styles from './styles.module.scss'

export function Main() {
  return (
    <main className={styles.hero} >
      <h1>
        O café que fará seu código decolar para o próximo nível
      </h1>

      <GetCoffeeButton />

      <h2>
        Great Coffee
        <span>&lsaquo;Great Code/&rsaquo;</span>
      </h2>

      <img 
        className={styles.greatCoffee}
        src="/assets/rocket-coffee.png"
        alt="RocketCoffee background"
      />
    </main>
  )
}
