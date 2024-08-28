import React, { useState } from 'react';
import { LC, SC, UC } from './data/chars';

function App() {
  let [uppercase , setUppercase] = useState(false)
  let [lowercase , setLowercase] = useState(false)
  let [special , setSpecial] = useState(false)
  let [passwdLen , setPasswdlen] = useState(10); // by default

  let createPassword = () =>{
    let charSet = ''
    if(uppercase || lowercase || special){
      if(uppercase) charSet+= UC
      if(lowercase) charSet+= LC
      if(special) charSet+= SC
    }
    else{
      alert('Please check one box')
    }
  
  }
  
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className="passwordBox mx-auto bg-blue-700 w-2/5 p-5">
        <h2 className='text-center text-3xl text-white'>Password Generator</h2>

        <div className='passwordBoxin w-[100%] mx-auto my-3 bg-white-200'>
          <input type='text' className='w-[80%] py-1' readOnly/>
          <button className='text-center ml-2 px-4 py-2 rounded-full bg-red-500'>Copy</button>
        </div>

        <div className='passLength text-white flex flex-wrap flex-row justify-between'>
          <label className='text-xl'>Password Length : </label>
          <input type='number' max={20} min={10} value={passwdLen} onChange={(event)=>setPasswdlen(event.target.value)} className='w-1/5' />
        </div>

        <div className='passUpper my-4 text-white flex flex-wrap flex-row justify-between'>
          <label className='text-xl'>Include Uppercase : </label>
          <input type='checkbox' className='w-1/5' checked={uppercase} onChange={()=>setUppercase(!uppercase)} />
        </div>

        <div className='passLower my-4 text-white flex flex-wrap flex-row justify-between'>
          <label className='text-xl'>Include Lowercase : </label>
          <input type='checkbox' className='w-1/5' checked={lowercase} onChange={()=>setLowercase(!lowercase)} />
        </div>
        <div className='passSpecial my-4 text-white flex flex-wrap flex-row justify-between'>
          <label className='text-xl'>Include Special Chars : </label>
          <input type='checkbox' className='w-1/5' checked={special} onChange={()=>setSpecial(!special)} />
        </div>
      <div>
      <button className='passGenBtn mt-3 w-[100%] text-center text-2xl px-2 py-2 bg-white text-blue-700'>Generate Password</button>
      </div>
      </div>
      
    </div>
  );
}

export default App;
