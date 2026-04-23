import { useEffect } from 'react'
import DiagramHooks from '../../hooks/DiagramHooks'
import { useCareer } from '../../context/CareerContext'
import Chart from 'chart.js/auto'

const DemandGrafic = () => {
    const { industryDemand, demandIndustry } = DiagramHooks();
    const { careerData } = useCareer();

    useEffect(() => {
        demandIndustry();
    }, []);
    return (
        <div className="w-2/3 h-auto bg-white border-2 flex flex-col justify-center  border-primary rounded-xl p-5">
            <div className="">
                <h1 className='font-bold text-xl'>Industry Demand</h1>
                <p className='text-md text-gray-500'>{careerData?.career_name || 'Web Developer'} demand over the last 5 years</p>
            </div>
            <div className="container h-50">
                <canvas id="demandChart">
                    
                </canvas>
            </div>
        </div>
    )
}

export default DemandGrafic