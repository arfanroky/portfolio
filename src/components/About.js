import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import portfolioImg from '../images/arfan-roky.png';
import {  Power4 } from 'gsap/gsap-core';

const About = () => {

    gsap.registerPlugin()

    let imgItem = useRef(null);
    let btn = useRef(null);
    let firstText = useRef(null)
    let secondText = useRef(null)

    let info = useRef(null);
  
  
    useEffect(() => {
  
      gsap.to(imgItem, {duration: 2, scale: 1.2, opacity: 1, x:-20, ease: Power4.easeOut, delay: .5})
      gsap.to(btn,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: .6});
      gsap.to(firstText,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: .8});
      gsap.to(secondText,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: 1});

      gsap.to(info,{duration: 1, opacity: 1, y: -20, ease: Power4.easeOut, delay: 1.5});
      
    }, [])

    return (
        <section className="min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen gap-y-12">
        
          <div className="w-full border  h-full overflow-hidden flex justify-center items-center">
            <div className='md:w-[380px] h-[480px] overflow-hidden '>
            <img
            ref={el => {imgItem = el}}
             className='opacity-0 transform scale-150' src={portfolioImg} alt="" />
            </div>
          </div>
          <div  className=" w-full h-full flex flex-col md:px-24 px-8 justify-center md:pt-8 pt-24">
            <h2  ref={el => {firstText = el}} className="text-3xl opacity-0 text-green-400 font-thin uppercase py-4 tracking-widest">
             About me
            </h2>
          <div ref={el => {info = el}} className="opacity-0">
            <p>
              <span className="text-green-600 font-thin tracking-wide">
                Email :{' '}
              </span>
              arfanroky0@gmail.com
            </p>
            <p>
              <span className="text-green-600 font-thin tracking-wide">
                Phone :{' '}
              </span>
              +8801611695544
            </p>
          </div>
            <p ref={el => {secondText = el}} className='my-8 text-justify opacity-0'>
            I,m a Front-End Developer with project experience. Honestly, I love coding and coding is my walks of life. I'm very responsible with my work and very helpful. proficient with Html, CSS, Bootstrap, Tailwind, Javascript, React and I can do CRUD Operation with Express Js , MongoDB.
            </p>
           <div>

        <div ref={el => {btn = el}} className='opacity-0'>
        <a
             className="py-4 px-6 border  hover:bg-green-600 hover:text-white transition rounded font-thin text-xl "
             style={{ letterSpacing: '6px' }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/arfanroky"
              >
                GitHub
              </a>

              <a
              
                className="py-4 px-6 border  hover:bg-green-600 hover:text-white transition rounded font-thin text-xl  ml-6"
                style={{ letterSpacing: '6px' }}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/arfan-roky-46a5b023a/"
              >
                Linkedin
              </a>
        </div>
           </div>
          </div>
        </div>
      </section>
    );
};

export default About;