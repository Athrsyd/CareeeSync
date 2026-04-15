import { useState } from 'react'

const Pretest = () => {
    const [page, setPage] = useState(1);


    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4 relative'>
            <div className="background relative -z-30"></div>
            <div className={`container px-10 z-10 bg-[#021124]/60 w-3/5 h-4/5 rounded-xl backdrop-blur-xl flex items-center gap-6 flex-col justify-between py-5 transition-all duration-700 ease-in-out transform `}>
                <header className='flex flex-col justify-start text-white items-start w-full'>
                    <p className='text-lg font-'>Pre-Test</p>
                    <h1 className='text-3xl font-bold mb-3'>Define Your Path</h1>
                    <div className="proggress-bar w-full h-3 bg-white rounded-full flex items-center justify-start flex-col">
                        <div className={`progress bg-white rounded-full w-full h-3`}>
                            <div className="value bg-[#06275A] transition-all duration-700 ease-in-out h-3 rounded-full" style={{ width: `${(page / 3) * 100}%` }}></div>
                        </div>
                        <span className='text-center font-semibod w-full'>{page} of 3</span>
                    </div>
                </header>

                {page === 1 ? (
                    <>
                        <div className="container flex flex-col items-center justify-center gap-4">
                            <div className="w-17/20 flex items-start justify-start">
                                <h1 className='text-2xl text-start font-bold mb-2 text-white'>What is your primary career goal?</h1>
                            </div>
                            <select name="careerGoal" id="careerGoal" className='bg-[#021124] text-white placeholder:text-gray-500 border
                        border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 w-17/20 h-20 p-5 rounded-2xl'>

                                <option value="" className='bg-[#021124]'>Select your career goal</option>
                                <option value="software-engineer" className='bg-[#021124]'>Software Engineer</option>
                                <option value="data-scientist" className='bg-[#021124]'>Data Scientist</option>
                                <option value="product-manager" className='bg-[#021124]'>Product Manager</option>
                            </select>
                        </div>
                        <div className="container w-full flex items-center justify-center">
                            <button onClick={() => setPage(page + 1)} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6  hover:bg-[#0a3d7a] transition-colors duration-300'>Next</button>
                        </div>
                    </>
                ) : page === 2 ?
                    (
                        <>
                            <div className="container flex flex-col items-center justify-center gap-4 w-full flex-1">
                                <h1 className='text-2xl text-center font-bold mb-2 text-white'>Which skills do you already have in this field?</h1>
                                <div className="w-17/20 h-50 grid grid-cols-2 md:grid-cols-3 gap-4 overflow-auto">
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>JavaScript</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>React</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>Python</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>SQL</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>Git</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>UI/UX Design</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>Node.js</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>Tailwind CSS</button>
                                    <button className='bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30 w-full rounded-2xl text-white py-4 px-6 hover:border-[#5482B4]/80 hover:bg-[#5482B4]/10 transition-all duration-300 font-semibold'>REST API</button>
                                </div>
                            </div>
                            <div className="buttons flex w-full flex-row items-center justify-center gap-10">
                                <button onClick={() => setPage(page - 1)} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Prev</button>
                                <button onClick={() => setPage(page + 1)} className='bg-[#5482B4] w-9/10 rounded-2xl text-white py-3 px-6 hover:bg-[#0a3d7a] transition-colors duration-300 font-semibold'>Next</button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="container flex flex-col items-center justify-center gap-8 w-full flex-1">
                                <div className="w-17/20">
                                    <h1 className='text-xl text-start font-bold text-white mb-6'>Konfirmasi Pilihan Anda</h1>


                                    <div className="container flex flex-col items-start justify-center gap-3">

                                        <div className="rounded-2xl w-full px-5 py-2 bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-[#5482B4] font-bold">✓</span>
                                                <h2 className='text-lg font-semibold text-gray-300'>Tujuan Karir</h2>
                                            </div>
                                            <p className='text-xl font-bold text-white ml-6 -mt-2'>Software Engineer</p>
                                        </div>

                                        <div className="rounded-2xl w-full px-5 py-2 bg-linear-to-br from-[#021124]/60 to-[#0a2847]/40 border-2 border-[#5482B4]/30">
                                            <div className="flex items-center gap-2 mb-3 ">
                                                <span className="text-[#5482B4] font-bold">✓</span>
                                                <h2 className='text-lg font-semibold text-gray-300'>Skills yang Anda Miliki Saat Ini :</h2>
                                            </div>
                                            <div className="flex flex-wrap gap-2 ml-6">
                                                <span className='bg-[#5482B4]/20 text-white px-3 py-1 rounded-lg text-sm font-semibold'>JavaScript</span>
                                                <span className='bg-[#5482B4]/20 text-white px-3 py-1 rounded-lg text-sm font-semibold'>React</span>
                                                <span className='bg-[#5482B4]/20 text-white px-3 py-1 rounded-lg text-sm font-semibold'>Node.js</span>
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
                    )
                }
            </div>
        </div>)
}

export default Pretest