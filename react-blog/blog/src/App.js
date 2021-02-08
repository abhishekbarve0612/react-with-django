import {useState} from 'react';
import NavBar from './Header/NavBar';
import Home from './Main/Home';
import './App.css';

function App() {
  const [name, setName] = useState("Abhishek");
  function handleClick(){
    setName("Abhi Barve")
    console.log(name);
  }

  return (
    <div className="App">
      <NavBar/>
      <div className="content">
        <Home/>
        <h2>Owner: {name}</h2>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
