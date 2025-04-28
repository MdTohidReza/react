import { useState,useCallback, useEffect,useRef} from 'react'


function App() {
  const[length, setLength] = useState(8)
  const[numbersAllowed, setNumbersAllowed] = useState(false)
  const[characterAllowed, setCharacterAllowed] = useState(false)
  const[password, setPassword] = useState('')
  // useRef is used to create a reference to the password input field
  const passwordRef = useRef(null)
// usecallback is used to memoize or optimize the function so that it doesn't get recreated on every render
  const passwordGenerator= useCallback(()=>{
    let pass =" "
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*()_+"


    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length,numbersAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current.select()
    passwordRef.current.setSelectionRange(0, 99)
    window.navigator.clipboard.writeText(password)
  },[password])
    

  // useEffect is used to call the passwordGenerator function whenever the length, numbersAllowed, or characterAllowed changes
  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-500">
        <h1 className="text-white text-center ">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden  ">
        <input type="text"
        value={password}
        className="outline-none w-full py-1 px-5 rounded-lg "
        placeholder="password"
        readOnly
        ref={passwordRef} />
        <button
        onClick={copyPasswordToClipboard}
        className="outline-none bg-blue-700 text-white px-3 py-2 ">Copy</button>
      </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1 my-2">
        <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e) => setLength(e.target.value)}
        />
        <label>length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={numbersAllowed}
        id="numbersInput"
        value={length}
        onChange={(e) => {setNumbersAllowed((prev) => !prev)}}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input
        type="checkbox"
        defaultChecked={characterAllowed}
        id="characterInput"
        value={length}
        onChange={(e) => {setCharacterAllowed((prev) => !prev)}}
        />
        <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>

    </>
  )
}

export default App
