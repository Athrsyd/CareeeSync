import { useState, useEffect, useCallback } from 'react'
import API from '../services/api';
import { useCareer } from '../context/CareerContext';
import { useUser } from '../context/UserContext';
import dataGaji from '../data/dataGaji.json';
import dataKebutuhanIndustri from '../data/dataKebutuhanIndustri.json';

const DiagramHooks = () => {
    const [progressData, setProgressData] = useState(null);
    const [salary, setSalary] = useState(null);
    const [industryDemand, setIndustryDemand] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { careerData } = useCareer();
    
    const progressUser = useCallback(async () => {
        const token = localStorage.getItem('tokenCareerSync');
        try {
            setLoading(true);
            const response = await API.get('/progress', {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            const data = response.data || [];
            setProgressData(data);
            console.log('Progress data:', data);
            setError(null);
        } catch (err) {
            console.error('Error:', err.response?.data || err.message);
            setError(err.response?.data?.message || err.message);
            setProgressData([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const demandIndustry = () => {
        if (!careerData) return;
        const industry = careerData.career_name;
        
        const demand = dataKebutuhanIndustri.demand?.find(item => item.name === industry);
        
        if (demand) {
            setIndustryDemand(demand.values);
            console.log('Industry demand:', demand);
        } else {
            setIndustryDemand('Data not available');
            console.log('Data not found for:', industry);
        }
    }

    const salaryIndustry = () => {
        if (!careerData) return;
        const industry = careerData.career_name;
        const salaryData = dataGaji.find(item => item.career_name === industry);
        if (salaryData) {
            setSalary(salaryData);
            console.log('SALARY DATA:', salaryData);
        }
    }
    useEffect(() => {
        progressUser();
    }, []);

    useEffect(() => {
        demandIndustry();
        salaryIndustry();
    }, [careerData]);


    return { progressData, salary, industryDemand, progressUser, loading, error, demandIndustry, salaryIndustry }
}

export default DiagramHooks