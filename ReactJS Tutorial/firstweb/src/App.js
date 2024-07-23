import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [check , setCheck] = useState(false);
  let template = '';
  let flipCheck = () =>{
    setCheck(!check);
  };

  if(check){
    template = <>
    <button onClick={flipCheck} className='px-4 py-2 w-1/5 text-center bg-rose-500 text-black mx-5 my-5'>Hide</button>
    <p className='text-left'>Ta da...</p>
    </>
  }else{
    template = <>
    <button onClick={flipCheck} className='px-4 py-2 w-1/5 text-center bg-green-400 text-black mx-5 my-5'>Show</button>
    </>
  }
  let [count , setState] = useState(1);
  
  let addCount = () => {
   setState((count) => count.toString() + '0')
}

  let displayAlert1 = ()=>{
    alert('Heya!! , from arrow function')
  }
  function displayAlert2(){
    alert('Heya!! , from normal function')
  }
  return (
    <div className="App">
      <h1 className='text-3xl text-sky-500 font-semibold'>Namastey World</h1>
      <button onClick={displayAlert1} className='px-4 py-2 text-center bg-green-400 text-black mx-5 my-5'>Arrow func Alert</button>
      
      <button onClick={displayAlert2} className='px-4 py-2 text-center bg-rose-200 text-black mx-5 my-5'>function() Alert</button>

      <button onClick={addCount} className='px-4 py-2 text-center bg-green-400 text-black mx-5 my-5'>Increase</button>
      <div className='text-2xl flex flex-start flex-col ml-5'>
        useState() demo : 
      <p className='block text-2xl'> Counter : {count} </p>
      {template}
      </div>
    </div>
  );
}

export default App;
