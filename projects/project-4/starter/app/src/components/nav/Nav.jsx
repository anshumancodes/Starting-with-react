import React from 'react';
import styled from 'styled-components';

const Nav = ({ searched, filtertype }) => {
  return (
    <Navbar>
      <LayerOne>
        <Logo>
          <img src="/images/Foody Zone.svg" alt="Foody Zone Logo" />
        </Logo>
        <SearchInput type="text" placeholder="Search dishes..." onChange={searched}/>
      </LayerOne>
      <Layertwo>
        <button onClick={()=>filtertype("all")}>All</button>
        <button onClick={()=>filtertype("breakfast")}>Breakfast</button>
        <button onClick={()=>filtertype("lunch")}> lunch</button>
        <button onClick={()=>filtertype("dinner")}>dinner</button>

      </Layertwo>
    </Navbar>
  );
};

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  background-color: #5D5A5A;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  flex-direction: column;
  gap: 3vh;
`;

const LayerOne = styled.div`
  display: flex;
  width: 90%;
  
  height: 10vh;
  align-items: center;
 
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Layertwo = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 2vw;
  margin-top: 1vh;
  
  justify-content:center;

  button {
    background-color: #FF4343;
    padding:1vh 2vw;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 5px;
  `;
  


const SearchInput = styled.input`
  background-color: #fff;
  border: 1px solid red;
  outline: none;
  height: 4vh;
  width:300px;
  border-radius: 5px;
  width: fit-content;
  background:inherit;
  color: #fff;
  &::placeholder {
    color: white;
  }
`;

const Logo = styled.div`
  
`;

export default Nav;
