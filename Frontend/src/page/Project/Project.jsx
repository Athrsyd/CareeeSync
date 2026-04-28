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
import {Link} from 'react-router-dom';


const Project = () => {
  const { user } = useUser();
  const { careerData, fetchCareer, projects, skillsMastery, unFinishedProjects } = useCareer();
  const { currentProject } = useCurrentProject();
  const [showModal, setShowModal] = useState(false);
  const { updateMasterySkill } = CareerHooks();
  const [currentSkillState, setCurrentSkill] = useState(null);
  const { postProject, loading } = ProjectHook();


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

    // Scroll to top immediately
    window.scrollTo({ top: 0, behavior: 'smooth' });
    document.documentElement.scrollTop = 0;

    await updateMasterySkill(careerData.id, payload);
    await postProject(payloadProject);
    await fetchCareer();
    setShowModal(false);
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
              loading={loading}
            />
          )}
        </>
      ) : (
        <section className="min-h-screen flex items-center justify-center px-5 md:px-10">
          <div className="flex flex-col w-full max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-black font-montserrat mb-4 text-center">
              Luar Biasa! 🎉
            </h1>
            <p className="text-lg md:text-xl text-black/60 font-montserrat mb-8 text-center font-medium">
              Anda telah menguasai semua skill {careerData?.career_name}!
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4 mb-10">
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl outline-2 outline-primary">
                <p className="text-2xl md:text-3xl font-bold text-primary font-montserrat mb-2">
                  {projects?.length || 0}
                </p>
                <p className="text-black/60 font-montserrat font-medium text-sm md:text-base">Project Diselesaikan</p>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl outline-2 outline-primary">
                <p className="text-2xl md:text-3xl font-bold text-primary font-montserrat mb-2">
                  {skillsMastery?.filter(s => s.mastered)?.length || 0}
                </p>
                <p className="text-black/60 font-montserrat font-medium text-sm md:text-base">Skill Dikuasai</p>
              </div>
              <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl outline-2 outline-primary">
                <p className="text-2xl md:text-3xl font-bold text-primary font-montserrat mb-2">
                  {careerData?.level || 'N/A'}
                </p>
                <p className="text-black/60 font-montserrat font-medium text-sm md:text-base">Level Saat Ini</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-black/60 font-montserrat mb-8 leading-relaxed text-center font-medium">
              Perjalanan Anda menuju {careerData?.career_name} sudah mencapai pencapaian yang mengesankan.
              Semua project telah diselesaikan dengan sempurna dan skill telah terasah dengan baik! <br />
              <strong>Anda siap untuk masuk ke dunia industri</strong>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={'/dashboard'}>
                <button
                className="px-8 py-3 md:py-4 bg-white border-2 border-primary text-primary font-semibold font-montserrat rounded-xl hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
                >
                  Kembali ke Dashboard
                </button>
              </Link>

              <Link to={'/dashboard/portfolio'}>
              <button
                className="px-8 py-3 md:py-4 bg-white border-2 border-primary text-primary font-semibold font-montserrat rounded-xl hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
              >
                Lihat Progress Lengkap
              </button>
              </Link>

              <Link to={'/dashboard/portfolio'}>
              <button
                className="px-8 py-3 md:py-4 bg-white border-2 border-primary text-primary font-semibold font-montserrat rounded-xl hover:bg-primary hover:text-white transition-all duration-200 shadow-lg"
              >
                Buat Portofolio Anda
              </button>
              </Link>
            </div>
          </div>
        </section>)}
    </main>
  );
}

export default Project
