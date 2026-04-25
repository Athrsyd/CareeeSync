import { use, useEffect } from 'react'
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
import { Car } from 'lucide-react';

const Dashboard = () => {
  const { user } = useUser();
  // const { careerName } = careerNameHooks();
  const { careerData } = useCareer();

  useEffect(() => {
    const key = "dashboardReloaded";
    if (!sessionStorage.getItem(key)) {
      sessionStorage.setItem(key, "1");
      window.location.reload();
    }
  }, []);

  return (
    <main className="md:ml-20 lg:ml-40 overflow-x-hidden pb-5">
      <Navbar />
      <div className="flex flex-col items-center mt-8 ml-7">
        <WelcomeDash user={user} data={careerData} />
      </div>
      <div className="flex flex-col mt-8 ml-15">
        <SkkillDash data={careerData} />
      </div>
      <div className="flex flex-col mt-8 ml-15">
        <RecommendProject />
      </div>
      <div className="flex flex-col mt-8 ml-5">
        <LibraryReadinessDash />
      </div>
      <br />
    </main>
  );
}

export default Dashboard
