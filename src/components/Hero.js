import React, { useEffect, useRef } from 'react';
import resume from '../images/resume.pdf';
import portfolioImg from '../images/arfan-roky.png';
import gsap from 'gsap';
import {  Power4 } from 'gsap/gsap-core';

const Hero = () => {
  gsap.registerPlugin()

  let imgItem = useRef(null);
  let btn = useRef(null);
  let firstText = useRef(null)
  let secondText = useRef(null)
  let thirdText = useRef(null)


  useEffect(() => {

    gsap.to(imgItem, {duration: 2, scale: 1.2, opacity: 1, y:-20, ease: Power4.easeOut, delay: .5})
    gsap.to(btn,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: .6});
    gsap.to(firstText,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: .8});
    gsap.to(secondText,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: 1});
    gsap.to(thirdText,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: 1.2});
   
    
  }, [])
  
  return (
    <section className="md:min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12">
      <div  className="bg-white w-full h-full flex flex-col md:px-24 px-8 justify-center md:pt-8 pt-24">
        <h3 ref={el => {firstText = el}} className="text-6xl text-left font-medium opacity-0 text-green-500" >HI, EVERYONE</h3>
        <span ref={el => {secondText = el}} className="font-bold md:text-9xl text-7xl opacity-0" >I'M </span>
        <h1 ref={el => {thirdText = el}} className="font-bold md:text-7xl text-5xl  opacity-0" > ARFAN ROKY
        </h1>
       <div>
                  <a
                  ref={el => {btn = el}} className="uppercase py-4 px-8 text-xl 
                  hover:bg-green-800
                  transition
                  rounded-sm bg-green-500 text-white btn-style tracking-wider font-normal
                  opacity-0"
                  href={resume}
                  download="YourName resume.pdf"
                >
                  Download Resume
                </a>
       </div>
      </div>
      <div className="bg-black w-full border border-black h-full overflow-hidden flex justify-center items-center">
        <div className='md:w-[380px] w-[350px]  h-[480px] bg-zinc-800 my-8 overflow-hidden'>
        <img
        ref={el => {imgItem = el}}
         className='opacity-0 transform scale-150 px-6' src={portfolioImg} alt="" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
