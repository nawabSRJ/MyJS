import React from 'react'
import { useLocation } from 'react-router-dom'
import { blogs } from '../Data/blogs';
import Header from '../common/Header';

export default function BlogDetails() {
    let uselocation = useLocation();
    let currentId = uselocation.pathname.split('/')[2]; 
    let currentData = blogs.filter((v)=>v.id==currentId)[0] 
    return (
    <div>
        <Header/>
        <h3 className='text-center text-3xl text-black my-4'>{currentData.title}</h3>
    </div>
  )
}
