import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    let [auth, setAuth] = useState(false);
    let [mail, setMail] = useState('');
    let [msg, setMsg] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000', { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    setAuth(true);
                    console.log('Authenticated:', true); // Debugging
                    setMail(res.data.email);
                } else {
                    setAuth(false);
                    setMsg(res.data.message);
                }
            })
            .catch(err => console.log(err));
    }, []);

    const handleLogout = () => {
        axios.post('http://localhost:8000/logout', {}, { withCredentials: true })
            .then(res => {
                if (res.data.status === "Success") {
                    setAuth(false);  // Reset auth state
                    setMail('');      // Clear email
                    setMsg(res.data.message);  // Optionally show message
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <h1 className='text-4xl text-center my-5'>Welcome to the Login - Logout Tutorial</h1>
            <br />
            <p className='text-center'>Below you will either see the Login Button or the Logout button based on whether you have the jwt/cookie.</p>

            {
                auth
                    ? <div>
                        <p className='text-2xl text-center '>You are authorized and your email is {mail} </p>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    : <p className='text-2xl text-center '>
                        {msg} <br/><br/>
                        <Link to={'/login'} className='underline'> Login</Link>
                    </p>
            }
        </div>
    );
}
