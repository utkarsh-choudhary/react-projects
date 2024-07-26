import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myArr={
    username:"utkarsh",
    age:23,
  }

  return (
    <>
  <h1 className='bg-green-600 p-4 text-black rounded-xl mb-4'>Tailwind css</h1>
  <Card username="chaiaurcode" btnText="click me"/>
  <Card username="utkarsh" />

    </>
  )
}

export default App
