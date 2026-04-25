import React from 'react'

const ProjectDescription = ({project}) => {
  return (
    <>
      <div className="flex flex-col gap-4 md:w-[90%] lg:w-[80%]">
        <h1 className="text-2xl font-semibold font-montserrat text-black tracking-tight leading-3">
          Instruksi Pengerjaan
        </h1>
        <p className="text-md font-montserrat md:w-[90%] lg:w-[70%] text-black/50 leading-5">
          {project?.instruction || null}
        </p>
      </div>
    </>
  );
}

export default ProjectDescription
