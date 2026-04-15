// /* eslint-disable no-constant-condition */
import {useEffect} from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import Auth from '../page/Auth/Auth';


const Router = () => {
    const navigate = useNavigate();
    const location = useLocation();

// janlup Mattin ini kalau ush ada develop landing page
    useEffect(() => {
        if(location.pathname === '/') {
            navigate('/auth');
        }
    }, [location.pathname, navigate]); 



    return (
        <Routes>
            <Route path="/" element={'hello'} />
            <Route path="/auth" element={<Auth />} />
        </Routes>
    )
}

export default Router