import React from 'react'
import { BASE_URL } from '../../App'
import styled from 'styled-components'

const Searchresult = ({data}) => {
  return (
    <FoodCardContainer>
      <Foodcards> 
      {data?.map(({name,image,text,price,type}) => {
        return (
          <Foodcard key={name}>
            
            <img src={BASE_URL+image} alt={name} />
            <div className="foodinfo">
              <div className="info">
              <h3>{name}</h3>
            <p>{text}</p>
            
              </div>
              <button>{"$"+price+".00"}</button>
            </div>
          </Foodcard>
        )
      })}
      </Foodcards>
    </FoodCardContainer>
  )
}

const FoodCardContainer = styled.div`
background-image: url("images/bg.png");
min-height:calc(100vh - 12vh);
display: flex;
flex-direction: column;
background-size:100%;
align-items: center;

`

const Foodcards = styled.div`
margin-top: 10vh;
width: 70%;
display: flex;
flex-wrap: wrap;
gap: 2vw;

`
const Foodcard = styled.div`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-radius: 5px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    display: flex;
    width: 350px;
    height: 167px;
    

    h3 {
        font-size: 1.2rem;
    }
    .info {
        display: flex;
        flex-direction: column;
        gap: 2vh;

    }
    button {
      margin-top: 2vh;
      background-color: #FF4343;
      width: 59px;
      height: 25px;
      border: none;

      outline: none;
      border-radius: 5px;
    
    }
`;


export default Searchresult