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

    /**
     * Parse error response dari BE menjadi pesan yang user-friendly.
     * Menangani: error_code khusus, validation object, string biasa.
     */
    const parseErrorMessage = (err) => {
        const data = err.response?.data

        if (!data) return err.message || 'Terjadi kesalahan. Silakan coba lagi.'

        // Error code khusus dari BE
        if (data.error_code === 'NO_PROJECT') {
            return '📋 Anda belum bisa membuat portfolio. Kerjakan minimal 1 project terlebih dahulu di menu Project.'
        }
        if (data.error_code === 'NO_CAREER') {
            return '💼 Anda belum bisa membuat portfolio. Silakan lengkapi data karir terlebih dahulu di menu Career.'
        }

        // Pesan string langsung dari BE
        if (typeof data.message === 'string') return data.message

        // Validation errors object — ambil pesan pertama
        if (typeof data.message === 'object') {
            const first = Object.values(data.message).flat()[0]
            return first || 'Terjadi kesalahan validasi. Periksa kembali form Anda.'
        }

        return 'Terjadi kesalahan. Silakan coba lagi.'
    }

    const buildFormData = (formData, includeMethod = null) => {
        const data = new FormData()

        const stringFields = [
            'fullname', 'about_me', 'address', 'education',
            'hobbies', 'experience', 'email', 'phone_number',
            'linkedin_link', 'instagram_link', 'github_link',
            'career_id', 'user_id', 'style'
        ]

        stringFields.forEach(key => {
            const val = formData[key] ?? ''
            data.append(key, String(val))
        })

        if (formData.photo && formData.photo instanceof File) {
            data.append('photo', formData.photo)
        }

        if (includeMethod) {
            data.append('_method', includeMethod)
        }

        return data
    }

    const submitPortfolio = async (formData) => {
        setLoading(true)
        setError('')

        try {
            const token = localStorage.getItem('tokenCareerSync')
            const data = buildFormData(formData)

            const response = await API.post('/portfolio', data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })

            setPortfolioId(response.data.data?.id || response.data.data?.portfolio_id || '')
            setShowSuccess(true)
            return true
        } catch (err) {
            setError(parseErrorMessage(err))
            console.error('Error creating portfolio:', err.response?.data || err)
            return false
        } finally {
            setLoading(false)
        }
    }

    const fetchPortfolioByUsername = async (username) => {
        if (!username) return null
        try {
            const response = await API.get(`/portfolio/${username}`)
            return response.data.data || null
        } catch {
            return null
        }
    }

    const updatePortfolio = async (formData, portfolioId) => {
        setLoading(true)
        setError('')

        try {
            const token = localStorage.getItem('tokenCareerSync')
            const data = buildFormData(formData, 'PUT')

            const response = await API.post(`/portfolio/${portfolioId}`, data, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                }
            })

            setPortfolioId(portfolioId)
            setShowSuccess(true)
            return true
        } catch (err) {
            setError(parseErrorMessage(err))
            console.error('Error updating portfolio:', err.response?.data || err)
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
        fetchPortfolioByUsername,
        updatePortfolio,
        setShowSuccess,
        setError
    }
}

export default useManagePortfolio