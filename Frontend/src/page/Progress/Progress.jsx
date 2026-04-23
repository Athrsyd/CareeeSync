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
  const { careerData } = useCareer();
  const [skillsBasic, setSkillsBasic] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsIntermediate, setSkillsIntermediate] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsAdvanced, setSkillsAdvanced] = useState([]); //ini state buat nyimpen skill yang diambil dari careerData, 
  const [skillsMastery, setSkillsMastery] = useState([]); //ini state buat nyimpen skill yang dikuasai dari careerData

  const getSkillbyCareerName = () => {
    if (!careerData) return;
    const careerName = careerData.career_name

    const skilll = CareerOptions.careers.find(career => career.name === careerName)
    console.log("skill untuk", careerName, 'adalah', skilll.skills)

    const skillsBasic = skilll.skills.filter(skill => skill.level === 'basic');
    const skillsIntermediate = skilll.skills.filter(skill => skill.level === 'intermediate');
    const skillsAdvanced = skilll.skills.filter(skill => skill.level === 'advanced');
    setSkillsBasic(skillsBasic);
    setSkillsIntermediate(skillsIntermediate);
    setSkillsAdvanced(skillsAdvanced);
  }

  const getMasteredSkillFromBackend = () => {
    if (!careerData) return;

    const skillsMastery = careerData.skillsMastery || [];
    console.log("skill yang dikuasai untuk", careerData.career_name, 'adalah', skillsMastery);
    setSkillsMastery(skillsMastery);
  }

  useEffect(() => {
    getSkillbyCareerName();
    getMasteredSkillFromBackend();
  }, [careerData]);

  // const sortedSkills = skills.sort((a, b) => {
  //   const basicSkills = 

  return (
    <main className="ml-40 overflow-x-hidden pb-5">
      <Navbar />
      <div className="flex flex-col mt-8 ml-13">
        <TitleProgress />
      </div>
      <div className="flex flex-col mt-8 ml-13">
        <ProgressSkill 
          skillsBasic={skillsBasic}
          skillsIntermediate={skillsIntermediate}
          skillsAdvanced={skillsAdvanced}
          skillsMastery={skillsMastery}  
        />
      </div>
    </main>
  );
}

export default Progress
