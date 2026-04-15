import React from 'react'

const Header = ({data}) => {
    return (
        <header className='flex flex-col justify-start text-white items-start w-full'>
            <p className='text-lg font-'>Pre-Test</p>
            <h1 className='text-3xl font-bold mb-3'>Define Your Path</h1>
            <div className="proggress-bar w-full h-3 bg-white rounded-full flex items-center justify-start flex-col">
                <div className={`progress bg-white rounded-full w-full h-3`}>
                    <div className="value bg-[#06275A] transition-all duration-700 ease-in-out h-3 rounded-full" style={{ width: `${(data / 3) * 100}%` }}></div>
                </div>
                <span className='text-center font-semibod w-full'>{data} of 3</span>
            </div>
        </header>
    )
}

export default Header