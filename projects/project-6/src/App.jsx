import React from "react";

function App() {
  return (
    <div className="flex items-center flex-col h-screen">

      <div className="bg-white p-6 rounded-full flex justify-center items-center text-black gap-1vw w-90% mt-5 h-5 gap-x-1">
        <img src="imgs/logos_firebase.svg" alt="Firebase Logo" className="bg-white rounded-full" />
        <h1 className="bg-white font-semibold text-xl">Firebase Contact App</h1>
      </div>


      <div className="flex gap-1vw w-90% mt-4">
        <input type="search" className="outline-none border border-white h-40px rounded-10px text-white w-80%" placeholder="  Search" />
      </div>

      
    </div>
  );
}

export default App;


