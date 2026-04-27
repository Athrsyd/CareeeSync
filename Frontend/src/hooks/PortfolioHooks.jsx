import { useState, useEffect } from 'react'
import API from '../services/api'


const PortfolioHooks = () => {

    const [portfolioData, setPortfolioData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchPortfolio = async (username) => {
        setLoading(true);
        setError(null);
        try {
            const response = await API.get(`/portfolio/${username}`);
            console.log('Portfolio response:', response.data);
            setPortfolioData(response.data.data);
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Gagal mengambil portfolio';
            console.error('Portfolio fetch error:', errorMsg);
            setError(errorMsg);
            setPortfolioData(null);
        } finally {
            setLoading(false);
        }
    }

    const updatePortfolio = async (formData, portfolioId) => {
        setLoading(true)
        setError('')
        const token = localStorage.getItem('tokenCareerSync')
        try {
            const response = await API.put(`/portfolio/${portfolioId}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('Portfolio updated:', response.data)
        } catch (error) {
            const errorMsg = error.response?.data?.message || 'Gagal mengupdate portfolio';
            console.error('Portfolio update error:', errorMsg);
            setError(errorMsg);
        } finally {
            setLoading(false);
        }
    }


    return {
        portfolioData,
        loading,
        error,
        fetchPortfolio,
        updatePortfolio
    }
}

export default PortfolioHooks