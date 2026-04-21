import React from 'react'
import Navdash from '../../components/Dashboard/NavDash'
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import WelcomeDash from '../../components/Dashboard/WelcomeDash'
import SkkillDash from '../../components/Dashboard/SkillDash'
import RecommendProject from '../../components/Dashboard/RecommendProjectDash';
import LibraryReadinessDash from '../../components/Dashboard/LibraryReadinessDash';
import Navbar from '../../components/Global/Navbar';
import { useUser } from '../../context/UserContext';
import { useCareer } from '../../context/CareerContext';

const Dashboard = () => {
  const { user } = useUser();
  const {careerData} = useCareer();

  return (
    <main className="ml-40 overflow-x-hidden pb-5">
      <Navbar />
      <div className="flex flex-col items-center mt-8 ml-7">
        {/* <WelcomeDash /> */}
        <WelcomeDash user={user} data={careerData} />
      </div>
      <div className="flex flex-col mt-8 ml-15">
        {/* <SKILLDASH /> */}
        <SkkillDash data={careerData} />
      </div>
      {/* <Recommend Project */}
      <div className="flex flex-col mt-8 ml-15">
        <RecommendProject />
      </div>
      <div className="flex flex-col mt-8 ml-5">
        <LibraryReadinessDash />
      </div>
    </main>
  );
}

export default Dashboard
