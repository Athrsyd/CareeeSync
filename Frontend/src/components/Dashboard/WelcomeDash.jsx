import React from 'react'
import { useEffect, useRef } from "react";
import Bintang from "../../assets/Bintang.svg"

const CIRCUMFERENCE = 2 * Math.PI * 54;

const JobReadinessScore = ({ score = 78, role = "Web Developer" }) => {
  const arcRef = useRef(null);
  useEffect(() => {
    if (arcRef.current) {
      const offset = CIRCUMFERENCE * (1 - score / 100);
      arcRef.current.style.transition = "stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1)";
      arcRef.current.style.strokeDashoffset = offset;
    }
  }, [score]);
  const topPercent = Math.max(1, 100 - score);
  
  return (
    <div className="bg-white/10 rounded-2xl outline-2 outline-primary shadow-xl backdrop-blur-md p-6 flex flex-col items-center gap-2 w-72 h-60">
      {/* Title */}
      <h2 className="text-base font-[450] text-[#06275A] tracking-tight">
        Job Readiness Score
      </h2>
      {/* Ring inside blue border box */}
      <div className="">
        <svg width="100" height="100" viewBox="0 0 140 140">
          {/* Background track */}
          <circle
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          {/* Progress arc */}
          <circle
            ref={arcRef}
            cx="70"
            cy="70"
            r="54"
            fill="none"
            stroke="#1e3a5f"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - score / 100)}
            transform="rotate(-90 70 70)"
          />
          {/* Score text */}
          <text
            x="70"
            y="78"
            textAnchor="middle"
            fontSize="30"
            fontWeight="500"
            fill="#1e3a5f"
          >
            {score}%
          </text>
        </svg>
      </div>
      {/* Subtitle */}
      <p className="text-md text-[#06275A] w-[90%] text-center leading-relaxed">
        Top <span className="font-semibold text-slate-800">{topPercent}%</span>{" "}
        closer to becoming a{" "}
        <span className="font-semibold text-slate-800">{role}</span>
      </p>
    </div>
  );
}

const WelcomeDash = () => {
  return (
    <>
      <div className="flex flex-row gap-8">
        <div className=" relative w-180 h-60 rounded-2xl shadow-xl backdrop-blur-md flex flex-col px-10 bg-primary">
          <div className="flex flex-col items-start justify-center w-[70%] mt-10">
            <h1 className="text-4xl font-bold text-white font-poppins leading-10">
              Hello, Dipta Pratana!
            </h1>
            <h2 className="text-xl font-[450] text-white font-poppins">
              Your career as a Web Developer starts here.
            </h2>
            <p className="text-md text-white/80 font-poppins w-[90%] mt-2">
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
        <JobReadinessScore score={80} role="Web Developer" />
      </div>
    </>
  );
}

export default WelcomeDash
