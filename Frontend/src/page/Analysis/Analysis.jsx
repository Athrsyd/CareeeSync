import React from 'react'
import Navbar from '../../components/Navbar';
import IconAI from '../../assets/IconAI.svg';
import MoneyBag from '../../assets/MoneyBag.svg';
import JobReadinessScore from '../../components/Global/JobReadinessScore';
import Proggress from '../../assets/progressIcon.svg'
import { useCareer } from '../../context/CareerContext';
import { useUser } from '../../context/UserContext';

const Analysis = () => {
    const { readiness, careerData } = useCareer();
    return (
        <div className='ml-40 pl-5 py-5 pb-10'>
            <Navbar />
            <div className="wrapper ml-10">
                <header className='px-2 py-5'>
                    <h1 className='font-bold text-4xl'>Skill Analysis</h1>
                    <p className='text-xl text-gray-500'>see how your skills match industry standards.</p>
                </header>

                <div className="-ml-8 container flex flex-row w-full justify-center items-center gap-10">
                    <div className="container flex flex-col p-5 gap-5 bg-secondary w-5/8 h-auto rounded-xl ">
                        <div className=" flex flex-col items-start justify-start h-full">
                            <div className="flex flex-row items-center gap-2">
                                <img src={IconAI} alt="AI Icon" width="30" height="30" />
                                <div className="">
                                    <h1 className='font-bold text-xl '>AI Insight</h1>
                                    <p className='text-md text-gray-500'>Based on your responses, here's your current skill evaluation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container bg-white rounded-xl p-7 text-gray-500 h-full">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam debitis cum libero blanditiis eos minus tempore culpa pariatur
                                officiis ad corporis saepe, rem sapiente repellat quae atconsequuntur assumenda perferendis doloribus odit! Optio perferendis ut excepturi
                                recusandae modi. Quidem dolore eaque non repudiandae?
                            </p>
                        </div>
                    </div>
                    <JobReadinessScore score={readiness} role={careerData?.career_name || "Web Developer"} />
                </div>

                <div className=" container flex flex-row w-19/20 mt-10 justify-center items-center gap-10">
                    <div className="w-1/3 container flex flex-col h-75 bg-secondary/90 rounded-xl p-5">
                        <div className=" flex flex-col items-start justify-start">
                            <div className="flex flex-row items-center gap-2">
                                <div className="w-10 h-10 flex items-center justify-center bg-green-200 rounded-full">
                                    <img src={MoneyBag} alt="AI Icon" width="30" height="30" />
                                </div>
                                <div className="">
                                    <h1 className='font-bold text-xl '>Avarage Salary</h1>
                                    <p className='text-md text-gray-500'>for web developers</p>
                                </div>
                            </div>
                        </div>
                        <div className="container flex flex-col justify-center items-center mx-auto rounded-xl p-7 text-primary h-full">
                            <div className="flex flex-col items-start justify-start gap-2">
                                <h1 className='font-bold text-4xl'>$800 - $1500</h1>
                                <p className='text-xl text-start text-gray-500'>/month</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-2/3 h-auto bg-white border-2 flex flex-col justify-center  border-primary rounded-xl p-5">
                        <div className="">
                            <h1 className='font-bold text-xl'>Industry Demand</h1>
                            <p className='text-md text-gray-500'>Web Developer demand over the last 5 years</p>
                        </div>
                        <div className="container h-50"></div>
                    </div>
                </div>

                <div className="w-19/20 h-100 border-2 flex-col px-7 py-5 border-primary mt-10 rounded-xl flex items-center justify-center">
                    <div className=" flex flex-col items-start justify-start w-full h-full">
                        <div className="flex flex-row items-center gap-2">
                                <div className="w-12 h-10 flex items-center justify-center bg-green-200 rounded-xl">
                                    <img src={Proggress} alt="AI Icon" width="40" height="40" />
                                </div>                            <div className="">
                                <h1 className='font-bold text-xl '>Skill Growth Progress</h1>
                                <p className='text-md text-gray-500'>Track how your skills improve over time</p>
                            </div>
                        </div>
                    </div>
                    <div className="container bg-white rounded-xl p-7 text-gray-500 h-full">
                    </div>
                </div>
            </div>
            <br /><br />

        </div>
    )
}

export default Analysis