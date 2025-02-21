import React from 'react'
import Header from '../Components/Header'
import ParticlesComponent from '../Components/particles'
import mainpic from '../assets/mainpic.png'
import social1 from '../assets/twitter_logo.png'
import social2 from '../assets/medium_logo.png'
import social3 from '../assets/insta_logo.png'
import social4 from '../assets/linkedin_logo2.png'
import social5 from '../assets/github_logo.png'
import mypic from '../assets/Suit-pic2.jpg'
import '../App.css';

export default function Home() {
  return (
    <div>
      <Header />
      <div className='main-content relative flex sm:flex-row flex-col my-20 mx-auto justify-around'>
        <ParticlesComponent id="particles" className="absolute inset-0 z-[-1]" />
        <div className='info-left z-10 p-10'>
          <strong>
            <h1 className='text-4xl mb-4'>Hello</h1>
            <h1 className='text-5xl mt-4'>I'm Srajan <span className='text-[#FF865E]'>Saxena</span></h1>
          </strong>
          <button className='rounded-full bg-[#FF865E] px-4 py-2 text-[#000000] mt-10 text-xl'><b>Download Resume</b></button>
          <div className="socials flex justify-between w-[52%] ml-1 mt-4">
            <a href="" target='_blank'><button className='rounded-full w-[35px] h-[35px]'><img src={social1} alt="" /></button></a>
            <a href="https://www.linkedin.com/in/srajan-saxena-a6509a248/" target='_blank'><button className='rounded-full w-[35px] h-[35px]'><img src={social4} alt="" /></button></a>
            <a href="https://medium.com/@srajan.saxena7" target='_blank'><button className='rounded-full w-[35px] h-[35px]'><img src={social2} alt="" /></button></a>
            <a href="" target='_blank'><button className='rounded-full w-[35px] h-[35px]'><img src={social3} alt="" /></button></a>
            <a href="https://github.com/nawabSRJ" target='_blank'><button className='rounded-full w-[35px] h-[35px]'><img src={social5} alt="" /></button></a>
          </div>
        </div>
        <div className="pic-right z-10 px-10 py-2">
          <figure>
            <img src={mainpic} alt="Sticker" className='rounded-full w-[360px] shadow-2xl shadow-orange-500' />
          </figure>
        </div>
      </div>
      <br />

      <div className='h-[4px] w-[100%] bg-green-700'></div>
      
      <div className='bg-white'>
        
      </div>    {/* end of about page */}
      
      <div className='bg-blue-400'>
      <h3 className="sm:text-3xl text-2xl text-center my-4 p-4">Skills & Abilities</h3>

        <div className='h-4/5 w-[70%] mx-auto bg-orange-400 p-5'>
        hey
        </div>
      </div>




    </div>
  );
}
