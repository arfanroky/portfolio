import React from 'react';
import { Link } from 'react-router-dom';

const ProjectGrid = ({ project }) => {
  const { name, id, title } = project;

  return (
    <div className="flex justify-center ">
      <div className="block p-6 rounded-lg shadow-2xl max-w-md md:w-[500px]">
        <h5 className="text-green-500 uppercase tracking-widest font-normal text-xl leading-tight  mb-2">
          {name}
        </h5>
        <p className="text-gray-700 text-base my-4">{title}</p>
        <br />
        <Link className=' py-4 px-8 bg-green-500 rounded text-white' to={`/details/${id}`}>details</Link>
      </div>
    </div>
  );
};

export default ProjectGrid;
