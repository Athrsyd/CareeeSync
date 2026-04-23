import { useContext, createContext, useState, useEffect } from 'react'
import CareerHooks from '../hooks/CareerHooks'
import { useLocation } from 'react-router-dom'

const CareerContext = createContext()

const CareerProvider = ({ children }) => {
    const { GetCareer, GetSkills } = CareerHooks()
    const location = useLocation()
    const [careerData, setCareerData] = useState(null)
    const [skillsMastery, setSkillsMastery] = useState([])
    const [readiness, setReadiness] = useState(0)

    useEffect(() => {
        if (location.pathname === '/auth' || location.pathname === '/pretest') return
        const fetchCareer = async () => {
            const data = await GetCareer()
            setCareerData(data?.[0] || null);
            console.log('Career data fetched successfully:', data?.[0]);

            const skills = await GetSkills();
            setSkillsMastery(skills || []);
            console.log('Skills mastery fetched successfully:', skills);

            const hitungLevel = (data) => {
                const readinessPoin = data.skills_mastery.reduce((acc, skill) => acc + (skill.mastered ? skill.weight : 0), 0);
                return readinessPoin;
            };
            const readinessScore = hitungLevel(data?.[0] || { skills_mastery: [] });
            console.log('Readiness score calculated successfully:', readinessScore);
            setReadiness(readinessScore);

            // Calculate readiness (example calculation, replace with actual logic)
            // const totalSkills = skills.length;
            // const masteredSkills = skills.filter(skill => skill.mastery === true).length;
            // const readinessPercentage = totalSkills > 0 ? (masteredSkills / totalSkills) * 100 : 0;
            // setReadiness(readinessPercentage);

        }
        fetchCareer()
    }, [])


    return (
        <CareerContext.Provider value={{ careerData, skillsMastery, readiness }}>
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