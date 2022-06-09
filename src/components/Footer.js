import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className='text-center py-4'>
             <p className=' font-thin capitalize text-lg
          pl-3 mt-12' style={{letterSpacing: '6px'}}>Made by Arfan Roky  {date}</p>
        </footer>
    );
};

export default Footer;