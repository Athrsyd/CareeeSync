import React, { use } from 'react'

const TitleProject = ({ career, project }) => {
  // const {projectTitle} = useProjectTitle();  ;
  return (
    <>
      <div className="flex flex-row items-center gap-4 w-full justify-center">
        <div className="flex flex-col w-4/5">
          <h1 className="text-3xl font-bold text-black font-montserrat leading-12">
            {project?.title || null}
          </h1>
          <h2 className="md:text-xs lg:text-sm font-[450] text-black/50 font-montserrat">
            {project?.description || null}
          </h2>
        </div>
        <div className="w-1/5">
          <h1 className="text-center font-montserrat font-semibold text-[#06275A] bg-nav px-4 py-2 rounded-full md:text-[10px] lg:text-sm ml-auto">
            {career?.career_name || null}
          </h1>
        </div>
      </div>
    </>
  );
}

export default TitleProject
