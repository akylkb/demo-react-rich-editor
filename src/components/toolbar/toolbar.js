import styles from './toolbar.module.css'

export default function Toolbar () {
  const handleCommand = command => {
    return () => document.execCommand(command)
  }

  return (
    <div className={styles.toolbar}>
      <button className={styles.button_bold} onClick={handleCommand('bold')}>B</button>
      <button className={styles.button_italic} onClick={handleCommand('italic')}>I</button>
      <button className={styles.button_underline} onClick={handleCommand('underline')}>U</button>
      <button className={styles.button_strike} onClick={handleCommand('strikeThrough')}>S</button>
    </div>
  )
}
