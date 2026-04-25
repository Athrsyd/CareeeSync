import React from 'react'

const ProjectDescription = ({project}) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-full">
        <h1 className="text-3xl font-bold font-montserrat text-black tracking-tight leading-3">
          Instruksi Pengerjaan
        </h1>
        <p className="text-lg mt-2 font-montserrat w-93/100 text-justify indent-4  text-black/50 leading-6 font-medium">
          {project?.instruction || null}
        </p>
      </div>
    </>
  );
}

export default ProjectDescription
