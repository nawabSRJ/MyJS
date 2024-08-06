import React from 'react'
import '../App.css'
export default function Header() {
    return (
        <div className="flex items-center justify-between p-4 bg-[#F3F9FD]">
            <figure className="flex-shrink-0 ml-4">
                <h1 className='text-3xl'>SRJ</h1>
            </figure>
            
            <nav className="flex space-x-4 mr-10">
                <a href="/" className="text-xl text-gray-700  hover:text-[#FF865E]">Home</a>
                <a href="#about" className="text-xl text-gray-700  hover:text-[#FF865E]">About</a>
                <a href="https://github.com/nawabSRJ" target='_blank' className="text-xl text-gray-700  hover:text-[#FF865E]">Github</a>
                <a href="/projects" className="text-xl text-gray-700  hover:text-[#FF865E]">Projects</a>
                <a href="/contact" className="text-xl text-gray-700  hover:text-[#FF865E]">Contact</a>
            </nav>
        </div>
    )
}
