import React from 'react'
import Search from '../assets/searchIcon.svg'
import Notif from "../assets/Notif.svg";
import { useState } from 'react';
import { useUser } from '../context/UserContext'
import { useCareer } from '../context/CareerContext'


const Navbar = () => {
    const { user } = useUser();
    const { careerData } = useCareer();
    return (
        <div className="flex flex-row ml-8 gap-2 ">
            <div className="relative w-190 ml-5 mt-3">
                <input
                    type="search"
                    placeholder="Explore..."
                    className="bg-[#D9D9D9]/30 text-sm rounded-xl w-180 h-10 outline-0 pl-10"
                />
                <img
                    src={Search}
                    className="w-5 absolute left-3 top-1/2 -translate-y-1/2"
                />
            </div>
            <div className="flex flex-row mt-3 ml-5 gap-2">
                <img src={Notif} className="w-5" />
                <div className="w-[1.25px] h-10 ml-2 bg-black/10"></div>
                <div className="flex flex-col justify-center leading-2 ml-2 -mt-1">
                    <h1 className="text-sm font-bold font-montserrat">{user?.username || 'Guest'}</h1>
                    <h2 className="text-[13px] font-semibold font-montserrat text-black/30">
                        {careerData?.career_name || 'No career selected'}
                    </h2>
                </div>
                <div className="w-10 h-10 rounded-4xl ml-3 bg-gray-500"></div>
            </div>
        </div>)
}

export default Navbar