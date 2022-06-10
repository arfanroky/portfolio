import React from 'react';
import { useParams } from 'react-router-dom';
import ProjectsData from './Projects/ProjectsData';


const ProjectDetails = () => {
  const id = useParams();


  const thisProject = ProjectsData.find((project) => project.id === id?.id);
  console.log('detial',thisProject.img1);
  const {name,  item1, item2, item3, tech, title, img1, img2, img3} = thisProject;
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen py-12 bg-gray-100">
          <div
            id="carouselExampleIndicators"
            className="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={0}
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={1}
                aria-label="Slide 2"
              />
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={2}
                aria-label="Slide 3"
              />
            </div>

            <div className="carousel-inner relative px-12 lg:w-[700px] overflow-hidden h-[450px] mt-12">
              <div className="carousel-item active float-left w-full h-full">
                <img
                  src={img1}
                  className="block w-full h-full"
                  alt="Wild Landscape"
                />
              </div>
              <div className="carousel-item float-left w-full h-full">
                <img src={img2} className="block w-full h-full" alt="Camera" />
              </div>
              <div className="carousel-item float-left w-full h-full">
                <img
                  src={img3}
                  className="block w-full h-full"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            
            <button
              className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Previous</span>
            </button>

            <button
              className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className=" px-12 lg:w-[700px]">
            <p
              className=" font-thin capitalize text-lg
            py-4 "
              style={{ letterSpacing: '6px' }}
            >
              {name}
            </p>
            <p className='font-thin tracking-widest uppercase'>{title}</p>
            <ul className=' mt-12 text-md pr-5' style={{letterSpacing: '1px', lineHeight: '2'}}>
              <li className="pt-2">
                __{item1}
              </li>
              <li className="pt-1">
                __{item2}
              </li>
              <li className="pt-1">
                __{item3}
              </li>
            </ul>
            <p className="py-3 tracking-wide">
              <span
                className=" font-thin capitalize text-md
            py-4 "
                style={{ letterSpacing: '6px' }}
              >
                {' '}
                Technology Used :
              </span>{' '}
            {tech}
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
        {/* <div className="w-[580px] pb-12 rounded-2xl shadow-2xl mb-12">


        </div> */}
      </div>
    </>
  );
};

export default ProjectDetails;
