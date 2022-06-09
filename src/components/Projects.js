import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="min-h-screen md:mt-0 md:mb-0 mt-40 mb-12">
      <p
        className="font-thin text-6xl my-12 text-center uppercase"
        style={{ letterSpacing: '6px' }}
      >
        Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center py-12">

        <div className="w-[580px] pb-12 rounded-2xl shadow-2xl mb-12">
          <div className="scrolling-image help-bari"></div>

          <div className="ml-3">
            <p
              className=" font-thin capitalize text-lg
            py-4 pl-5"
              style={{ letterSpacing: '6px' }}
            >
              Help Bari
            </p>
            <p>Tools & Parts Manufacturer</p>
            <ul>
                <li className='pt-2'>__Multiplied Pages included and
            User-friendly Designed </li>
            <li className='pt-1'>__Created and managed product order option
            and payment also, it can be deleted by admin</li>
            <li className='pt-1'>__Ensured the order is
            completed and get a success message. After login by authenticated
            get different roles for the user & admin</li>
            </ul>
            <p className='py-3'><span className=" font-thin capitalize text-md
            py-4 "
              style={{ letterSpacing: '6px' }}> Technology Used :</span>  for
            Front-End React, E6, Tailwind, daisy-UI, React-Query, React-Router,
            JWT, Firebase-hooks, React-hook-form, and for Backend Express Js,
            MongoDB Database.
            </p>
            <br />
            <a
              className="py-4 px-12 border  hover:bg-black hover:text-white transition rounded font-thin text-xl mt-12"
              style={{ letterSpacing: '6px' }}
              href="https://car-manufacturer.web.app/"
            >
              Watch
            </a>
          </div>
        </div>

        <div className="w-[580px] pb-12 rounded-2xl shadow-2xl mb-12">
          <div className="scrolling-image perfume-stores"></div>

        
          <div className="ml-3">
            <p
              className=" font-thin capitalize text-lg
            py-4 pl-5"
              style={{ letterSpacing: '6px' }}
            >
            Perfume Stores
            </p>
            <p>Warehouse Management</p>
            <ul>
                <li className='pt-2'>__ Stored product Procedures and managed products.</li>
            <li className='pt-1'>__Built responsive, and dynamic web pages to enable all users can navigate the site.</li>

            <li className='pt-1'>__Users can Add New products, Deliver products, Delete, and can see their added products.</li>
            </ul>

            <p className='py-3'><span className=" font-thin capitalize text-md
            py-4 "
              style={{ letterSpacing: '6px' }}> Technology Used :</span>  for Front-End React, E6, Tailwind, Tw-elements, React-Router, JWT,
              Firebase-hooks, and for Backend Express Js, MongoDB Database.
            </p>
            <br />
            <a
            target='_blank' rel="noreferrer"
              className="py-4 px-12 border  hover:bg-black hover:text-white transition rounded font-thin text-xl mt-12"
              style={{ letterSpacing: '6px' }}
              href="https://car-manufacturer.web.app/"
            >
              Watch
            </a>
          </div>
        </div>

        <div className="w-[580px] pb-12 rounded-2xl shadow-2xl mb-12">
          <div className="scrolling-image immigration"></div>

         
          <div className="ml-3">
            <p
              className=" font-thin capitalize text-lg
            py-4 pl-5"
              style={{ letterSpacing: '6px' }}
            >
           Immigration Site
            </p>
            <p>Visa Consultation</p>
            <ul>

                <li className='pt-2'>__ Produced User Interface Immigration Static Website.</li>
            <li className='pt-1'>__ On the checkout page, user can be booked their own visa.</li>

            <li className='pt-1'>__Mainted a few courses & Provided visa services.</li>
            </ul>

            <p className='py-3'><span className=" font-thin capitalize text-md
            py-4 "
              style={{ letterSpacing: '6px' }}> Technology Used :</span> for Front-End React, E6, React-Bootstrap. Firebase-hooks, React-route
            </p>
            <br />
            <a
            target='_blank' rel="noreferrer"
              className="py-4 px-12 border  hover:bg-black hover:text-white transition rounded font-thin text-xl mt-12"
              style={{ letterSpacing: '6px' }}
              href="https://car-manufacturer.web.app/"
            >
              Watch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
