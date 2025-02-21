import { color } from 'framer-motion'
import React from 'react'
import { motion } from 'framer-motion'
export default function Home() {
    return (
        <div>
            <motion.h1 className='text-xl text-left pl-4 text-black font-mono my-4 bg-red-400 w-[20%]'
            initial={{opacity:0}}
            animate={{ fontSize:50 ,color:'blue', x:90, opacity:1}}>
                Hi <br></br>
                I'm Srajan
            </motion.h1>
            <hr></hr>
            <div className='border-red-300 p-5'>
                <p className='p-2 text-xl'>This is the content</p>
            </div>
            <button className='rounded-full py-3 px-4 text-center mx-auto bg-blue-500 ml-5'
            animate={{scale:1.5}}>
                Click Me
            </button>
        </div>
    )
}
