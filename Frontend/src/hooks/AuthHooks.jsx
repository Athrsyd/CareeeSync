import { useState, useEffect } from 'react'
import API from '../services/api'
import axios from 'axios'


const AuthHooks = () => {

    // State Deklarasi Anjay
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [AuthLogin, setAuthLogin] = useState(false);
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        setAuthLogin(true);
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
            setAuthLogin(false);
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
        setAuthLogin(true);
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
        } catch (error) {
            console.error('Error during login:', error);
            setMessage(error.response?.data?.message || 'Login failed');
        } finally {
            setAuthLogin(false);
        }
    };

    // const GetUser(){}
    return {
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        AuthLogin,
        setAuthLogin,
        handleRegister,
        message,
        setMessage,
        handleChange,
        handleLogin
    };
}

export default AuthHooks