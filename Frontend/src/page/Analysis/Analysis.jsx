import React from 'react'
import { useEffect } from 'react';
import Navbar from '../../components/Global/Navbar';
import IconAI from '../../assets/iconAI.svg';
import JobReadinessScore from '../../components/Global/JobReadinessScore';
import HeaderAnalysis from '../../components/Analysis/HeaderAnalysis';
import FeedbackAI from '../../components/Analysis/FeedbackAI';
import DemandGrafic from '../../components/Analysis/DemandGrafic';
import SalaryAvg from '../../components/Analysis/SalaryAvg';
import ProgressGrafic from '../../components/Analysis/ProgressGrafic';
import { useProgress } from '../../context/ProgressContext';
import useAI from '../../hooks/AiAnalysisHooks';
import { useCareer } from '../../context/CareerContext';
import { useUser } from '../../context/UserContext';

const Analysis = () => {
    const { readiness, careerData } = useCareer();
    const { progress } = useProgress();
    const { runAnalysis } = useAI();
    
    

    return (
        <div className='md:ml-20 lg:ml-40 overflow-x-hidden pb-5'>
            <Navbar />
            <div className="wrapper ml-10 mt-5">
                <HeaderAnalysis />
                {progress && (
                    <>
                        <div className="-ml-8 container flex flex-row w-full justify-center items-center gap-10">
                            <FeedbackAI />
                            <JobReadinessScore score={readiness} role={careerData?.career_name || "Web Developer"} />
                        </div>

                        <div className=" container flex flex-row w-19/20 h-100 mt-10 justify-center items-center gap-10">
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