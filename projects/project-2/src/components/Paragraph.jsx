
import styles from './Paragraph.module.css'



const Text = (props) => {
  return (
    <p className={styles.paraText}>{props.text}</p>
  )
}

export default Text
