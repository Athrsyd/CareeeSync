import { useState, useEffect } from 'react'
import API from '../services/api'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const AuthHooks = () => {
    const navigate = useNavigate();

    // State Deklarasi Anjay
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [AuthLoading, setAuthLoading] = useState(false);
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    

    const handleRegister = async (e) => {
        setAuthLoading(true);
        e.preventDefault();
        try {
            const response = await API.post('/register', {
                username,
                email,
                password
            });
            console.log('Registration successful:', response.data);
            setMessage(response.data.message);
            setUsername('');
            setEmail('');
            setPassword('');

        } catch (error) {
            console.error('Error during registration:', error);
            setMessage(error.response?.data?.message || 'Registration failed');
        }
        finally {
            setAuthLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'username') {
            setUsername(value);
        } else if (name === 'email') {
            setEmail(value);
        }
        else if (name === 'password') {
            setPassword(value);
        }
    }

    const handleLogin = async (e) => {
        setAuthLoading(true);
        e.preventDefault();
        try {
            const response = await API.post('/login', {
                email,
                password
            });
            console.log('Login successful:', response.data);
            setMessage(response.data.message);
            setEmail('');
            setPassword('');
            const token = response.data.token;
            localStorage.setItem('token', token);
            setTimeout(() => {
                navigate('/pretest');
            }, 1500);
        } catch (error) {
            console.error('Error during login:', error);
            setMessage(error.response?.data?.message || 'Login failed');
        } finally {
            setAuthLoading(false);
        }
    };

    const GetUser = async () => {
        setAuthLoading(true);
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await API.get('/user', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setAuthLoading(false);
            }
        }
    };

    const Logout = async () => {
        setAuthLoading(true);
        try {
            const token = localStorage.getItem('token');
            const response = await API.post('/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert(response.data.message);
            localStorage.removeItem('token');
            navigate('/auth');

        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            setAuthLoading(false);
        }
    }

    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        AuthLoading,
        setAuthLoading,
        handleRegister,
        message,
        setMessage,
        handleChange,
        handleLogin,
        GetUser,
        Logout
    };
}

export default AuthHooks