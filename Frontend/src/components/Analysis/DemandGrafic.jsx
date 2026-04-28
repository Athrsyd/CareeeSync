import { useEffect } from 'react'
import DiagramHooks from '../../hooks/DiagramHooks'
import { useCareer } from '../../context/CareerContext'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import dataKebutuhanIndustri from '../../data/dataKebutuhanIndustri.json';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const DemandGrafic = () => {
    const { careerData } = useCareer();

    const careerDemand = dataKebutuhanIndustri.demand?.find(
        item => item.name === careerData?.career_name
    );

    const chartData = {
        labels: dataKebutuhanIndustri.years || [2020, 2021, 2022, 2023, 2024, 2025],
        datasets: [
            {
                label: `Permintaan ${careerData?.career_name}`,
                data: careerDemand
                    ? dataKebutuhanIndustri.years.map(year => careerDemand.values[year])
                    : [0, 0, 0, 0, 0, 0],
                backgroundColor: 'rgba(59, 130, 246, 0.8)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 2,
                borderRadius: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
            title: {
                display: false,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Permintaan Industri'
                }
            },
            x: {
                title: {
                    display: true,
                    text: 'Tahun'
                }
            }
        }
    };

    return (
        <div className="w-2/3 h-100 bg-white border-2 flex flex-col justify-center border-primary rounded-xl p-5">
            <div className="">
                <h1 className='font-bold text-xl'>Permintaan Industri</h1>
                <p className='text-md text-gray-500'>Permintaan {careerData?.career_name || 'Web Developer'} 5 tahun terakhir</p>
            </div>
            <div className="container h-80 mt-4">
                {careerDemand ? (
                    <Bar data={chartData} options={options} />
                ) : (
                    <p className="text-gray-500">Data tidak tersedia</p>
                )}
            </div>
        </div>
    )
}

export default DemandGrafic