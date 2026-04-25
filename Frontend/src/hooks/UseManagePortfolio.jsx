import { useState } from 'react'
import API from '../services/api'

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
        user_id: '',
        style: 'style1'
    }

    const submitPortfolio = async (formData) => {
        setLoading(true)
        setError('')

        try {
            const token = localStorage.getItem('token')
            const data = new FormData()
            
            // Debug: log form data sebelum kirim
            console.log('Submitting form data:', {
                fullname: formData.fullname,
                email: formData.email,
                user_id: formData.user_id,
                career_id: formData.career_id,
                photo: formData.photo?.name || 'no photo'
            })
            
            // Append hanya string/number fields
            const stringFields = ['fullname', 'about_me', 'address', 'education', 'hobbies', 'experience', 'email', 'linkedin_link', 'instagram_link', 'phone_number', 'career_id', 'user_id', 'style']
            
            stringFields.forEach(key => {
                if (formData[key] !== null && formData[key] !== '') {
                    data.append(key, String(formData[key]))
                }
            })

            // Append photo secara terpisah
            if (formData.photo && formData.photo instanceof File) {
                data.append('photo', formData.photo)
            }

            const response = await API.post('/portfolio', data, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })

            console.log('Portfolio created:', response.data)
            setPortfolioId(response.data.data?.id || response.data.data?.portfolio_id || '')
            setShowSuccess(true)
            return true
        } catch (err) {
            let errorMessage = 'Gagal membuat portfolio'
            
            if (err.response?.data?.message) {
                errorMessage = typeof err.response.data.message === 'string' 
                    ? err.response.data.message 
                    : 'Terjadi kesalahan pada server'
            } else if (err.message) {
                errorMessage = err.message
            }
            
            setError(errorMessage)
            console.error('Error creating portfolio:', err)
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
