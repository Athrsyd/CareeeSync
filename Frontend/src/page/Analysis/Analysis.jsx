import React from 'react'
import { useEffect, useState, useMemo } from 'react';
import CareerOptions from '../../data/careerOptions.json'
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
    const { readiness, careerData, skillsMastery } = useCareer();
    const { progress } = useProgress();
    const { runAnalysis, result, loading } = useAI();
    console.log("careerData:", careerData);
    console.log("readiness:", readiness);

const enrichedSkills = useMemo(() => {
    if (!careerData || skillsMastery.length === 0) return [];

    const career = CareerOptions.careers.find(
        (c) => c.name === careerData.career_name,
    );

    return skillsMastery.map((sm) => {
        const foundSkill = career?.skills.find(
        (s) => String(s.id) === String(sm.skill_id),
        );

        return {
        ...sm,
        name: foundSkill?.name || "Unknown Skill",
        };
    });
    }, [careerData, skillsMastery]);


    console.log("ENRICHED SKILLS:", enrichedSkills);

    useEffect(() => {
        if (progress && careerData && enrichedSkills.length > 0) {
            console.log("🚀 RUN AI");

            runAnalysis(careerData, enrichedSkills, readiness);
        }
        }, [progress]);

    return (
        <div className='md:ml-20 lg:ml-40 overflow-x-hidden pb-5'>
            <Navbar />
            <div className="wrapper ml-10 mt-5">
                <HeaderAnalysis runAnalysis={() => runAnalysis(careerData, enrichedSkills, readiness)} loading={loading} />
                {progress && (
                    <>
                        <div className="-ml-8 container flex flex-row w-full justify-center items-center gap-10">
                            <FeedbackAI result={result} loading={loading} />
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