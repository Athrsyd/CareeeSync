import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import PortfolioHooks from '../../hooks/PortfolioHooks'
import Template2 from './Template/Template2';
import { useUser } from '../../context/UserContext';
import { useCareer } from '../../context/CareerContext';
import CareerOptions from '../../data/careerOptions.json';


const Portfolio = () => {
    const [skillsData, setSkillsData] = useState([]);
    const [projectsData, setProjectsData] = useState([]);
    const { user } = useUser();
    const { careerData } = useCareer();
    const { portfolioData, loading, error, fetchPortfolio } = PortfolioHooks();
    const { id } = useParams();
    const careerOptions = CareerOptions.careers.find(c => c.name === careerData?.career_name);

    const getSkillsData = () => {
        if (careerData?.skills_mastery && careerOptions) {
            const skills = careerData.skills_mastery.map((skill, idx) => ({
                id: idx + 1,
                title: careerOptions?.skills.find(s => s.id === skill.skill_id)?.name || 'Unknown Skill',
                description: careerOptions?.skills.find(s => s.id === skill.skill_id)?.description || 'No description',
            }));
            setSkillsData(skills);
            console.log('Skills updated:', skills);
        } else {
            setSkillsData([]);
        }
    };
    const getProjectsData = () => {}

    useEffect(() => {
        console.log('Fetching portfolio for:', id);
        fetchPortfolio(id);
    }, [id]);

    useEffect(() => {
        getSkillsData();
    }, [careerData, careerOptions]);  // ✅ Re-run saat careerData berubah

    setTimeout(() => {
        console.log(portfolioData || 'No portfolio data after timeout');
    }, 5000);


    return (
        <div className="min-h-screen bg-gray-50">
            {loading && (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-lg font-semibold text-gray-600">Loading portfolio...</div>
                </div>
            )}
            
            {error && (
                <div className="p-6 bg-red-100 border border-red-400 text-red-700 rounded">
                    <p className="font-bold">Error:</p>
                    <p>{error}</p>
                </div>
            )}
            
            {portfolioData ? (
                <Template2 data={portfolioData} skillsData={skillsData} />
            ) : !loading && !error ? (
                <div className="p-6 text-center text-gray-500">No portfolio data available</div>
            ) : null}
        </div>
    )
}

export default Portfolio