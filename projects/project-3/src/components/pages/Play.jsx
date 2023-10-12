import React from "react";
import styles from "./Play.module.css";
import { useState } from "react";
import Rules from "../Rules";

const Play = ({  }) => {

  let diceValue = [1, 2, 3, 4, 5, 6];
  
  const [selected, setSelected] =useState(null);
  const [Nowtext , setText] = useState("Select a number");
  const [currentDice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showrules, setshowrules] = useState(false);


  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Usage for simulating a dice roll:
// for managing color of the text , 
 


  const rolldice = () => {
    // to check if the user has selected a number or not
    if (!selected){
      setText(" please Select a number");
      return;
    }
    // -----------------------------
    // to generate a random number between 1 and 6 for dice roll
    
    const RandomdiceNumber = getRandomInt(1, 6);
    

  
  setDice((prev)=> RandomdiceNumber);

  
  
  if (selected === RandomdiceNumber) {
    
    setScore((prev)=> prev + RandomdiceNumber);
    
  }
  
  else{
    setScore((prev)=> prev - 1);
  }
  // to reset the selected value  selcted after each roll
  setSelected(undefined)
  setText();

  }

  

  

  return (
    <div className={styles.Container}>
      <nav className={styles.Navbar}>
        <span className={styles.score}>
          <span className={styles.scorecounter}>
            <span className={styles.scorevalue}>{score}</span>
            <span className={styles.scoretext}>Score</span>
          </span>
        </span>

        <span className={styles.Dicebuttons}>
          {/* <span className={styles.CheckText}>{Nowtext}</span> */}
          <span className={styles.CheckText}>{Nowtext}</span>



          <div className={styles.buttonContainers}>

            {diceValue.map((value, index) => (
              <button className={`${styles.Dicebutton} ${selected === value ? styles.selected : ''}`} 

              key={index} onClick={()=> setSelected(value) }>
                {value}
              </button>
            ))}
            
          </div>
        </span>
      </nav>

      <div className={styles.Dicecontainer}>
        <div className={styles.Dice}>
          <img className={styles.Diceimg} src={`/images/dice_${currentDice}.png`} alt="" />
        </div>

        <div className={styles.ActionButtons}>
          <button className={styles.Actionbutton}  onClick={rolldice}>Roll Dice</button> 
          
          <button className={`${styles.Actionbutton} ${styles.BlackButton}`} onClick={()=>setshowrules ((prev)=>!prev) }>
           {showrules ? "Hide Rules" : "Show Rules"}
          </button>
        </div>
        {showrules && <Rules />}
      </div>

    </div>
  );
};

export default Play;
