import { use, useEffect, useState } from 'react'
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
import ProjectHook from '../../hooks/ProjectHook';


const Project = () => {
  const { user } = useUser();
  const { careerData, fetchCareer, projects, skillsMastery, unFinishedProjects } = useCareer();
  const { currentProject } = useCurrentProject();
  const [showModal, setShowModal] = useState(false);
  const { updateMasterySkill } = CareerHooks();
  const [currentSkillState, setCurrentSkill] = useState(null);
  const { postProject } = ProjectHook();


  const handleSubmitProject = async () => {
    if (!careerData?.id || !currentProject?.skill_id) return;

    const selectedCareer = careerOptions.careers.find(
      c => c.name === careerData?.career_name
    );
    const selectedSkill = selectedCareer?.skills.find(
      s => s.id === currentProject.skill_id
    );


    let updatedSkillsMastery = (careerData.skills_mastery || []).map((skill) => {
      if (skill.skill_id === currentProject.skill_id) {
        return { ...skill, mastered: true };
      }
      return skill;
    });

    
    if (!updatedSkillsMastery.find(s => s.skill_id === currentProject.skill_id)) {
      updatedSkillsMastery.push({
        skill_id: currentProject.skill_id,
        mastered: true,
        weight: selectedSkill?.weight || 0
      });
    }

    console.log('Updated Skills:', updatedSkillsMastery);

    const payload = {
      skills_mastery: updatedSkillsMastery,
      level: careerData.level || 'basic',
    };

    const payloadProject = {
      project_title: currentProject.title,
      project_description: currentProject.description,
      project_output: currentProject.output,
      tools_used: currentProject.tools,
    };

    await updateMasterySkill(careerData.id, payload);
    await postProject(payloadProject);
    await fetchCareer();
    setShowModal(false);

    setTimeout(() => {
      window.location.reload(); 
    }, 3000);
  };
  




  return (
    <main className="md:ml-20 lg:ml-40 overflow-x-hidden pb-10">
      <Navbar />

      {unFinishedProjects && unFinishedProjects.length > 0 ? (
        <>
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
        </>
      ): (
                <section className="min-h-screen flex items-center justify-center px-5 md:px-10">
          <div className="text-center max-w-2xl">
            {/* Achievement Badge */}
            <div className="flex justify-center mb-8">
              <div className="relative w-32 h-32">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-yellow-300 to-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <div className="text-6xl">🏆</div>
                </div>
              </div>
            </div>

            {/* Congratulation Text */}
            <h1 className="text-5xl font-bold text-[#021124] mb-4">
              Luar Biasa! 🎉
            </h1>
            <p className="text-2xl text-primary font-semibold mb-6">
              Anda telah menguasai semua skill {careerData?.career_name}!
            </p>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-blue-50 rounded-2xl p-6 border-2 border-primary">
                <p className="text-3xl font-bold text-primary mb-2">
                  {projects?.length || 0}
                </p>
                <p className="text-gray-600 font-semibold text-sm">Project Diselesaikan</p>
              </div>
              <div className="bg-green-50 rounded-2xl p-6 border-2 border-green-500">
                <p className="text-3xl font-bold text-green-600 mb-2">
                  {skillsMastery?.filter(s => s.mastered)?.length || 0}
                </p>
                <p className="text-gray-600 font-semibold text-sm">Skill Dikuasai</p>
              </div>
              <div className="bg-purple-50 rounded-2xl p-6 border-2 border-purple-500">
                <p className="text-3xl font-bold text-purple-600 mb-2">
                  {careerData?.level || 'N/A'}
                </p>
                <p className="text-gray-600 font-semibold text-sm">Level Saat Ini</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Perjalanan Anda sebagai {careerData?.career_name} sudah mencapai milestone yang mengesankan. 
              Semua project telah diselesaikan dengan sempurna dan skill telah terasah dengan baik!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/dashboard'}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-[#4a6fa5] transition-all shadow-lg hover:shadow-xl"
              >
                Kembali ke Dashboard
              </button>
              <button
                onClick={() => window.location.href = '/dashboard/progress'}
                className="px-8 py-4 bg-white border-2 border-primary text-primary font-bold rounded-xl hover:bg-blue-50 transition-all"
              >
                Lihat Progress Lengkap
              </button>
            </div>

            {/* Celebration Animation */}
            <div className="mt-12 flex justify-center gap-8">
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>⭐</div>
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>✨</div>
              <div className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>🌟</div>
            </div>
          </div>
        </section>)}
    </main>
  );
}

export default Project
