import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/nav/Nav'
import styled from 'styled-components';
import Searchresult from './components/searchresults/Searchresult'

export const BASE_URL="http://localhost:9000"

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState(null)

  const [filteredData, setFilteredData] = useState(null)

  const [selectedfood, setSelectedfood] = useState("all")

  
  // 

  useEffect(() => {
    const fetchData = async () => {

      setLoading(true)
  
      try{
          
          const response = await fetch(BASE_URL)
          const data = await response.json()
          setFilteredData(data)
          setData(data)
          setLoading(false)
      }catch(error){
          setError("Error fetching data")
      }
    };
    fetchData()
   
  },[]);

  const handleSearch = (e) => {
    const Searchvalue = e.target.value
    

    if(Searchvalue === ""){
      setFilteredData(null)
  }
    const filteredData = data?.filter((food) =>
    
    food.name.toLowerCase().includes(Searchvalue.toLowerCase()))
  
    setFilteredData(filteredData)

  };

  const filterFood=(type)=>{
    if (type==="all"){
      setFilteredData(data)
      setSelectedfood("all")
      return;

    }

      const filteredData = data?.filter((food) =>
    
      food.type.toLowerCase().includes(type.toLowerCase()))
    
      setFilteredData(filteredData)
      setSelectedfood(type)

  }


  if(loading) return <h1>Loading...</h1>
  if(error) return <h1>{error}</h1>
  
  return (
    <>
    
      <Navbar searched={handleSearch} filtertype={filterFood}/>
      <Searchresult data={filteredData} />
      
    </>
  )
}

// const Maincontainer = styled.div`
//   background-image: url("images/bg.png");
//   background-size: cover;
// `;

export default App
