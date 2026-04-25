import React from 'react'
import Search from '../../assets/searchIcon.svg'
import Notif from "../../assets/Notif.svg";
import { useState } from 'react';
import { useUser } from '../../context/UserContext'
import { useCareer } from '../../context/CareerContext'


const Navbar = () => {
    const { user } = useUser();
    const { careerData } = useCareer();
    return (
        <div className="flex flex-row md:ml-10 lg:ml-8 gap-2 ">
            <div className="relative md:w-100 lg:w-190 ml-5 mt-3">
                <input
                    type="search"
                    placeholder="Explore..."
                    className="bg-[#D9D9D9]/30 text-sm rounded-xl md:w-95 lg:w-180 h-10 outline-0 pl-10"
                />
                <img
                    src={Search}
                    className="w-5 absolute left-3 top-1/2 -translate-y-1/2"
                />
            </div>
            <div className="flex flex-row mt-3 md:ml-0 lg:ml-5 gap-2">
                <img src={Notif} className="w-5" />
                <div className="w-[1.25px] h-10 ml-2 bg-black/10"></div>
                <div className="flex flex-col justify-center md:leading-4 lg:leading-2 ml-2 -mt-1">
                    <h1 className=" md:text-[13px] lg:text-sm font-bold font-montserrat">{user?.username || 'Guest'}</h1>
                    <h2 className="md:text-[12px] lg:text-[13px] font-semibold font-montserrat text-black/30">
                        {careerData?.career_name || 'No career selected'}
                    </h2>
                </div>
                <div className="md:w-8 lg:w-10 md:h-8 lg:h-10 rounded-4xl ml-3 flex justify-center items-center bg-nav">
                    <h1 className="text-primary text-lg font-bold flex items-center justify-center h-full">
                        {user?.username ? user.username[0].toUpperCase() : 'G'}
                        </h1>
                </div>
            </div>
        </div>)
}

export default Navbar