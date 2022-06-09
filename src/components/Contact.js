import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import facebook from '../images/social/facebook.png';
import linkedin from '../images/social/linkedin.png';
import twitter from '../images/social/twitter.png';
import instagram from '../images/social/instagram.png';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2qi5s5d',
        'template_fhpiufx',
        form.current,
        'vSYLq3IqIep_lqsTT'
      )
      .then(
        (result) => {
          toast.success('Your Message sent');
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen grid md:grid-cols-2 grid-cols-1 justify-items-center items-center md:mt-0 md:mb-0 mt-40 mb-12">
          <form className=" h-[500px] shadow-2xl py-12 px-12 rounded-2xl" ref={form} onSubmit={sendEmail}>
              <p className=' font-thin capitalize text-lg' style={{letterSpacing: '6px'}}>Contact Me__</p>
       <div className='w-[400px] mt-4'>
       <label className=' font-thin capitalize text-lg'>Name:</label> <br />
        <input
          className="py-3 pl-3 pr-8 border shadow-inner rounded outline-none w-full"
          type="text"
          required
          name="user_name"
          autoComplete='off'
        />{' '}
       </div>
       
       <div className='w-[400px] mt-4'>
       <label className=' font-thin capitalize text-lg'>Email</label> <br />
        <input
          className="py-3 pl-2 pr-8 border shadow-inner rounded outline-none w-full"
          type="email"
          name="user_email"
          autoComplete='off'
        />{' '}
       </div>
   

       <div className='w-[400px] mt-4'>
       <label className=' font-thin capitalize text-lg'>Message:</label>
        <textarea
          className="py-3 pl-2 pr-8 border shadow-inner rounded outline-none w-full resize-none "
          name="message"
          autoComplete='off'
        />{' '}
       </div>

        <input
          className="py-4 px-8 border  hover:bg-black hover:text-white transition rounded font-thin text-xl mt-6"
          style={{ letterSpacing: '6px' }}
          type="submit"
          value="Send"
        />
      </form>
    <div className=' w-[450px] h-[500px] px-12 py-12 rounded-2xl shadow-2xl md:mt-0 mt-12'>
    <p className=' font-thin capitalize text-lg  pt-12' style={{letterSpacing: '6px'}}>Contact Info__</p>
        <p className=' mb-8 mt-4 text-md pr-5' style={{letterSpacing: '3px', lineHeight: '2'}}>If needed any help and <br /> ask me any question then contact with me.</p>
        <ul>
            <li><span className='text-rose-500 font-thin tracking-widest'>Name : </span>Arfan Roky</li>
            <li><span className='text-rose-500 font-thin tracking-widest'>Email : </span>arfanroky0@gmail.com</li>
            <li><span className='text-rose-500 font-thin tracking-widest'>Phone : </span>+8801611695544</li>
        </ul>

        <ul className='flex  my-8 gap-x-2'>
        <a href="https://www.facebook.com/arfan.roky.5" target='_blank'  rel="noreferrer">
            <img className='w-12 h-12' src={facebook} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/arfan-roky-46a5b023a/" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={linkedin} alt="" />
                </a>
                <a href="https://twitter.com/ArfanRoky" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={twitter} alt="" />
                </a>
                <a href="https://www.instagram.com/arfan.roky/?hl=en" target='_blank'  rel="noreferrer">
                    <img className='w-12 h-12' src={instagram} alt="" />
                </a>
        </ul>
    </div>
    </div>
  );
};

export default Contact;
