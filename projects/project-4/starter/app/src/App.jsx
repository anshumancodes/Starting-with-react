import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/nav/Nav'
import styled from 'styled-components';

function App() {
  

  return (
    <>
    <Maincontainer>
      <Navbar />
    </Maincontainer>
    </>
  )
}

const Maincontainer = styled.div`
background-image: url("/bg.png"));

`;

export default App
