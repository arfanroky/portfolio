import React from 'react';
import { Link } from 'react-router-dom';
import portfolioImg from '../images/person.png';
import resume from '../images/resume.pdf'

const Hero = () => {
    return (
        <div className="h-screen bg-violet-300">

      <div className="md:flex justify-around items-center h-full">
        <div className='bg-violet-300 h-full w-full
        flex justify-center items-center flex-col '>
        <div className='px-6'>
        <p className=' font-thin capitalize text-lg
          pl-3 mt-12' style={{letterSpacing: '6px'}}>Hello, Everyone</p>
          <h1 className='mt-3'>
            <span className=' font-bold text-9xl text-gray-200'>I'M</span> <br /> <br />
            <span className='text-7xl font-semibold uppercase text-slate-700'>Arfan Roky</span>
          </h1>
          <p className=' my-12 text-md' style={{letterSpacing: '3px', lineHeight: '2'}}>
            As a Front-End Developer I have to take responsible for developing
            new user-interface.{' '}
          </p>
          <a 
          className='py-4 px-8 border  hover:bg-white transition rounded font-thin'
          style={{letterSpacing: '6px'}}
          href={resume}  download="YourName resume.pdf"> Download Resume </a>
        </div>
        </div>
        <div className='h-full w-full
        flex justify-center items-center flex-col ' style={{backgroundColor: '#e1e1e1'}}>
          <img className='w-1/2 shadow-lg mx-auto opacity-40' src={portfolioImg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Hero;