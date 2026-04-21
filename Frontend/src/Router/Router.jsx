import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation, Outlet } from 'react-router-dom'
import Auth from '../page/Auth/Auth';
import Pretest from '../page/Pretest/Pretest';
import Dashboard from '../page/Dashboard/Dashboard';
import Navdash from '../components/Dashboard/NavDash'
import Portfolio from '../page/Portofolio/Portfolio';
import ManagePortfolio from '../page/ManagePortfolio/ManagePortfolio';
import Analysis from '../page/Analysis/Analysis';
import Project from '../page/Project/Project';
// import Template2 from '../page/Portofolio/Template2';
// import Template3 from '../page/Portofolio/Template3';
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
        } else if (location.pathname === '/portfolio') {
            navigate('/dashboard');
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
                <Route path="project" element={<Project/>} />
                <Route path="portfolio" element={<ManagePortfolio />} />
                <Route path="analysis" element={<Analysis />} />
                <Route path="progress" element={'progress'} />
            </Route>
            <Route path='/portfolio/:id' element={<Portfolio />} />
            {/* <Route path='/portfolio2' element={<Template2 />} />
            <Route path='/portfolio3' element={<Template3 />} /> */}
        </Routes>
    )
}

export default Router