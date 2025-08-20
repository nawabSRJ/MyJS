import { useState, useCallback, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [charAllowed, setCharAllowed] = useState(false);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const onPasswordCopy = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*()_+-";
    
    for(let i=1; i < length; i++){
      // pass += str.charAt(Math.floor(Math.random() * str.length))
      const index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index);
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    generatePassword();
  }, [length,numberAllowed,charAllowed])
  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3 text-xl">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3 text-white"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button onClick={onPasswordCopy} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer hover:bg-blue-400">
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-5">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="password-length">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={()=>{
              setNumberAllowed((prev)=>!prev)
            }}
          />

          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev)=>!prev)
            }}
          />

          <label htmlFor="characters">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
