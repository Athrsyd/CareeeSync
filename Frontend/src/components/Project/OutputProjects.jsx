import React from 'react'

const OutputProjects = ({ project }) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <h1 className="md:text-2xl lg:text-3xl font-bold text-black font-montserrat leading-12">
          Output yang diharapkan
        </h1>
        <div className="h-30 w-[95%] rounded-2xl md:mt-2 lg:mt-5 flex flex-row px-4 py-2 bg-white shadow-xl outline-2 outline-primary">
          <p className="font-montserrat text-black font-[450] md:text-lg lg:text-xl"> dari projek ini, menyatakan bahwa anda mampu membuat: <br />
            {project?.output || null}</p>
        </div>
      </div>
    </>
  )
}

export default OutputProjects
