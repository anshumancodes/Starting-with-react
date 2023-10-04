import React from 'react'
import styles from './form.module.css'

const Form = () => {

  return (
    <form className={styles.form} action='POST'>

        <div className={styles.buttonGroup}>
        <button className={styles.button} type='button'>VIA SUPPORT CHAT</button>
        <button className={styles.button} type='button'>VIA CALL</button>
        <button className={`${styles.button} ${styles.fullbtn}`} type='button'>SUPPORT VIA EMAIL</button>


        </div>

        <div className={styles.inputgroup}>
        <input className={styles.input} type='text' placeholder='Name' />
        <input className={styles.input} type='text' placeholder='Email' />
        <input className={styles.input} type='text' placeholder='Text' />
        </div>


        

      
    </form>
  )
}

export default Form
