import React from 'react';
import {  FaReact, FaHtml5, FaCss3, FaBootstrap, FaJs,  FaNodeJs, FaGithub } from 'react-icons/fa';

const Skills = () => {
    return (

   <div className="container mx-auto bg-black py-12 rounded shadow-inner">
    <h1 className='text-6xl text-center uppercase font-thin text-white'>Skills</h1>
   <ul className='flex flex-wrap justify-around items-center  pt-12'>
    <li className='text-rose-600 text-6xl '><FaHtml5/></li>
    <li className='text-sky-600 text-6xl '><FaCss3/></li>
    <li className='text-blue-800 text-6xl '><FaBootstrap/></li>
    <li className='text-yellow-400 text-6xl '><FaJs/></li>
    <li className='text-blue-400 text-6xl '><FaReact/></li>
    <li className='text-lime-300 text-6xl '><FaNodeJs/></li>
    <li className='text-white text-6xl '><FaGithub/></li>
   </ul>
   </div>
      
    );
};

export default Skills;