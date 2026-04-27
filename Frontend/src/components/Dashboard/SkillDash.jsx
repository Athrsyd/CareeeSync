import React from 'react'
import SkillDisplay from './SkillDisplay';
import { useCareer } from '../../context/CareerContext';
import CareerOptions from '../../data/careerOptions.json'
import { Link } from 'react-router-dom';


const Skill = () => {
  const { skillsMastery } = useCareer();

  const skillsLookup = {};
  CareerOptions.careers.forEach((career) => {
    career.skills.forEach((skill) => {
      skillsLookup[skill.id] = skill;
    });
  });

  const SkillItem = skillsMastery.map((skill) => {
    const skillData = skillsLookup[skill.skill_id];
    return {
      id: skill.skill_id,
      name: skillData?.name || 'Unknown Skill',
      description: skillData?.description || '',
      level: skillData?.level || 'basic',
    };
  });

  return (
    <>
      <div className="overflow-x-scroll self-start w-13/20 flex flex-row mt-5 gap-8">
        {SkillItem.map((item) => (
          <SkillDisplay key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

const SkillDash = ({ data }) => {
  const { skillsMastery } = useCareer();

  return (
    <>
      <h1 className="self-start text-2xl font-bold font-montserrat text-[#021124]">
        Your Skills
      </h1>
      <div className="flex flex-row max-w-full items-center gap-8">
        {skillsMastery && skillsMastery.length > 0 ? (
          <Skill />
        ) : (
          <div className="overflow-x-scroll self-start w-13/20 flex flex-col justify-center items-center my-10 gap-2">
            <p className="text-gray-500">Belum ada skill yang dikuasai.</p>
            <Link to='/dashboard/project'>
              <button className="px-2 py-1 bg-blue-500 text-sm text-white rounded-lg hover:bg-blue-600">
                Selesaikan project untuk menguasai skill!
              </button>
            </Link>
          </div>
        )}
        <div className="flex flex-col w-1/4 justify-center items-center gap-2 mt-5 ml-8 md:mr-4 lg:mr-0">
          <h1 className="md:text-[22px] lg:text-3xl font-semibold font-montserrat text-[#021124]">
            You are at the
          </h1>
          <h1 className="md:text-[22px] lg:text-2xl font-semibold font-montserrat bg-primary px-4 py-1 rounded-lg text-white">
            {data?.level || 'N/A'} level
          </h1>
          <p className="md:text-md lg:text-lg font-[450] font-montserrat text-[#021124]">
            Level Up Your Skills
          </p>
        </div>
      </div>
    </>
  );
}

export default SkillDash
