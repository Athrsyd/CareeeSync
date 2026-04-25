
import { useState, useEffect, use } from 'react'
import { useUser } from '../../context/UserContext';
import { useCareer } from '../../context/CareerContext';
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import TitleProject from '../../components/Project/TitleProject';
import LevelAndTools from '../../components/Project/LevelAndTools';
import ProjectDescription from '../../components/Project/ProjectDescription';
import OutputProjects from '../../components/Project/OutputProjects';
import Navbar from '../../components/Global/Navbar';
import { useCurrentProject } from '../../context/CurrentProjectContext';
import ProjectsData from '../../data/projectsComplete.json'

const Project = () => {
  const { User } = useUser();
  const { careerData, skillsMastery } = useCareer();
  const { currentProject, setCurrentProject } = useCurrentProject();

  return (
    <>
      <main className="md:ml-20 lg:ml-40 overflow-x-hidden pb-5">
        <Navbar />
        <div className="flex flex-col mt-8 lg:ml-13 md:ml-15 md:pr-4 lg:pr-0 w-[90%]">
          <TitleProject
            career={careerData}
            project={currentProject}
          />
        </div>
        <div className="flex flex-col mt-10 md:ml-8 lg:ml-13">
          <LevelAndTools 
            project={currentProject}
          />
        </div>
        <div className="flex flex-col mt-12 lg:ml-13 md:ml-15">
          <ProjectDescription
            project={currentProject}
          />
        </div>
        <div className="flex flex-col mt-10 md:ml-15 lg:ml-13">
          <OutputProjects
            project={currentProject}
          />
        </div>
      </main>
    </>
  );
}

export default Project
