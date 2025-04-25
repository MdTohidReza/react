import { useState } from "react";

function App() {
const[color, setColor]=useState("olive")

  return (
<div className="w-full h-screen duration-200"
style={{backgroundColor:color}}
>
  <div className="fixed flex flex-wrap justify-center top-10 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-3 rounded-3xl">
      <button
      onClick={()=>setColor("red")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"red"}}>Red
      </button>

            <button
            onClick={()=>setColor("green")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"green"}}>green
      </button>

            <button
            onClick={()=>setColor("blue")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"blue"}}>blue
      </button>

            <button
            onClick={()=>setColor("black")}
      className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
      style={{backgroundColor:"black"}}>black
      </button>
    </div>
  </div>
</div>
  )
}

export default App


/*Note

on the basis of this code React only remember the color while the app is open. when you refresh
the react forget it and start from the beginning.

useState("olive") tells React: "Start with the color olive."

When you click a button, setColor("red") updates the color.

React remembers this color only in memory — just while the page is open.

But as soon as you refresh the page, everything reloads, and React runs useState("olive")
again — so it forgets your previous choice and goes back to olive.


*/