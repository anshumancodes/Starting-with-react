// import logo from './logo.svg';
// import './App.css';

function App() {

  let item={
    name:"Iphone",
    price:100000,
    color:"black"
  }
  return (
    <div>
      <h1>cart</h1>
    <h2>items</h2>
    <input type="range" id="yo"></input>
    
    
    <p>name:{item.name}</p>
    <p>price:{item.price}</p>
    <p>color:{item.color}</p>
    
    </div>
  )
  }
  
  export default App;
