import React from "react";
import styles from "./Play.module.css";

const Play = ({ text }) => {
  const diceValue = [1, 2, 3, 4, 5, 6];

  const diceNumber = Math.floor(Math.random() * diceValue.length);

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
          <span className={styles.CheckText} text={text}></span>

          <div className={styles.buttonContainers}>

            {diceValue.map((value, index) => (
              <button className={styles.Dicebutton} key={index}>
                {value}
              </button>
            ))}
            
          </div>
        </span>
      </nav>

      <div className={styles.Dicecontainer}>
        <div className={styles.Dice}>
          <img src={`/images/dice_${diceNumber}.png`} alt="" />
        </div>

        <div className={styles.ActionButtons}>
          <button className={styles.Actionbutton}>Roll Dice</button>
          <button className={`${styles.Actionbutton} ${styles.BlackButton}`}>
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Play;
