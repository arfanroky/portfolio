import React from 'react';
import ProjectGrid from './ProjectGrid';

import './Projects.css';
import ProjectsData from './Projects/ProjectsData';



const Projects = () => {

  return (
    <div className="md:h-[350px]  md:mt-0 md:mb-0 mt-40 mb-12">
      <p
        className="font-normal text-6xl my-12 text-center uppercase text-green-400"
        style={{ letterSpacing: '6px' }}
      >
        Projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center items-center py-12 px-12 gap-5">

       {
         ProjectsData.map((project) => <ProjectGrid
         key={project.id}
         project={project}
         />)
       }
          
      </div>
    </div>
  );
};

export default Projects;
