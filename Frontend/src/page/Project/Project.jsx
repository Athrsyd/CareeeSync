import { useEffect, useState } from 'react'
import { useUser } from '../../context/UserContext';
import { useCareer } from '../../context/CareerContext';
import TitleProject from '../../components/Project/TitleProject';
import LevelAndTools from '../../components/Project/LevelAndTools';
import ProjectDescription from '../../components/Project/ProjectDescription';
import OutputProjects from '../../components/Project/OutputProjects';
import Navbar from '../../components/Global/Navbar';
import { useCurrentProject } from '../../context/CurrentProjectContext';
import Popup from '../../components/Project/Popup';
import CareerHooks from '../../hooks/CareerHooks';
import careerOptions from '../../data/careerOptions.json'


const Project = () => {
  const { user } = useUser();
  const { careerData, fetchCareer, projects } = useCareer();
  const { currentProject } = useCurrentProject();
  const [showModal, setShowModal] = useState(false);
  const { updateMasterySkill } = CareerHooks();
  const [currentSkillState, setCurrentSkill] = useState(null);


  const handleSubmitProject = async () => {
    if (!careerData?.id || !currentProject?.skill_id) return;

    const updatedSkillsMastery = (careerData.skills_mastery || []).map((skill) => {
      if (skill.skill_id === currentProject.skill_id) {
        return { ...skill, mastered: true };
      }
      return skill;
    });

    const payload = {
      skills_mastery: updatedSkillsMastery,
      level: careerData.level || 'basic',
    };

    await updateMasterySkill(careerData.id, payload);
    await fetchCareer();
    setShowModal(false);
  };




  return (
    <main className="md:ml-20 lg:ml-40 overflow-x-hidden pb-10">
      <Navbar />

      <section className="mt-8 px-5 md:px-10">
        <TitleProject
          career={careerData}
          project={currentProject}
        />
      </section>

      <section className="mt-8 px-5 md:px-10">
        <LevelAndTools
          project={currentProject}
        />
      </section>

      <section className="mt-12 px-5 md:px-10">
        <ProjectDescription
          project={currentProject}
        />
      </section>

      <section className="mt-12 px-5 md:px-10">
        <OutputProjects
          project={currentProject}
        />
      </section>

      <section className="mt-16 px-5 md:px-10 pb-10">
        <div className="flex gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Selesaikan Project
          </button>
        </div>
      </section>

      {showModal && (
        <Popup
          currentProject={currentProject}
          setShowModal={setShowModal}
          handleSubmitProject={handleSubmitProject}
        />
      )}
    </main>
  );
}

export default Project
