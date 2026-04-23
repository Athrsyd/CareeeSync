import React from 'react'

const ProjectDescription = () => {
  return (
    <>
      <div className="flex flex-col gap-4 md:w-[90%] lg:w-[80%]">
        <h1 className="text-2xl font-semibold font-montserrat text-black tracking-tight leading-3">
          Project Description
        </h1>
        <p className="text-md font-montserrat md:w-[90%] lg:w-[70%] text-black/50 leading-5">
          Build a responsive health tracking application that allows users to
          monitor daily activities, track fitness goals, and visualize progress
          through interactive dashboards.
        </p>
      </div>
    </>
  );
}

export default ProjectDescription
