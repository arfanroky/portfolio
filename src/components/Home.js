import React, { useState } from 'react';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

import Hero from './Hero';
import Projects from './Projects';


const Home = () => {

  return (
   <div className='bg bg-rose-300'>
   <Hero></Hero>
   <About></About>
   <Projects></Projects>
   <Contact></Contact>
    <Footer></Footer>
   </div>
  );
};

export default Home;
