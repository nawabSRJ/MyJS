import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-green-300'>
        <h1 className='text-center text-3xl'>Header Part</h1>
        <nav className='w-[100%]'>
            <ul className='flex flex-row gap-10 justify-center p-0 mt-4 cursor-pointer'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about-us'}>About</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
            </ul>
        </nav>
    </div>
  )
}
