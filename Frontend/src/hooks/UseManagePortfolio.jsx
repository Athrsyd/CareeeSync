import { useState } from 'react'
import API from '../services/api'
import CareerHooks from './CareerHooks'

const useManagePortfolio = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [showSuccess, setShowSuccess] = useState(false)
    const [portfolioId, setPortfolioId] = useState('')

    const initialFormData = {
        fullname: '',
        about_me: '',
        address: '',
        photo: null,
        education: '',
        hobbies: '',
        experience: '',
        email: '',
        linkedin_link: '',
        instagram_link: '',
        phone_number: '',
        career_id: '',
        project_finished_id: '',
        style: 'style1'
    }

    const submitPortfolio = async (formData) => {
        setLoading(true)
        setError('')

        try {
            const token = localStorage.getItem('token')
            const data = new FormData()
            
            Object.keys(formData).forEach(key => {
                if (formData[key] !== null && formData[key] !== '') {
                    data.append(key, formData[key])
                }
            })

            const response = await API.post('/portfolio', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })

            setPortfolioId(response.data.data.portfolio_id)
            setShowSuccess(true)
            return true
        } catch (err) {
            setError(err.response?.data?.message || 'Gagal membuat portfolio')
            console.error('Error:', err)
            return false
        } finally {
            setLoading(false)
        }
    }

    return {
        loading,
        error,
        showSuccess,
        portfolioId,
        initialFormData,
        submitPortfolio,
        setShowSuccess,
        setError
    }
}

export default useManagePortfolio
