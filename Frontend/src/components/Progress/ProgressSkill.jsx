import React, { useState } from 'react'
import { useCareer } from '../../context/CareerContext';

const ProgressSkillItemBasic = ({ skillsBasic, skillsMastery }) => {
  return (
    <>
      {skillsBasic?.map((skill) => {
        const isComplated = skillsMastery.some(
          (mastery) => mastery.skill_id === skill_id,
        );
        return (
          <div
            key={skill.name}
            className="flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary"
          >
            <div className="flex flex-col w-[87%] mt-5 gap-2">
              <h1 className="font-bold text-lg font-montserrat text-black">
                {skill.name}
              </h1>
              <p className="text-sm font-montserrat font-[450] text-black/50">
                {skill.description}
              </p>
            </div>
            <div
              className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-30 " : "text-red-950 bg-red-400 w-28"}
            `}
            >
              <h1 className="font-montserrat font-[550] text-[10px] w-full">
                {isComplated ? "Complated" : "Not Complated"}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ProgressSkillItemIntermediate = ({ skillsIntermediate, skillsMastery }) => {
  return (
    <>
      {skillsIntermediate?.map((skill) => {
        const isComplated = skillsMastery.some(
          (mastery) => mastery.skill_id === skill_id,
        );
        return (
          <div
            key={skill.name}
            className="flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary"
          >
            <div className="flex flex-col w-[87%] mt-5 gap-2">
              <h1 className="font-bold text-lg font-montserrat text-black">
                {skill.name}
              </h1>
              <p className="text-sm font-montserrat font-[450] text-black/50">
                {skill.description}
              </p>
            </div>
            <div
              className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-30 " : "text-red-950 bg-red-400 w-28"}
            `}
            >
              <h1 className="font-montserrat font-[550] text-[10px] w-full">
                {isComplated ? "Complated" : "Not Complated"}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
};

const ProgressSkillItemAdvance = ({ skillsAdvance, skillsMastery }) => {
  return (
    <>
      {skillsAdvance?.map((skill) => {
        const isComplated = skillsMastery.some(mastery => mastery.skill_id === skill_id);
      return (
        <div
          key={skill.name}
          className="flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary"
        >
          <div className="flex flex-col w-[87%] mt-5 gap-2">
            <h1 className="font-bold text-lg font-montserrat text-black">
              {skill.name}
            </h1>
            <p className="text-sm font-montserrat font-[450] text-black/50">
              {skill.description}
            </p>
          </div>
          <div
            className={`flex rounded-4xl h-6 px-2 py-1 ${isComplated ? "text-[#51B673] bg-[#DEF2E5] w-30 " : "text-red-950 bg-red-400 w-28"}
            `}
          >
            <h1 className="font-montserrat font-[550] text-[10px] w-full">
              {isComplated ? "Complated" : "Not Complated"}
            </h1>
          </div>
        </div>
      );})}
    </>
  );
};


const ProgressSkill = ({ skillsBasic, skillsIntermediate, skillsAdvanced, skillsMastery }) => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-row flex-wrap gap-2 pr-2">
          <ProgressSkillItemBasic skillsBasic={skillsBasic} skillsMastery={skillsMastery} />
        </div>
        <div className="flex flex-row flex-wrap gap-2 pr-2">
          <ProgressSkillItemIntermediate
            skillsIntermediate={skillsIntermediate} skillsMastery={skillsMastery}
          />
        </div>
        <div className="flex flex-row flex-wrap gap-2 pr-2">
          <ProgressSkillItemAdvance skillsAdvance={skillsAdvanced} skillsMastery={skillsMastery} />
        </div>
      </div>
    </>
  );
}
export default ProgressSkill;
