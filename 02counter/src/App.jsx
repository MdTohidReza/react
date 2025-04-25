import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // counter is variable and setcounter is function which is responsible for updating the value of counter
  // useState is a hook which is used to create state in functional component

  let [counter, setCounter] = useState(15)
  //let counter= 15
// Note :- In React UI is controlled by React ownself

  const addValue= ()=>{
    // if(counter === 20){
    //   setCounter(20)
    //   return
    // }
    //counter = counter + 1  usestate passes all the updated value in UI also in variable they are transfer in batches
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    setCounter(prevCounter=>prevCounter+1)
    
    // setcounter(counter)// if counter - counter+1 is defined
  }



  const removeValue= ()=>{
    // console.log("Removed", counter);
     if (counter === 0){
      setCounter(0)
      return
    }
    setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur React</h1>
    <h2>Counter Value:{counter}</h2>

    <button onClick={addValue}>Add value {counter}</button>
    <br />
    <br />
    <button onClick={removeValue}>Remove Value{counter}</button>

    <p>Footer:{counter}</p>
    </>

    
  )
}

export default App


// interview question