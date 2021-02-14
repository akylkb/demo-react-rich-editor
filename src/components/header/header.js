import Toolbar from '../toolbar/toolbar'
import styles from './header.module.css'

export default function Header () {
  return (
    <header className={styles.header}>
      <div>
        <button className={styles.button_save}>Save</button>
      </div>
      <Toolbar />
    </header>
  )
}
