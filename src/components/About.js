import React from 'react';
import portfolioImg from '../images/person.png';


const About = () => {
    return (
        <div className='h-screen'>  
      <div className="md:flex justify-around items-center h-full">
      <div className='h-full w-full
        flex justify-center items-center flex-col bg-orange-300'>
          <img className='w-1/2 shadow-lg mx-auto opacity-40' src={portfolioImg} alt="" />
        </div>
        <div className='h-full w-full bg-rose-300
        flex justify-center items-center flex-col '>
        <div className='px-6'>
        <p className=' font-thin capitalize text-lg
          pl-3 mt-12' style={{letterSpacing: '6px'}}>About Me__</p>
         <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam optio cum deleniti maxime minima autem architecto, debitis error nam, dolores corporis, atque nesciunt modi deserunt similique quibusdam enim quos repudiandae.</p>

         <ul>
             <li>HTML</li>
             <li>CSS</li>
             <li>JAVASCRIPT</li>
             <li>REACT</li>
             <li>EXPRESS</li>
             <li>MONGODB</li>
         </ul>
        </div>
        </div>
       
      </div>
        </div>
    );
};

export default About;