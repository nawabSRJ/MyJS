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
        <div className="about h-4/5 z-2 w-[70%] mx-auto flex flex-col items-center justify-center bg-white">
          <h3 className="sm:text-3xl text-2xl text-center my-4">🕵️‍♀️ About Me</h3>
          <div className="container flex flex-col sm:flex-row items-center justify-center p-10 gap-10">
            <div className="abt-left flex-grow flex justify-center sm:justify-end sm:mr-4 w-full sm:w-2/5">
              <div className="text-center sm:text-left">
                <h1 className="mb-3 text-2xl"><b>I'm Srajan</b></h1>
                <p className='leading-10 mb-3'>
                  I am a student of BCA 3rd year at National Post Graduate College, Lucknow. I am passionate about coding and startups. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to solve problems using my tech knowledge. <br />
                </p>
                <p>
                  <span className='text-blue-600 '>Email :</span> srajan.saxena7@gmail.com
                  <br /><br />
                  <span className='text-blue-600 '>Place :</span> Lucknow, Uttar Pradesh
                </p>
              </div>
            </div>
            <div className="abt-right flex-grow flex justify-center sm:justify-start sm:ml-4 w-full sm:w-1/5">
              <img src={mypic} className="rounded-md h-[420px] shadow-lg transition-shadow duration-300 hover:shadow-xl" />
            </div>
          </div>
        </div>
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
