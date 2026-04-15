// /* eslint-disable no-constant-condition */
import {useEffect} from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Auth from '../page/Auth/Auth';
import Pretest from '../page/Pretest/Pretest';
import Dashboard from '../page/Dashboard/Dashboard';


const Router = () => {
    const navigate = useNavigate();
    const location = useLocation();

// janlup Mattin ini kalau ush ada develop landing page
    useEffect(() => {
        if(location.pathname === '/') {
            navigate('/auth');
        }
    }, [location.pathname, navigate]); 
// Sampe sini


    return (
        <Routes>
            <Route path="/" element={'hello'} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pretest" element={<Pretest />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    )
}

export default Router