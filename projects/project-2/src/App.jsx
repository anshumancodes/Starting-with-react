
import './App.css'

import React from 'react'
import Nav from './components/nav'
import Heading from './components/heading'

import Text from './components/Paragraph'

import Form from './components/Form'


function App() {

  // console.log(Form)
  

  return (
    <>
    <div className="container">
    <Nav />
    
    <div className="page-info">
    <Heading text="Contact us" style={{ marginTop: '10vh' }}/>

<Text text="LETS CONNECT: WE`RE HERE TO HELP, AND WE`D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. "/>
    </div>
    <Form />
    

    
    
    </div>
    

     
    </>
  )
}

export default App
