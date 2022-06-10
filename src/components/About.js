import React, { useRef, useEffect } from 'react';
import portfolioImg from '../images/person.png';
const About = () => {
  return (
    <div className="lg:h-[400px]  md:mt-0 md:mb-0 mt-40 mb-12  bg-white " id='about'>
      <div className="lg:flex justify-around items-center h-full px-6 md:px-12 ">
        <div
          className="h-full w-full
        flex justify-start items-center flex-col"
        >
          <img
            className=" w-[200px] opacity-40 -ml-24"
            src={portfolioImg}
            alt=""
          />
          <div className="md:w-1/2 mt-4">
            <h2 className="text-3xl text-yellow-400 font-thin uppercase py-4">
              Reached Me
            </h2>
            <p>
              <span className="text-rose-600 font-thin tracking-wide">
                Email :{' '}
              </span>
              arfanroky0@gmail.com
            </p>
            <p>
              <span className="text-rose-600 font-thin tracking-wide">
                Phone :{' '}
              </span>
              +8801611695544
            </p>
          </div>
        </div>

        <div
          className="h-full w-full 
        flex justify-center items-center flex-col "
        >
          <div className="mt-6">
            <p
              className="  capitalize text-xl text-green-600
          my-4"
              style={{ letterSpacing: '4px' }}
            >
              About Me__
            </p>
            <p
              className=" my-4 text-justify"
              style={{ letterSpacing: '2px', lineHeight: '2' }}
            >
              I,m a Front-End Developer with project experience. Honestly, I
              love coding and coding is my walks of life. I'm very responsible
              with my work and very helpful. proficient with Html, CSS,
              Bootstrap, Tailwind, Javascript, React and I can do CRUD Operation
              with Express Js , MongoDB.{' '}
            </p>

            <div className="mt-12">
              <a
                className="py-4 px-8 border  hover:bg-green-500 hover:text-white transition rounded font-thin text-xl mr-6"
                style={{ letterSpacing: '6px' }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/arfanroky"
              >
                GitHub
              </a>

              <a
                className="py-4 px-8 border  hover:bg-green-600 hover:text-white transition rounded font-thin text-xl"
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
    </div>
  );
};

export default About;
