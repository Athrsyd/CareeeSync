import React from 'react'
import { useUser } from '../../context/UserContext';
import { useCareer } from '../../context/CareerContext';
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import TitleProject from '../../components/Project/TitleProject';
import LevelAndTools from '../../components/Project/LevelAndTools';
import ProjectDescription from '../../components/Project/ProjectDescription';
import OutputProjects from '../../components/Project/OutputProjects';
import Navbar from '../../components/Global/Navbar';

const Project = () => {

  const {User} = useUser();
  const {careerData} = useCareer();

  return (
    <>
      <main className="ml-40 overflow-x-hidden pb-5">
        <Navbar />
        <div className="flex flex-col mt-8 ml-13 w-[90%]">
          {/* <Title Project /> */}
          <TitleProject />
        </div>
        <div className="flex flex-col mt-10 ml-13">
          {/* <Level And Tools /> */}
          <LevelAndTools />
        </div>
        <div className="flex flex-col mt-12 ml-13">
          {/* <Description /> */}
          <ProjectDescription />
        </div>
        <div className="flex flex-col mt-10 ml-13">
          {/* <Description /> */}
          <OutputProjects />
        </div>
      </main>
    </>
  );
}

export default Project
