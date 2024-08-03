import React, { useState } from 'react';
import './App.css';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import Background from './ParticleComp.jsx';

function App() {
  const entered = true;
  let [todolist, setTodoList] = useState([]);

  let showInfo = () => {
    NotificationManager.info('Task already Present', 'Info');
  };
  
  let showDeletion = () => {
    NotificationManager.success('Task Deleted', 'Success');
  };

  let list = todolist.map((val, index) => {
    return (
      <TodoListItem key={index} value={val} indexNumber={index} todolist={todolist} setTodoList={setTodoList} />
    );
  });

  let saveTodoList = (event) => {
    let toname = event.target.toname.value;
    if (!todolist.includes(toname) && toname !== '') {
      let finalTodoList = [...todolist, toname];
      setTodoList(finalTodoList);
    } else {
      showInfo();
    }
    event.preventDefault();
  };

  return (
    <div className="App">
      <Background entered={entered} />
      <NotificationContainer />
      <h1 className='text-center my-2 text-3xl text-white'>Todo List App</h1>
      <div className='input-cont w-[100%]'>
        <form onSubmit={saveTodoList}>
          <input name='toname' className='rounded-xl px-2 py-3 text-2xl border-black w-[70%] text-left bg-slate-200' placeholder='Enter your task' />
          <button type='submit' className='rounded-full px-4 py-2 bg-rose-400 m-5'>Add</button>
        </form>
      </div>
      <div className='todo-cont'>
        <ul className='task-cont rounded-xl px-2 py-3 mx-auto text-2xl border-black w-[60%] text-left bg-slate-200'>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function TodoListItem({ value, indexNumber, todolist, setTodoList }) {
  let deleteTodo = (event) => {
    let finaldata = todolist.filter((v, i) => i !== indexNumber);
    setTodoList(finaldata);
  };
  
  return (
    <li className='flex justify-between mb-1 border-b border-gray-900 pb-2'>
      <span>{indexNumber + 1}) {value}</span>
      <span className='cursor-pointer' onClick={deleteTodo}>❌</span>
    </li>
  );
}
