/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from 'react'
import CareerHooks from '../hooks/CareerHooks'
import { useLocation } from 'react-router-dom'
import ProjectsData from '../data/projectsComplete.json'
import { useCurrentProject } from './CurrentProjectContext';

const CareerContext = createContext()

const CareerProvider = ({ children }) => {
    const { GetCareer, GetSkills } = CareerHooks()
    const [careerData, setCareerData] = useState(null)
    const [skillsMastery, setSkillsMastery] = useState([])
    const [readiness, setReadiness] = useState(0)
    const [projects, setProjects] = useState([])
    const { setCurrentProject } = useCurrentProject();

    const fetchCareer = async () => {
        const data = await GetCareer();
        const selectedCareer = data?.[0] || null;

        setCareerData(selectedCareer);
        console.log('Career data fetched successfully:', selectedCareer);

        const skills = selectedCareer?.skills_mastery || [];
        setSkillsMastery(skills);
        console.log('Skills mastery fetched successfully:', skills);

        const readinessScore = (skills || []).reduce(
            (acc, skill) => acc + (skill.mastered ? skill.weight : 0),
            0
        );
        setReadiness(readinessScore);
    }

    useEffect(() => {
        if (careerData && skillsMastery.length > 0) {
            const projectsData = ProjectsData.find(project => project.career_name === careerData.career_name);
            console.log("project untuk", careerData.career_name, 'adalah', projectsData);
            
            if (!projectsData?.projects) {
                setProjects([]);
                setCurrentProject(null);
                console.warn(`No projects found for career: ${careerData.career_name}`);
                return;
            }

            setProjects(projectsData.projects);

            const projectsUnfinished = projectsData.projects.filter(project => {
                const skill = skillsMastery.find(skill => skill.skill_id === project.skill_id);
                return !skill || !skill.mastered;
            });
            console.log("project yang belum dikuasai untuk", careerData.career_name, 'adalah', projectsUnfinished);

            const firstSkill = projectsUnfinished[0];
            
            if (!firstSkill) {
                setCurrentProject(null);
                return;
            }

            const currentProject = projectsData.projects.find(p => p.skill_id === firstSkill.skill_id);
            console.log('project saat ini:', currentProject);

            if (currentProject) {
                setCurrentProject(currentProject);
            }
        }
    }, [careerData, skillsMastery])

    useEffect(() => {
        fetchCareer()
    }, [])

    return (
        <CareerContext.Provider value={{ careerData, skillsMastery, readiness, fetchCareer,setSkillsMastery, projects }}>
            {children}
        </CareerContext.Provider>
    )
}
const useCareer = () => {
    const context = useContext(CareerContext)
    if (!context) {
        throw new Error('useCareer must be used within a CareerProvider')
    }
    return context
}

export { useCareer, CareerProvider }

export default CareerContext