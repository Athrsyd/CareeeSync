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
import API from '../../services/api';

const Analysis = () => {
    const { readiness, careerData, skillsMastery } = useCareer();
    const { progress } = useProgress();
    const { runAnalysis, loading: aiLoading } = useAI();
    const [analysisStarted, setAnalysisStarted] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [feedbackLoading, setFeedbackLoading] = useState(false);
    
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

    // Fetch feedback dari backend ketika analysis dimulai
    useEffect(() => {
        if (analysisStarted && careerData && enrichedSkills.length > 0) {
            generateAndSendFeedback();
        }
    }, [analysisStarted, careerData, enrichedSkills]);

    const generateAndSendFeedback = async () => {
        try {
            setFeedbackLoading(true);
            const token = localStorage.getItem('tokenCareerSync');
            
            // Generate feedback dari Gemini (frontend)
            const generatedFeedback = await runAnalysis(careerData, enrichedSkills, readiness);
            
            // Kirim feedback ke backend untuk disimpan via endpoint /feedback
            const response = await API.post(`/feedback/${careerData.id}` , {
                ai_feedback: generatedFeedback,
                // careerData: careerData,
                // skillsMastery: enrichedSkills,
                // readiness: readiness
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            
            setFeedback(generatedFeedback);
            console.log("Feedback saved:", response.data);
            
        } catch (error) {
            console.error("Error generating feedback:", error);
            setFeedback("Gagal membuat analisis. Silakan coba lagi.");
        } finally {
            setFeedbackLoading(false);
        }
    };

    const handleStartAnalysis = async () => {
        setAnalysisStarted(true);
        // Feedback akan di-generate & dikirim otomatis melalui useEffect
    };

    return (
        <div className='md:ml-20 lg:ml-40 overflow-x-hidden pb-5'>
            <Navbar />
            <div className="wrapper ml-10 mt-5">
                <HeaderAnalysis 
                    runAnalysis={() => runAnalysis(careerData, enrichedSkills, readiness)} 
                    loading={feedbackLoading}
                    isAnalysisStarted={analysisStarted}
                    onStartAnalysis={handleStartAnalysis}
                />
                {analysisStarted && (
                    <>
                        <div className="-ml-8 container flex flex-row w-full justify-center items-center gap-10">
                            <FeedbackAI result={feedback} loading={feedbackLoading} />
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