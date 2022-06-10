// import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className={`fixed top-0 left-0 w-full bg-white  z-40  md:h-16 h-auto`} >
      <nav
        className="
relative
w-full
flex flex-wrap
items-center
justify-between
py-4
text-gray-500
hover:text-gray-700
focus:text-gray-700
md:shadow-none
shadow-lg
navbar navbar-expand-lg navbar-light
"
      >
        <div className="container-fluid w-full flex justify-around">
        <div className='w-1/2 pl-6 mt-3'>
          <Link className='text-xl font-semibold uppercase shadow-inner p-1 text-slate-800 hover:text-slate-800' to="/">Arfan Roky</Link>
        </div>

        <div className="md:w-1/2 w-full flex flex-row-reverse flex-wrap items-center justify-between px-6">
          <button
            className="
    navbar-toggler
    text-gray-500
    border-0
    hover:shadow-none hover:no-underline
    py-2
    px-2.5
    bg-transparent
    focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline
  "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="bars"
              className="w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>

          <div
            className="collapse navbar-collapse  items-center ml-auto"
            id="navbarSupportedContent"
          >
            {/* Left links */}
            <ul className="navbar-nav flex flex-col pl-0 list-style-none ">
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item pr-2">
                <a
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  href='#about'
                >
                  About
                </a>
              </li>
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-gray-500 hover:text-gray-700 focus:text-gray-700 p-0"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              {/* <li className="nav-item pr-2">
                <button 
                className='font-thin shadow-xl text-white'
                onClick={randomColor}>
                  Change Color
                </button>
              </li> */}
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
