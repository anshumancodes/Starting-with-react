import { useState } from "react";

import "./App.css";
import Home from "./components/pages/Home";
import Play from "./components/pages/Play";

function App() {

  const [IsStartGame,SetIsGamestarted] = useState(false);

  const toggleGame = () => {
    SetIsGamestarted(( prev => !prev));
  }
  
  return (
    

    <>

      {IsStartGame ? <Play  /> : <Home toggle={toggleGame}/>}
      
      
    </>
  );
}

export default App;
