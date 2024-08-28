import React from 'react'
import Header from '../common/Header'
export default function Err404() {
  return (
    <div>
        <Header/>
        <h1 className='text-3xl text-center text-red-600'>Aliens abducted this page</h1>
        <h2 className='text-2xl text-center text-black mt-2'>Don't worry , we are negotiating its return...</h2>
    </div>
  )
}
