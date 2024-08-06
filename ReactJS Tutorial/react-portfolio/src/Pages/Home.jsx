import React from 'react'
import Header from '../Components/Header'
import ParticlesComponent from '../Components/particles'
import mainpic from '../assets/mainpic.png'
import social1 from '../assets/twitter_logo.png'
import social2 from '../assets/medium_logo.png'
import social3 from '../assets/insta_logo.png'
import social4 from '../assets/linkedin_logo2.png'
import social5 from '../assets/github_logo.png'


export default function Home() {
  return (
    <div>
      <Header />
      <ParticlesComponent id="particles" />
      <div className='main-content flex sm:flex-row flex-col my-20 mx-auto justify-around '>
        <div className='info-left   p-10'>
          <strong>
            <h1 className='text-4xl mb-4'>Hello</h1>
            <h1 className='text-5xl mt-4'>I'm Srajan <span className='text-[#FF865E]'>Saxena</span></h1>
          </strong>
          <button className='rounded-full bg-[#FF865E] px-4 py-2 text-[#000000] mt-10 text-xl'> <b>Download Resume </b></button>
          <div className="socials flex justify-between w-[52%] ml-1 mt-4">
           <a href="" target='_blank'> <button className='rounded-full w-[35px] h-[35px]'><img src={social1} alt=""  /></button></a>
           <a href="https://www.linkedin.com/in/srajan-saxena-a6509a248/" target='_blank'> <button className='rounded-full w-[35px] h-[35px]'><img src={social4} alt=""  /></button></a>
           <a href="https://medium.com/@srajan.saxena7" target='_blank'> <button className='rounded-full w-[35px] h-[35px]'><img src={social2} alt=""  /></button></a>
           <a href="" target='_blank'> <button className='rounded-full w-[35px] h-[35px]'><img src={social3} alt=""  /></button></a>
           <a href="https://github.com/nawabSRJ" target='_blank'> <button className='rounded-full w-[35px] h-[35px]'><img src={social5} alt=""  /></button></a>
          </div>
        </div>

      <div className="pic-right px-10 py-2">
        <figure>
          <img src={mainpic} alt="Sticker" className='rounded-full w-[360px] shadow-2xl shadow-orange-500' />
        </figure>
      </div>

      </div>

    </div>
  )
}
