import React from 'react'
import { useCareer } from '../../context/CareerContext';



const ProgressSkillItem = () => {
  const {career} = useCareer();

  return (
    <>
      <div className="flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary">
        <div className="flex flex-col pt-4 gap-2">
          <h1 className="font-bold text-2xl font-montserrat text-black">
            {/* {skillsMastery[0]?.skills || 'Unknown Skill'} */}
          </h1>
          <p className="text-md font-montserrat font-[450] text-black/50">
            Learn the structure Learn the structure of web pages with HTML.
          </p>
        </div>
        <h1 className="font-montserrat font-[550] text-[12px] text-[#51B673] bg-[#DEF2E5] h-7 px-2 py-1 rounded-2xl ">
          complated
        </h1>
      </div>

      <div className="ml-auto flex flex-row w-90 h-40 rounded-2xl bg-white outline-2 px-4 py-2 outline-primary">
        <div className="flex flex-col pt-4 gap-2">
          <h1 className="font-bold text-2xl font-montserrat text-black">
            HTML
          </h1>
          <p className="text-md font-montserrat font-[450] text-black/50">
            Learn the structure Learn the structure of web pages with HTML.
          </p>
        </div>
        <h1 className="font-montserrat font-[550] text-[12px] text-[#51B673] bg-[#DEF2E5] h-7 px-2 py-1 rounded-2xl ">
          complated
        </h1>
      </div>
    </>
  );
  }


const ProgressSkill = ({ skillsBasic, skillsIntermediate, skillsAdvanced, skillsMastery }) => {
  return (
    <>
      <div className="flex flex-row gap-2 pr-2">
        <ProgressSkillItem />
      </div>
    </>
  );
}
export default ProgressSkill;
