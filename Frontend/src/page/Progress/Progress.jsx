/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext'
import { useCareer } from '../../context/CareerContext';
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import TitleProgress from '../../components/Progress/TitleProgress';
import ProgressSkill from '../../components/Progress/ProgressSkill';
import Navbar from '../../components/Global/Navbar';
import CareerOptions from '../../data/careerOptions.json'

const Progress = () => {
  const { user } = useUser();
  const { careerData,skillsMastery } = useCareer();
  const [skillsBasic, setSkillsBasic] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsIntermediate, setSkillsIntermediate] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsAdvanced, setSkillsAdvanced] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsMasteryProgress, setSkillsMastery] = useState([]); //ini state buat nyimpen skill yang dikuasai dari careerData,
  
  const getSkillbyCareerName = () => {
    if (!careerData) return;
    const careerName = careerData.career_name

    const skill = CareerOptions.careers.find(career => career.name === careerName)
    console.log("skill untuk", careerName, 'adalah', skill.skills)

    const skillsBasic = skill.skills.filter(skill => skill.level === 'basic');
    const skillsIntermediate = skill.skills.filter(skill => skill.level === 'intermediate');
    const skillsAdvanced = skill.skills.filter(skill => skill.level === 'advanced');
    setSkillsBasic(skillsBasic);
    setSkillsIntermediate(skillsIntermediate);
    setSkillsAdvanced(skillsAdvanced);
  }

  const getMasteredSkillFromBackend = () => {
    if (!careerData) return;

    const skill = CareerOptions.careers.find(career => career.name === careerData.career_name)
    const skillsMasteryProgress = skill.skills.filter(s => skillsMastery.some(sm => sm.skill_id === s.id && sm.mastered));
    console.log("skill yang dikuasai untuk", careerData.career_name, 'adalah', skillsMasteryProgress);
    setSkillsMastery(skillsMasteryProgress);
  }

  useEffect(() => {
    getSkillbyCareerName();
    getMasteredSkillFromBackend();
  }, [careerData]);

  // const sortedSkills = skills.sort((a, b) => {
  //   const basicSkills = 

  return (
    <main className="md:ml-20 lg:ml-48 overflow-x-hidden pb-5">
      <Navbar />
      <div className="flex flex-col mt-8 ml-13">
        <TitleProgress />
      </div>
      <div className="flex flex-col mt-10 ml-13">
        <ProgressSkill
          skillsBasic={skillsBasic}
          skillsIntermediate={skillsIntermediate}
          skillsAdvanced={skillsAdvanced}
          skillsMastery={skillsMasteryProgress}
        />
      </div>
    </main>
  );
}

export default Progress
