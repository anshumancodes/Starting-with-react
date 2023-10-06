import React from 'react'
import styles from './Play.module.css'

const Play = () => {
  return (
    <div className={styles.Container}>
      <nav className={styles.Navbar}>
        <span className={styles.score}>

          <span className={styles.scorecounter}>
            
            <span className={styles.scorevalue}>0</span>
            <span className={styles.scoretext}>Score</span>

          </span>


        </span>

        <span className={styles.Dicebuttons}>

          <button className={styles.Dicebutton}>1</button>
          <button className={styles.Dicebutton}>2</button>
          <button className={styles.Dicebutton}>3</button>
          <button className={styles.Dicebutton}>4</button>
          <button className={styles.Dicebutton}>5</button>
          <button className={styles.Dicebutton}>6</button>
          
        </span>


      </nav>

      <div className={styles.Dicecontainer}>

      <div className={styles.Dice}> 
      <img src="/images/dice_1.png" alt="" />
      
      </div>
      

      <div className={styles.ActionButtons}> 
        
          <button className={styles.Actionbutton}>Roll Dice</button>
          <button className={`${styles.Actionbutton} ${styles.BlackButton}`}>Show Rules</button>
      
      </div>


        



      </div>

      
    </div>
  )
}

export default Play
