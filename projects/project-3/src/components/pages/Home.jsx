import React from 'react';
import Styles from './Home.module.css';
import HeadingText from '../texts/HeadingText';  // Updated path
// import ButtonOne from '../buttons/ButtonOne';  // Updated path
import Play from './Play';
import { useState } from 'react';



const Home = ({toggle}) => {
  

  
  return (
    <div className={Styles.home}>
      <div className={Styles.ImageCon}>
        <img src="/images/dices 1.png" alt="" className={Styles.image} />
      </div>

      <div className={Styles.TextCon} >
        <div className={Styles.insidecon} >
          <HeadingText
            text="Dice Roller"
            style={{ color: "black", fontSize: "6rem" }}
          />
          <button className={Styles.Buttonone} onClick={toggle}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
