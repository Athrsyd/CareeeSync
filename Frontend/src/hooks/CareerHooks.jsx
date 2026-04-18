import { useState } from 'react'
import API from '../services/api'

const CareerHooks = () => {
    const [careerTitle, setCareerTitle] = useState('');
    const [skillMastery, setSkillMastery] = useState([]);
    const [careerLevel, setCareerLevel] = useState('');
    const [careerLoading, setCareerLoading] = useState(false);


    const hitungLevel = (data) => {
        const readinessPoin = data.skills.reduce((acc, skill) =>  acc + (skill.mastered ? skill.weight : 0), 0);
        if(readinessPoin<=34) return 'Basic';
        else if(readinessPoin<=67) return 'Intermediate';
        else return 'Advanced';
    };
    


    const postCareer = async (data) => {
        const token = localStorage.getItem('token');
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
        const token = localStorage.getItem('token');
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


    return { hitungLevel, postCareer, handleChange, GetCareer };
}


export default CareerHooks