import React from 'react'
import { useCareer } from '../../context/CareerContext';

const TitleProgress = () => {
  const {careerData} = useCareer();
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl font-montserrat text-black leading-10">Your Skill Journey</h1>
        <h2 className="text-xl font-[450] font-montserrat text-black/50">
          Towards Becoming a{" "}
          <span>{careerData?.career_name || "no career selected"}</span>
        </h2>
        <p className="text-md font-montserrat font-[450] text-black/50 mt-5">Track your learning progress and see how far you’ve come</p>
      </div>
    </>
  );
}

export default TitleProgress
