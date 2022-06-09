import React from 'react';
import { Link } from 'react-router-dom';
import portfolioImg from '../images/person.png';
import resume from '../images/resume.pdf'

const Hero = () => {
    return (
        <div className="md:h-screen bg-white md:mt-0 md:mb-0 mt-40 mb-12">

      <div className="md:flex justify-evenly items-center h-full px-12">
        <div className=' h-full w-full
        flex justify-center items-center flex-col '>
        <div className='pl-8 pr-4'>
        <p className=' font-thin capitalize text-lg
          pl-3 mt-12' style={{letterSpacing: '6px'}}>Hello, Everyone</p>
          <h1 className='mt-3'>
            <span className=' font-bold text-9xl text-gray-200'>I'M</span> <br /> <br />
            <span className='text-7xl font-semibold uppercase text-slate-700'>Arfan Roky</span>
          </h1>
          <p className=' my-12 text-md pr-5' style={{letterSpacing: '3px', lineHeight: '2'}}>
            As a Front-End Developer I have to take responsible for developing
            new user-interface.{' '}
          </p>
          <a 
          className='py-4 px-8 border  hover:bg-black hover:text-white transition rounded font-thin text-xl'
          style={{letterSpacing: '6px'}}
          href={resume}  download="YourName resume.pdf"> Download Resume </a>
        </div>
        </div>
        <div className='h-full w-full
        flex justify-center items-center flex-col ' >
          <img className='w-1/2 shadow-lg mx-auto opacity-40 md:block hidden' src={portfolioImg} alt="" />
        </div>
      </div>
    </div>
    );
};

export default Hero;