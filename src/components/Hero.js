import React from 'react';
import portfolioImg from '../images/person.png';
import resume from '../images/resume.pdf'
import facebook from '../images/social/facebook.png';
import linkedin from '../images/social/linkedin.png';
import twitter from '../images/social/twitter.png';
import instagram from '../images/social/instagram.png';

const Hero = () => {
    return (
        <div className="md:h-screen  md:mt-0 md:mb-0 pt-40 mb-12">

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
          <p className=' mt-12 text-md pr-5' style={{letterSpacing: '3px', lineHeight: '2'}}>
            As a Front-End Developer I have to take responsible for developing
            new user-interface.{' '}
          </p>
          <ul className='flex  my-8 gap-x-4'>
        <a href="https://www.facebook.com/arfan.roky.5" target='_blank'  rel="noreferrer">
            <img className='w-12 h-12' src={facebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/arfan-roky-46a5b023a/" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={linkedin} alt="" />
                </a>
                <a href="https://twitter.com/ArfanRoky" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com/arfan.roky/?hl=en" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={instagram} alt="" />
                </a>
        </ul>
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