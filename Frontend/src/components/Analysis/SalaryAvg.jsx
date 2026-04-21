import React from 'react'
import MoneyBag from '../../assets/MoneyBag.svg';


const SalaryAvg = () => {
    return (
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
    )
}

export default SalaryAvg