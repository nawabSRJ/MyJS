import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:8080/api/login", { email, password });

        if (res.data.status === "ok") {
            localStorage.setItem("token", res.data.cli);
            navigate("/dashboard");
        } else {
            alert("Invalid credentials");
        }
    };

    
    return (
        <div className="flex min-h-screen justify-center items-center bg-white">
            <form onSubmit={handleLogin} className="bg-white p-8 rounded-lg shadow-lg w-96 space-y-4">
                <h2 className="text-2xl font-semibold text-center text-black">Login</h2>
                
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
