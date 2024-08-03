import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
function App() {
  let [navState, setNavState] = useState(false);
  let [lstate, setLState] = useState(false);
  let showInfo = () =>{
    NotificationManager.info('This is info!!' , 'GYAAN');
  }
  let showSuccess = () =>{
    NotificationManager.success('This is success!!' , 'Title');
  }
  let showWarning = () =>{
    NotificationManager.warning('This is warning!!' , 'Title');
  }
  let showError = () =>{
    NotificationManager.error('This is error!!' , 'CRASH');
  }
  return (
    <div className="App flex flex-row">
      <NotificationContainer />


      {/*tip : when a fix action is needed on an event like login btn click should open the modal box then don't do (!state) just write what should be the state like true and false for closing event -> this gets rid of the dependency of initial state in useState hook */}
      <div className='flex flex-col'>
      <button onClick={showInfo}  className=' py-2 px-4 mx-[500px] mt-5 text-2xl bg-sky-500 rounded-full mt-'>Info</button>

      <button onClick={showSuccess}  className=' py-2 px-4 mx-[500px] mt-5 text-2xl bg-sky-500 rounded-full'>Success</button>

      <button onClick={showWarning}  className=' py-2 px-4 mx-[500px] mt-5 text-2xl bg-sky-500 rounded-full'>Warning</button>

      <button onClick={showError}  className=' py-2 px-4 mx-[500px] mt-5 text-2xl bg-sky-500 rounded-full'>Error</button>
      </div>
      <br/>
      <button onClick={() => setLState(true)} className='login-btn py-2 px-4 my-5 text-2xl bg-sky-500 rounded-full'>Login</button>
      <div className={`ModalOverlay w-[100%] h-[100%] ${lstate ? 'ShowModalOverlay' : ''}`}>
        <div className={`ModalMain w-[320px] h-[320px] bg-white ${lstate ? 'ShowModalMain' : ''}`}>
          <span id='cross-btn' className='text-2xl' onClick={() => setLState(false)}>❌</span>
        </div>
      </div>





      <button onClick={() => setNavState(!navState)} className='micon py-2 px-4 bg-green-700 sm:text-3xl text-2xl '>
        {
          (navState)
            ?
            <span>&times;</span>
            :
            <span>&#9776;</span>
        }

      </button>

      <div className={`menu ${navState ? 'active-menu' : ''}`}>
        <ul className='list-style-none text-left pl-10 pr-10 pt-10 bg-yellow-300 h-[100vh]'>
          <li className='my-0'>Home</li>
          <li className='my-5'>About</li>
          <li className='my-5'>Contact</li>
          <li className='my-5'>Github</li>
        </ul>
      </div>

    </div>
  );
}

export default App;
