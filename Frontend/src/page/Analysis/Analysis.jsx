import React from 'react'
import Navbar from '../../components/Navbar';
import IconAI from '../../assets/IconAI.svg';
import JobReadinessScore from '../../components/Global/JobReadinessScore';
import HeaderAnalysis from '../../components/Analysis/HeaderAnalysis';
import FeedbackAI from '../../components/Analysis/FeedbackAI';
import DemandGrafic from '../../components/Analysis/DemandGrafic';
import SalaryAvg from '../../components/Analysis/SalaryAvg';
import ProgressGrafic from '../../components/Analysis/ProgressGrafic';
import { useProgress } from '../../context/ProgressContext';

import { useCareer } from '../../context/CareerContext';
import { useUser } from '../../context/UserContext';

const Analysis = () => {
    const { readiness, careerData } = useCareer();
    const { progress } = useProgress();

    return (
        <div className='ml-40 pl-5 py-5 pb-10'>
            <Navbar />
            <div className="wrapper ml-10 mt-5">
                <HeaderAnalysis />
                {progress && (
                    <>
                        <div className="-ml-8 container flex flex-row w-full justify-center items-center gap-10">
                            <FeedbackAI />
                            <JobReadinessScore score={readiness} role={careerData?.career_name || "Web Developer"} />
                        </div>

                        <div className=" container flex flex-row w-19/20 mt-10 justify-center items-center gap-10">
                            <SalaryAvg />
                            <DemandGrafic />
                        </div>
                        <ProgressGrafic />
                    </>
                )}
            </div>
            <br />
        </div>
    )
}

export default Analysis