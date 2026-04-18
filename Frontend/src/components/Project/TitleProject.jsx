import React from 'react'

const TitleProject = () => {
  return (
    <>
      <div className="flex flex-row items-center gap-4">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-black font-montserrat leading-12">
            Health Tracker App Project
          </h1>
          <h2 className="text-lg font-[450] text-black/50 font-montserrat">
            Build a real-world application to track user health and activity
          </h2>
        </div>
        <h1 className="text-center font-montserrat font-semibold text-[#06275A] bg-nav px-4 py-2 rounded-full text-sm ml-auto">
          Web Development
        </h1>
      </div>
    </>
  );
}

export default TitleProject
