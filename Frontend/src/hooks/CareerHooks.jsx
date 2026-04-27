import { useState } from 'react'
import API from '../services/api'

const CareerHooks = () => {
    const [careerTitle, setCareerTitle] = useState('');
    const [skillMastery, setSkillMastery] = useState([]);
    const [careerLevel, setCareerLevel] = useState('');
    const [careerLoading, setCareerLoading] = useState(false);


    const postCareer = async (data) => {
        const token = localStorage.getItem('tokenCareerSync');
        setCareerLoading(true);
        try {
            const response = await API.post('/career', data, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Career posted successfully:', response.data);
            setCareerTitle('');
            setSkillMastery([]);
            setCareerLevel('');
        } catch (error) {
            console.error('Error posting career:', error);
        } finally {
            setCareerLoading(false);
        }
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'careerTitle') {
            setCareerTitle(value);
        } else if (name === 'mastery') {
            setCareerLevel(value);
        }
    }

    const GetCareer = async () => {
        const token = localStorage.getItem('tokenCareerSync');
        setCareerLoading(true);
        try {
            const response = await API.get('/career', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Career data fetched successfully:', response.data.data);
            return response.data.data;
        } catch (error) {
            console.error('Error fetching career data:', error);
        } finally {
            setCareerLoading(false);
        }
    };

    const updateMasterySkill = async (skillId, mastered) => {
        const token = localStorage.getItem('tokenCareerSync');
        setCareerLoading(true);
        try {
            const response = await API.put(`/career/${skillId}`, mastered, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Mastery skill updated successfully:', response.data);
        } catch (error) {
            console.error('Error updating mastery skill:', error);
        } finally {
            setCareerLoading(false);
        }
    };

    const GetSkills = async () => {
        const careerData = await GetCareer();
        return careerData[0]?.skills_mastery || [];
    };

    const postReadinessScore = async (score) => {
        const token = localStorage.getItem('tokenCareerSync');
        setCareerLoading(true);
        try {
            const response = await API.post('/progress', score, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Readiness score posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting readiness score:', error);
        } finally {
            setCareerLoading(false);
        }
    };

    return { postCareer, handleChange, GetCareer, GetSkills, updateMasterySkill, postReadinessScore };
}

export default CareerHooks