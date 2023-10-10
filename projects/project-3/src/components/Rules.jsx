import React from 'react';
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
        <h3>Rules</h3>
        <p>Select any number</p>
        <p>Click on the 'roll the dice' button</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice</p>
        <p>if you get wrong guess then  2 point will be dedcuted</p>

      
    </RulesContainer>
  )
}



export default Rules

const RulesContainer = styled.div`
display: flex;
flex-direction: column;
gap : 10px;
padding: 20px;

background: #FBF1F1;

h2{
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 700;
    }

`

