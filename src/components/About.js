import React from 'react';
import portfolioImg from '../images/person.png';
import html from '../images/skills/html.png';
import css from '../images/skills/css.webp';
import bootstrap from '../images/skills/bootstrap.png';
import tailwind from '../images/skills/tailwind.png';
import js from '../images/skills/js.png';
import react from '../images/skills/react.webp';
import node from '../images/skills/node.png';
import mongodb from '../images/skills/mongodb.png';

const About = () => {
    return (
        <div className='h-screen'>  
      <div className="md:flex justify-around items-center h-full">
      <div className='h-full w-full
        flex justify-center items-center flex-col bg-yellow-300'>
          <img className='w-1/2 shadow-lg mx-auto opacity-40' src={portfolioImg} alt="" />
        </div>
        <div className='h-full w-full bg-orange-300
        flex justify-center items-center flex-col '>
        <div className='px-6'>
        <p className=' font-thin capitalize text-lg
          pl-3 mt-12' style={{letterSpacing: '6px'}}>About Me__</p>
         <p className=' my-12 text-md font-extralight ' style={{letterSpacing: '3px', lineHeight: '2'}}>I,m a Front-End Developer with project experience. Honestly, I love coding and coding is my walks of life. I'm very responsible with my work and very helpful. proficient with Html, CSS, Bootstrap, Tailwind, Javascript, React and I can do CRUD Operation with Express Js , MongoDB. </p>

         <p className=' font-thin text-2xl uppercase
          pl-3 mt-12 text-white mb-6' style={{letterSpacing: '6px'}}>My Skills</p>
        <div className='flex flex-wrap justify-around gap-y-2'>
         <div className='border w-40'>
         <img className='p-6 hover:scale-125 ' style={{transition:'300ms ease-in-out'}} src={html} alt="" />
         </div>
         <div className='border w-40'>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={css} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={bootstrap} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={tailwind} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={js} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={react} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={node} alt="" />
         </div>
         <div className='border w-40 '>
         <img className='p-6 hover:scale-125 transition-all' style={{transition:'300ms ease-in-out'}} src={mongodb} alt="" />
         </div>

        </div>
        </div>
        </div>
       
      </div>
        </div>
    );
};

export default About;