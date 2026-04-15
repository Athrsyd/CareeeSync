/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, use } from 'react'
import Header from '../../components/Pretest/Header';
import Skill from '../../components/Pretest/Skill';
import CareerOptions from '../../data/careerOptions.json'

const Pretest = () => {
    const [page, setPage] = useState(1);
    const [dataCareer, setDataCareer] = useState([]);
    const [selectedCareer, setSelectedCareer] = useState('');
    const [skillList, setSkillList] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    const [preventNext, setPreventNext] = useState(false);

    useEffect(() => {
        setDataCareer(CareerOptions.careers);
    }, [])

    const handleCareerChange = (e) => {
        setSelectedCareer(e.target.value);
        console.log(`Selected career: ${e.target.value}`);
        setSkillList(CareerOptions.careers.find(career => career.id === e.target.value)?.skills || []);
        console.log(`Skills for selected career: ${skillList.join(', ')}`);
        if (!e.target.value) {
            setPreventNext(true);
        }
        setPreventNext(false);
    }

    const selectSkill = (skillId) => {
        // const skill = [...selectedSkills, skillId];
        setSelectedSkills(prev => {
            if (prev.includes(skillId)) {
                return prev.filter(id => id !== skillId);
            } else {
                return [...prev, skillId];
            }
        });
    }

    const handleClickStepOne = () => {
        if (!selectedCareer) {
            setPreventNext(true);
        }
        else {
            setPage(2);
        }
    }
    const handlePrevOne = () => {
        setPage(1);
        setSelectedCareer('');
        setPreventNext(false);
    }


    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4 relative'>
            <div className="background relative -z-30"></div>
            <div className='container px-10 z-10 bg-[#021124]/60 w-3/5 h-4/5 rounded-xl backdrop-blur-xl flex items-center gap-6 flex-col justify-between py-5'>
                <Header data={page} />

                {page === 1 ? (
                    <>
                        <div className="container flex flex-col items-center justify-center gap-4">
                            <div className="w-17/20 flex items-start justify-start">
                                <h1 className='text-2xl text-start font-bold mb-2 text-white'>What is your primary career goal?</h1>
                            </div>
                            <select name="careerGoal" id="careerGoal"
                                className='bg-[#021124] text-white placeholder:text-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-17/20 h-20 p-5 rounded-2xl'
                                onChange={handleCareerChange}
                            >
                                <option value="">Select your career goal</option>
                                {dataCareer.map((career, index) => (
                                    <option key={index} value={career.id}>{career.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="container w-full flex flex-col items-center justify-center">
                            <button 
                                className={`bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 ${preventNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={handleClickStepOne}
                                disabled={preventNext}
                            >
                                Next
                            </button>
                            <span className={`text-red-700 ${preventNext ? 'block' : 'hidden'}`}>Pilih tujuan karir anda terlebih dahulu</span>
                        </div>
                    </>
                ) : page === 2 ? (
                    <>
                        <div className="container flex flex-col items-center justify-center gap-4 w-full flex-1">
                            <h1 className='text-2xl text-center font-bold mb-2 text-white'>Which skills do you already have in this field?</h1>
                            <div className="w-17/20 h-50 pt-2 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
                                {skillList.map((skill, index) => (
                                    <Skill
                                        key={index}
                                        skillName={skill.name}
                                        skillId={skill.id}
                                        isSelected={selectedSkills.includes(skill.id)}
                                        onClick={() => selectSkill(skill.id)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="buttons flex w-full flex-row items-center justify-center gap-10">
                            <button onClick={handlePrevOne} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Prev</button>
                            <button onClick={() => setPage(page + 1)} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Next</button>
                        </div>
                    </>
                ) : page === 3 ? (
                    <>
                        <div className="container flex flex-col items-center justify-center gap-8 w-full flex-1">
                            <div className="w-17/20">
                                <h1 className='text-xl text-start font-bold text-white mb-6'>Konfirmasi Pilihan Anda</h1>
                                <div className="container flex flex-col items-start justify-center gap-3">
                                    <div className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 w-full rounded-2xl p-2 border-2 border-[#5482B4]/30'>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-[#5482B4] font-bold">✓</span>
                                            <h2 className='text-lg font-semibold text-gray-300'>Tujuan Karir</h2>
                                        </div>
                                        <p className='text-xl font-bold text-white ml-6'>{selectedCareer || 'Belum dipilih'}</p>
                                    </div>
                                    <div className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 w-full rounded-2xl p-2 border-2 border-[#5482B4]/30'>
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-[#5482B4] font-bold">✓</span>
                                            <h2 className='text-lg font-semibold text-gray-300'>Skills yang Anda Miliki:</h2>
                                        </div>
                                        <div className="flex flex-wrap gap-2 ml-6">
                                            {selectedSkills.map((skillId, index) => {
                                                const skill = skillList.find(s => s.id === skillId);
                                                return skill ? (
                                                    <span key={index} className='bg-[#5482B4]/20 text-white px-3 py-1 rounded-lg text-sm font-semibold'>{skill.name}</span>
                                                ) : null;
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons flex w-full flex-row items-center justify-center gap-10">
                            <button onClick={() => setPage(page - 1)} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Prev</button>
                            <button className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Let's Proof Your Skill</button>
                        </div>
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default Pretest