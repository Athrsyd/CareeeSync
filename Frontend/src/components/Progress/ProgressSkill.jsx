import React, { useState } from 'react'
import { useCareer } from '../../context/CareerContext';
import { Link } from 'react-router-dom';

const ProgressSkillItemBasic = ({ skillsBasic, skillsMastery, curProjectId }) => {
  return (
    <>
      {skillsBasic?.map((skill, index) => {
        const isComplated = skillsMastery.some(
          (mastery) => mastery.id === skill.id,
        );
        const isLeft = index % 2 === 0
        return (
          <div key={skill.id} className="relative w-full flex">
            <div
              className={`
        absolute top-1/2 h-[2.5px] bg-blue-300
        ${isLeft ? "right-[49%] w-31.25 mr-2.25" : "left-[49%] w-25 ml-2.5"}
      `}
            />
            <div
              className={`flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary ${isLeft ? "mr-auto" : "mr-6 ml-auto"}`}
            >
              <div className="flex flex-col w-[87%] mt-5 gap-2">
                <h1 className="font-bold text-lg font-montserrat text-black">
                  {skill.name}
                </h1>
                <p className="text-sm font-montserrat font-[450] text-black/50">
                  {skill.description}
                </p>
                {curProjectId === skill.id && (
                  <Link to="/dashboard/project" className="mb-5">
                    <p className="text-xs font-bold text-blue-500 font-montserrat hover:translate-x-1 transition-transform duration-200">
                      Kerjakan Project -&gt;
                    </p>
                  </Link>
                )}
              </div>
              <div
                className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-20 " : "text-red-950 bg-red-400 w-28"}
            `}
              >
                <h1 className="font-montserrat font-[550] text-[10px] w-full">
                  {isComplated ? "Completed" : "Not Completed"}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ProgressSkillItemIntermediate = ({ skillsIntermediate, skillsMastery, curProjectId }) => {
  return (
    <>
      {skillsIntermediate?.map((skill, index) => {
        const isComplated = skillsMastery.some(
          (mastery) => mastery.id === skill.id,
        );
        const isLeft = index % 2 === 0;
        return (
          <div key={skill.id} className="relative w-full flex">
            <div
              className={`
        absolute top-1/2 h-[2.5px] bg-blue-300
        ${isLeft ? "right-[49%] w-31.25 mr-2.25" : "left-[49%] w-25 ml-2.5"}
      `}
            />
            <div
              className={`flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary ${isLeft ? "mr-auto" : "mr-6 ml-auto"}`}
            >
              <div className="flex flex-col w-[87%] mt-5 gap-2">
                <h1 className="font-bold text-lg font-montserrat text-black">
                  {skill.name}
                </h1>
                <p className="text-sm font-montserrat font-[450] text-black/50">
                  {skill.description}
                </p>
                {curProjectId === skill.id && (
                  <Link to="/dashboard/project" className="mb-5">
                    <p className="text-xs font-bold text-blue-500 font-montserrat hover:translate-x-1 transition-transform duration-200">
                      Kerjakan Project -&gt;
                    </p>
                  </Link>
                )}
              </div>
              <div
                className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-20 " : "text-red-950 bg-red-400 w-28"}
            `}
              >
                <h1 className="font-montserrat font-[550] text-[10px] w-full">
                  {isComplated ? "Completed" : "Not Completed"}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ProgressSkillItemAdvance = ({ skillsAdvance, skillsMastery, curProjectId }) => {
  return (
    <>
      {skillsAdvance?.map((skill, index) => {
        const isComplated = skillsMastery.some(mastery => mastery.id === skill.id);
        const isLeft = index % 2 === 0;
        return (
          <div key={skill.id} className="relative w-full flex">
            <div
              className={`
        absolute top-1/2 h-[2.5px] bg-blue-300
        ${isLeft ? "right-[49%] w-31.25 mr-2.25" : "left-[49%] w-25 ml-2.5"}
      `}
            />
            <div
              className={`flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary ${isLeft ? "mr-auto" : "mr-6 ml-auto"}`}
            >
              <div className="flex flex-col w-[87%] mt-5 gap-2">
                <h1 className="font-bold text-lg font-montserrat text-black">
                  {skill.name}
                </h1>
                <p className="text-sm font-montserrat font-[450] text-black/50">
                  {skill.description}
                </p>
                {curProjectId === skill.id && (
                  <Link to="/dashboard/project" className="mb-5">
                    <p className="text-xs font-bold text-blue-500 font-montserrat hover:translate-x-1 transition-transform duration-200">
                      Kerjakan Project -&gt;
                    </p>
                  </Link>
                )}
              </div>
              <div
                className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-20 " : "text-red-950 bg-red-400 w-28"}
            `}
              >
                <h1 className="font-montserrat font-[550] text-[10px] w-full">
                  {isComplated ? "Completed" : "Not Completed"}
                </h1>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};


const ProgressSkill = ({ skillsBasic, skillsIntermediate, skillsAdvanced, skillsMastery, curProjectId }) => {
  return (
    <>
      <div
        className="
  relative flex flex-col gap-10 items-center
  before:content-['']
  before:absolute
  before:top-0
  before:left-1/2
  before:-translate-x-1/2
  before:w-[3.5px]
  before:h-full
  before:bg-blue-300
"
      >
        <div className="w-full flex flex-col items-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full z-10"></div>
          <div className="z-10 bg-blue-200 px-4 py-1 rounded-full text-sm font-medium">
            Basic
          </div>
        </div>
        <ProgressSkillItemBasic
          skillsBasic={skillsBasic}
          skillsMastery={skillsMastery}
          curProjectId={curProjectId}
        />
        <div className="w-full flex flex-col items-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full z-10"></div>
          <div className="z-10 bg-blue-200 px-4 py-1 rounded-full text-sm font-medium">
            Intermediate
          </div>
        </div>
        <ProgressSkillItemIntermediate
          skillsIntermediate={skillsIntermediate}
          skillsMastery={skillsMastery}
          curProjectId={curProjectId}
        />
        <div className="w-full flex flex-col items-center">
          <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full z-10"></div>
          <div className="z-10 bg-blue-200 px-4 py-1 rounded-full text-sm font-medium">
            Advance
          </div>
        </div>
        <ProgressSkillItemAdvance
          skillsAdvance={skillsAdvanced}
          skillsMastery={skillsMastery}
          curProjectId={curProjectId}
        />
      </div>
    </>
  );
}
export default ProgressSkill;
