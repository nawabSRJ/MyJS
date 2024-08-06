import React from 'react'
import Header from '../common/Header'
import { blogs } from '../Data/blogs'
import { Link } from 'react-router-dom';
export default function Blog() {
  let allBlogs = blogs.map((v,i) =>{
    return(
      <div className='blogItems basis-[30%] p-2 shadow-xl m-4'>
        <h1 className='text-2xl text-center'>{v.title}</h1>
        <p className='text-1xl text-left'>{v.body}</p>
        <button className='px-4 py-2 bg-green-500 text-black mx-auto'> <Link to={`/blog/${v.id}`}> Read More </Link></button>
      </div>
    )
  })
  return (
    <div>
      <Header/>
      <h1 className='text-4xl text-blue-700 text-center'>Blog Page</h1>
      <div className='container w-[1320px] mx-auto border-2 border-black flex flex-wrap'>
        {allBlogs}
    </div>
    </div>
    
  )
}
