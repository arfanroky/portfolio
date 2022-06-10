import React from 'react';
import resume from '../images/resume.pdf';
import portfolioImg from '../images/person.png';

const Hero = () => {
  return (
    <div>
      <section className="py-4 bg-gradient-to-t from-black to-white">
        <div className="px-6 py-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                  style={{
                    background: 'hsla(0, 0%, 100%, 0.55)',
                    backdropFilter: 'blur(30px)',
                  }}
                >
                  <h1 className=" my-6">
                    <span
                      className=" capitalize text-xl mt-12"
                      style={{ letterSpacing: '6px' }}
                    >
                      Hello, Everyone!
                    </span>
                    <br /> <br />
                    <span className="text-4xl font-extrabold text-green-600">
                      I'M Arfan Roky
                    </span>{' '}
                    <br />
                    <span className="md:text-3xl xl:text-4xl text-3xl capitalize ">
                      Front-End Developer
                    </span>
                  </h1>
                  <a
                    className="inline-block px-7 py-5 mb-2 md:mb-0 md:mr-2 bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
                    style={{ letterSpacing: '3px' }}
                    href={resume}
                    download="YourName resume.pdf"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              <div className="md:mb-12 lg:mb-0 bg-slate-200">
                <img
                  src={portfolioImg}
                  className="w-full rounded-lg shadow-2xl opacity-90"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
