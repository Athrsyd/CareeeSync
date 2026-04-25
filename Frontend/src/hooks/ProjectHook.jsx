import { useState } from 'react'
import API from '../services/api'

const ProjectHook = () => {
    const [projectData, setProjectData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const postProject = async (projectData) => {
        setLoading(true);
        setError(null);
        setMessage(null);
        const token = localStorage.getItem('token');

        try {
            const response = await API.post('/projects-finished', projectData,{
                headers: {
                    Authorization : `Bearer ${token}`,
                }
            });
            setProjectData(response.data);
            setMessage('Project submitted successfully!');
        } catch (error) {
            setError(error?.response?.data?.message || 'Failed to submit project.');
        } finally {
            setLoading(false);
        }
    };

    return { projectData, loading, error, message, postProject };
};

export default ProjectHook

