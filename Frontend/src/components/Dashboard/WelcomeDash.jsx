import React from 'react'
import { useEffect, useRef } from "react";
import Bintang from "../../assets/Bintang.svg"
import { useCareer } from '../../context/CareerContext';
import JobReadinessScore from '../Global/JobReadinessScore';
const CIRCUMFERENCE = 2 * Math.PI * 54;



const WelcomeDash = ({user, data}) => {
  const { readiness,  } = useCareer();


  return (
    <>
      <div className="flex md:flex-col lg:flex-row gap-8">
        <div className="relative md:w-160 lg:w-180 md:h-60 lg:h-60 rounded-2xl shadow-xl backdrop-blur-md flex flex-col px-10 bg-primary">
          <div className="flex flex-col items-start justify-center  mt-10">
            <h1 className="text-4xl font-bold text-white font-poppins leading-10">
              Hello, {user?.username || 'Guest'}!
            </h1>
            <h2 className="text-xl font-[450] text-white font-poppins">
              Your career as a {data?.career_name || 'No career selected'} starts here.
            </h2>
            <p className="text-md text-white/80 font-poppins w-[75%] mt-2">
              Track your progress, improve your skills, and get closer to
              becoming a professional
            </p>
            <a
              href="#"
              className="text-md font-[250] font-montserrat text-white hover:scale-105 transition-all ease-in-out duration-300 bg-black px-7 py-[2.25px] rounded-lg mt-4"
            >
              <button>More</button>
            </a>
          </div>
          <img
            src={Bintang}
            className="absolute right-20 w-65 -translate-y-8 translate-x-8"
          />
        </div>
        <JobReadinessScore score={readiness} role={data?.career_name || 'No career selected'} />
      </div>
    </>
  );
}

export default WelcomeDash
