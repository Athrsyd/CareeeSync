import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom'
import Auth from '../page/Auth/Auth';
import Pretest from '../page/Pretest/Pretest';
import Dashboard from '../page/Dashboard/Dashboard';
import Navdash from '../components/Dashboard/NavDash'
import Portfolio from '../page/Portofolio/Test1';

// Layout component untuk dashboard
const DashboardLayout = () => {
    return (
        <div className="flex h-screen w-full">
            <Navdash />
            <Outlet />  {/* Render nested routes di sini */}
        </div>
    )
}

const Router = () => {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            navigate('/auth');
        }
    }, [location.pathname, navigate]);

    return (
        <Routes>
            <Route path="/" element={'hello'} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/pretest" element={<Pretest />} />
            
            {/* Nested routes dengan layout */}
            <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="project" element={''} />
            </Route>
            <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
    )
}

export default Router