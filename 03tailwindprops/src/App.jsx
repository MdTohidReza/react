import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Hari",
    age:23,
  }
   let newArray = [1,2,3,4,5]

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card username="chai aur code " sameObj={myObj} someObj={newArray}/>
    <Card username="dore mon"/>
    </>
    
  )
}

export default App
