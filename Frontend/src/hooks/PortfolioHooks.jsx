import { useState, useEffect } from 'react'
import API from '../services/api'


const PortfolioHooks = () => {

    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPortfolio = async (userId) => {
        setLoading(true);
        try {
            const response = await API.get(`/portfolio/${userId}`);
            setPortfolioData(response.data.data);
        } catch (error) {
            console.error(error.response.data.message)
            setError(error);
        } finally { 
            setLoading(false);
            console.log(portfolioData || 'No portfolio data');
        }
    }
    return {
        portfolioData,
        loading,
        error,
        fetchPortfolio
    }
}

export default PortfolioHooks