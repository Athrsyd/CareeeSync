import React from 'react'
import Proggress from '../../assets/progressIcon.svg'


const ProgressGrafic = () => {
    return (
        <div className="w-19/20 h-100 border-2 flex-col px-7 py-5 border-primary mt-10 rounded-xl flex items-center justify-center">
            <div className=" flex flex-col items-start justify-start w-full h-full">
                <div className="flex flex-row items-center gap-2">
                    <div className="w-12 h-10 flex items-center justify-center bg-green-200 rounded-xl">
                        <img src={Proggress} alt="AI Icon" width="40" height="40" />
                    </div>
                    <div className="">
                        <h1 className='font-bold text-xl '>Skill Growth Progress</h1>
                        <p className='text-md text-gray-500'>Track how your skills improve over time</p>
                    </div>
                </div>
                <div className="container bg-white rounded-xl p-7 text-gray-500 h-full">
                </div>
            </div>
        </div>)
}

export default ProgressGrafic