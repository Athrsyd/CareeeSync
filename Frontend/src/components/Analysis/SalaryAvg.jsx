import { useEffect, useState } from 'react'
import MoneyBag from '../../assets/MoneyBag.svg';
import DiagramHook from '../../hooks/DiagramHooks';
import { useCareer } from '../../context/CareerContext';

const SalaryAvg = () => {
    const { salary, salaryIndustry } = DiagramHook();
    const [region, setRegion] = useState('Jakarta');
    const [dispaySalary, setDisplaySalary] = useState('Loading...');
    const { careerData } = useCareer();

    useEffect(() => {
        setDisplaySalary(salary ? salary[`avgSalary${region}`] : 'Data not available');
    }, [region, salary]);

    useEffect(() => {
        salaryIndustry();
    }, []);
    return (
        <div className="w-1/3 container flex flex-col h-full bg-secondary/90 rounded-xl p-5">
            <div className=" flex flex-col items-start justify-start">
                <div className="flex flex-row items-center gap-2">
                    <div className="w-10 h-10 flex items-center justify-center bg-green-200 rounded-full">
                        <img src={MoneyBag} alt="AI Icon" width="30" height="30" />
                    </div>
                    <div className="flex flex-row justify-between items-center w-full">
                        <div className="">
                            <h1 className='font-bold text-lg '>Rata-rata gaji</h1>
                            <p className='text-xs text-gray-500'>{careerData?.career_name || 'web developers'}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col justify-center items-center mx-auto rounded-xl p-7 text-primary h-full">
                <div className="flex flex-col items-start justify-start gap-2">
                    <h1 className='font-bold text-2xl'>{dispaySalary}</h1>
                    <p className='text-xl text-start text-gray-500'>/bulan</p>
                </div>
            </div>
            <div className="bg-white/90 rounded-xl p-3 text-gray-500 text-sm">
                Anda memilih data gaji <select name="" id="" value={region} onChange={(e) => setRegion(e.target.value)}>
                    <option value="Jakarta">Jakarta</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="International">Internasional</option>
                </select>
            </div>
        </div>
    )
}

export default SalaryAvg