import React from 'react'

const SkillItem = [
  {
  id: 1,
  skill: "",
  level: "",
  progress: "",
},
]

const Skill = () => {
  return (
    <>
      <div className=" self-start flex flex-row mt-5 gap-8">
        <div className="flex flex-col gap-2 bg-white/20 w-86 h-40 rounded-xl backdrop-blur-2xl shadow-2xl"></div>
        <div className="flex flex-col gap-2 bg-white/20 w-86 h-40 rounded-xl backdrop-blur-2xl shadow-2xl"></div>
      </div>
    </>
  );
}

const SkillDash = () => {
  return (
    <>
      <h1 className="self-start text-2xl font-bold font-montserrat text-[#021124]">
        Your Skills
      </h1>
      <div className="flex flex-row max-w-full items-center gap-8">
        <Skill />
        <div className="flex flex-col justify-center items-center gap-2 mt-5 ml-8">
          <h1 className="text-3xl font-semibold font-montserrat text-[#021124]">
            You are at the
          </h1>
          <h1 className="text-3xl font-semibold font-montserrat bg-primary px-4 py-1 rounded-lg text-white">
            Expert Level
          </h1>
          <p className="text-lg font-[450] font-montserrat text-[#021124]">
            Level Up Your Skills
          </p>
        </div>
      </div>
    </>
  );
}

export default SkillDash
