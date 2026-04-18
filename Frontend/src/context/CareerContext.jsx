import { useContext, createContext, useState, useEffect } from 'react'
import CareerHooks from '../hooks/CareerHooks'
import { useLocation } from 'react-router-dom'

const CareerContext = createContext()

const CareerProvider = ({ children }) => {
    const { GetCareer } = CareerHooks()
    const location = useLocation()
    const [careerData, setCareerData] = useState(null)

    useEffect(() => {
        if (location.pathname !== '/dashboard') return
        const fetchCareer = async () => {
            const data = await GetCareer()
            setCareerData(data?.[0] || null);
            console.log('Career data fetched successfully:', data?.[0]);
        }
        fetchCareer()
    }, [])


    return (
        <CareerContext.Provider value={{ careerData }}>
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