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
        <div className='md:h-screen bg-white md:mt-0 md:mb-0 mt-40 mb-12'>  
      <div className="md:flex justify-around items-center h-full px-12">

      <div className='h-full w-full
        flex justify-start items-center flex-col'>

          <img className='md:w-1/2 w-3/4 opacity-40 mt-12' src={portfolioImg} alt="" />
         
          <div className='md:w-1/2 mt-4'>
           <h2 className='text-4xl text-yellow-400 font-thin uppercase tracking-widest py-4'>Reached Me</h2>

           <p><span className='text-rose-600 font-thin tracking-widest'>Email : </span>arfanroky0@gmail.com</p>
            
           <p><span  className='text-rose-600 font-thin tracking-widest'>Phone : </span>+8801611695544</p>
            
          <div className='mt-12'>
          <a  className='py-4 px-8 border  hover:bg-black hover:text-white transition rounded font-thin text-xl mr-6'
          style={{letterSpacing: '6px'}}
          target='_blank' rel="noreferrer"
           href="https://github.com/arfanroky">GitHub</a>

            <a
             className='py-4 px-8 border  hover:bg-black hover:text-white transition rounded font-thin text-xl'
             style={{letterSpacing: '6px'}}
             target='_blank' rel="noreferrer"
             href="https://www.linkedin.com/in/arfan-roky-46a5b023a/">Linkedin</a>
          </div>
         </div>
        </div>

        <div className='h-full w-full 
        flex justify-center items-center flex-col '>
        <div className=''>
        <p className=' font-thin capitalize text-lg
          mt-12' style={{letterSpacing: '6px'}}>About Me__</p>
         <p className=' my-12 text-md font-extralight ' style={{letterSpacing: '3px', lineHeight: '2'}}>I,m a Front-End Developer with project experience. Honestly, I love coding and coding is my walks of life. I'm very responsible with my work and very helpful. proficient with Html, CSS, Bootstrap, Tailwind, Javascript, React and I can do CRUD Operation with Express Js , MongoDB. </p>

         <p className=' font-thin text-2xl uppercase
          pl-3 mt-12 mb-6' style={{letterSpacing: '6px'}}>My Skills</p>
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