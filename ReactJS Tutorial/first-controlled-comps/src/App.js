import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { getValue } from '@testing-library/user-event/dist/utils';

function App() {

  let [uname, setUname] = useState('');
  let [passwd, setPasswd] = useState('');

  let getUname = (event) => {
    setUname(event.target.value);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(uname, passwd);
  };

  // ****************************************************************

  // resets the form data to empty once a new data is saved
  let [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: '',
  });


  
  let [userData, setUserData] = useState([]);

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    console.log(inputName, inputValue);
    oldData[inputName] = inputValue;
    setFormData(oldData);
  };

  let handleSubmit2 = (event) => {
    let currentUserFormData = {
      uname: formData.uname, uemail: formData.uemail, uphone: formData.uphone,
      umessage: formData.umessage
    };
    let oldUserData = [...userData, currentUserFormData]; // old array + new array element
    setUserData(oldUserData);
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='form-div border-black border-2 mt-4'>
            <form onSubmit={handleSubmit}>
              <div className='text-left my-3 ml-4'>
                <label>Username : </label>
                {/* using different function stored in variable */}
                <input type='text' onChange={getUname} placeholder='enter username here' value={uname} />
              </div>
              <div className='text-left my-3 ml-4'>
                <label>Password : </label>
                {/* using arrow function in-place */}
                <input type='password' onChange={(event) => setPasswd(event.target.value)} placeholder='enter password here' value={passwd} />
              </div>
              <div className='text-left ml-4'>
                <button className='text-left px-4 py-2 bg-blue-200 rounded-md'>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <h1 className='text-4xl text-center mt-10'>Enquiry Form Handle with State using Controlled Components</h1>
      <div className='container border-2 border-black text-left mt-10 mx-auto pl-5'>
        <form onSubmit={handleSubmit2}>
          {userData.length}
          <div>
            <label className='text-xl'>Name : </label>
            <input className='px-2 py-3 text-xl' onChange={getValue} name='uname' value={formData.uname} type='text' placeholder='enter...' />
          </div>
          <div>
            <label className='text-xl'>Email : </label>
            <input className='px-2 py-3 text-xl' onChange={getValue} name='uemail' value={formData.uemail} type='email' placeholder='enter...' />
          </div>
          <div>
            <label className='text-xl'>Phone : </label>
            <input className='px-2 py-3 text-xl' onChange={getValue} name='uphone' value={formData.uphone} type='number' placeholder='enter...' />
          </div>
          <div>
            <label className='text-xl'>Message : </label> <br />
            <textarea className='resize-none text-md' onChange={getValue} name='umessage' value={formData.umessage} rows={5} cols={25} placeholder='enter...'></textarea>
          </div>
          <button className='text-left px-4 py-2 bg-blue-200 rounded-md'>Save</button>
        </form>
      </div> {/* 2nd container closed */}

      {/* making table to render the data : */}
      <table className="">
        <thead className="">
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {
            userData.length >= 1 ? (
              userData.map((obj, i) => (
                <tr key={i}>
                  <td>{i+1}</td>
                  <td>{obj.uname}</td>
                  <td>{obj.uemail}</td>
                  <td>{obj.uphone}</td>
                  <td>{obj.umessage}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-4 text-center">No Data Found</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
