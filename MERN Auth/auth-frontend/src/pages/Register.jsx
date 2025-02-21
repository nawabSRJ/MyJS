import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    async function handleRegister(e) {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            }),
        })

        const data = await response.json();
        if(data.status === 'ok'){
            navigate('/login')
        }
        console.log(data);
    }
    return (
        <div className="flex min-h-screen justify-center items-center bg-white">
            <form onSubmit={handleRegister} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-2xl font-semibold text-center text-black">Sign Up</h2>
                <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button

                    type="submit"
                    className="w-full p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                >
                    Sign Up
                </button>
            </form>
        </div>
    )
}
