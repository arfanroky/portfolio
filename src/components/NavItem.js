import React from 'react';
import { Link } from 'react-router-dom';

const NavItem = () => {
    return (
        <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-white text-black shadow-lg navbar navbar-expand-lg navbar-light">
  <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
    <button
      className="navbar-toggler text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent1"
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
        />
      </svg>
    </button>
    <div>
      <Link className="text-xl text-green-800 font-bold pr-2 " to="/">
        Arfan Roky
      </Link>
    </div>
    <div className="flex items-center relative collapse navbar-collapse"  id="navbarSupportedContent1">
    <ul className="navbar-nav flex flex-col pl-0 list-style-none ">
              <li className="nav-item pr-2">
                <Link
                    className="nav-link text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                className="nav-link text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/about"
                >
                  about
                </Link>
              </li>
              
              <li className="nav-item pr-2">
                <Link
                  className="nav-link text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                    className="nav-link text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/blog"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item pr-2">
                <Link
                    className="nav-link text-black opacity-60 hover:opacity-80 focus:opacity-80 p-0"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
    </div>
  </div>
</nav>

    );
};

export default NavItem;