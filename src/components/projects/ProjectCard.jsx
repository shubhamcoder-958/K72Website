import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex w-full h-full gap-4">
   
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt="Project 1"
        />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-inter border-4 pt-4 px-4 text-white border-white rounded-full">
            View Project
          </h2>
        </div>
      </div>

     
      <div className="lg:w-1/2 group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt="Project 2"
        />
        <div className="opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10">
          <h2 className="uppercase text-6xl font-inter border-4 pt-4 px-4 text-white border-white rounded-full">
            View Project
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
