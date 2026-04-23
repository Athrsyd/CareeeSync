import { useEffect } from 'react'
import Proggress from '../../assets/progressIcon.svg'
import DiagramHooks from '../../hooks/DiagramHooks'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ProgressGrafic = () => {
    const { progressData, progressUser } = DiagramHooks();

    useEffect(() => {
        progressUser();
    }, []);

    // Process data untuk chart
    const chartData = progressData && progressData.length > 0 
        ? {
            labels: progressData
                .map(item => new Date(item.progress_date).toLocaleDateString('id-ID')),
            datasets: [
                {
                    label: 'Readiness Point',
                    data: progressData
                        .map(item => item.readiness_point).reverse(),
                    borderColor: 'rgba(59, 130, 246, 1)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: 'rgba(59, 130, 246, 1)',
                    pointBorderColor: '#fff',
                }
            ]
        }
        : null;

    const options = {
        responsive: true,
        maintainAspectRatio: false, // Penting: agar chart bisa fill container height
        plugins: {
            legend: {
                display: true,
                position: 'top',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
            x: {
                title: {
                    display: true,
                    text: 'Tanggal'
                }
            }
        }
    };

    return (
        <div className="w-19/20 border-2 px-7 py-5 border-primary mt-10 rounded-xl flex flex-col">
            <div className="flex flex-row items-center gap-2">
                <div className="w-12 h-10 flex items-center justify-center bg-green-200 rounded-xl">
                    <img src={Proggress} alt="AI Icon" width="40" height="40" />
                </div>
                <div className="">
                    <h1 className='font-bold text-xl '>Skill Growth Progress</h1>
                    <p className='text-md text-gray-500'>Track how your skills improve over time</p>
                </div>
            </div>
            {/* Chart Container dengan fixed height */}
            <div className="w-full h-96 bg-white rounded-xl p-7 mt-5">
                {chartData ? (
                    <Line data={chartData} options={options} />
                ) : (
                    <p className="text-center text-gray-400">No progress data available</p>
                )}
            </div>
        </div>
    )
}

export default ProgressGrafic