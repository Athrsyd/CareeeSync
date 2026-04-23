import React from 'react'
import { useUser } from '../../context/UserContext'
import { useCareer } from '../../context/CareerContext';
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import { useState } from 'react'
import TitleProgress from '../../components/Progress/TitleProgress';
import ProgressSkill from '../../components/Progress/ProgressSkill';
import Navbar from '../../components/Global/Navbar';
import CareerOptions from '../../data/careerOptions.json'

const Progress = () => {
  const { user } = useUser();
  const { careerData } = useCareer();

  const getSkillbyCareerName = async () => {
    const careerName = careerData.career_name

    const skilll = CareerOptions.careers.find(career =>{career.name === careerName})
  }


  return (
    <main className="ml-40 overflow-x-hidden pb-5">
      <Navbar />
      <div className="flex flex-col mt-8 ml-13">
        <TitleProgress />
      </div>
      <div className="flex flex-col mt-8 ml-13">
        <ProgressSkill />
      </div>
    </main>
  );
}

export default Progress
