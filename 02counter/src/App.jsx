import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter]=useState(15);
  // let counter=5;

  const addValue=()=>{
    
    if(counter==20){
      setCounter(counter=20);
    }
    else{
      setCounter(counter+1);
    }

  }

  const removeValue=()=>{
    
    if(counter>0){
      setCounter(counter-1)
    }
    else{
      setCounter(counter=0)
    }
  }

  return (
    <>
      <h1>chai aur code</h1>
      <h1>Count is : {counter}</h1>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
