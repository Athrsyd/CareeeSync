import React from 'react'

const SkillDisplay = ({data}) => {
  return (
    <div className="flex flex-col justify-start gap-2 min-w-80 h-45 rounded-xl shadow-xl border-2 border-blue-400 p-4">
      <div className="flex flex-row items-start justify-between gap-2">
        <h1 className="text-black text-md font-semibold">{data.name}</h1>
        <div className="bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 rounded-full">Mastered</div>
      </div>
      <p className="text-gray-600">{data.description}</p>
      <div className="basic bg-blue-100 w-30 flex items-center mb-5 justify-center px-5 py-1 text-xs font-semibold text-blue-700 rounded-full">
        <span>{data.level}</span>
      </div>
    </div>
  )
}

export default SkillDisplay