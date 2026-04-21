import { useContext } from 'react'
import { useProgress } from '../../context/ProgressContext'

const HeaderAnalysis = () => {
    const { setProgress, progress } = useProgress()

    const handleStartAnalysis = () => {
        setProgress(true)
    }

    return (
        <header className='px-2 py-5 flex flex-row items-center justify-between pr-20'>
            <div className="flex flex-col">
                <h1 className='font-bold text-4xl'>Skill Analysis</h1>
                <p className='text-xl text-gray-500'>see how your skills match industry standards.</p>
            </div>
            <div className="buttons">
                <button onClick={() => handleStartAnalysis()} className='bg-blue-200 hover:bg-blue-300 hover:text-primary transition-all
                        ease-in-out duration-300 cursor-pointer text-primary/80 font-bold py-2 px-4 rounded-full'>
                    {progress ? 'Refresh Analysis' : 'Start Analysis'}
                </button>
            </div>
        </header>)
}

export default HeaderAnalysis