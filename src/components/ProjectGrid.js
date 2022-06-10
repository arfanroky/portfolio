import React from 'react';
import { Link } from 'react-router-dom';

const ProjectGrid = ({ project }) => {
  const { name, id, title } = project;

  return (
    <div className="flex justify-center ">
      <div className="block p-6 rounded-lg shadow-2xl max-w-sm w-[550px]">
        <h5 className="text-white text-xl leading-tight font-medium mb-2">
          {name}
        </h5>
        <p className="text-gray-700 text-base my-4">{title}</p>
        <Link className=' py-4 px-8 bg-green-500' to={`/details/${id}`}>details</Link>
      </div>
    </div>
  );
};

export default ProjectGrid;
