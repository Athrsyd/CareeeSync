import React from 'react'
import { Link } from 'react-router-dom'

const SkillDisplay = ({data}) => {
  return (
    <div className="flex flex-col justify-start gap-2 min-w-100 h-50 rounded-xl shadow-xl border-2 border-blue-400 p-4">
      <div className="flex flex-row items-start justify-between gap-2">
        <h1 className="text-black text-md font-semibold">{data.name}</h1>
        <div className="bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 rounded-full">Mastered</div>
      </div>
      <p className="text-gray-600">{data.description}</p>
      <div className="basic bg-blue-100 w-30 flex items-center justify-center px-5 py-1 text-xs font-semibold text-blue-700 rounded-full">
        <span>{data.level}</span>
      </div>
      <Link to="/dashboard/progress" className="self-start px-4 py-1 hover:translate-x-1 transition-all ease-in-out duration-300 text-xs font-semibold text-primary rounded-lg">
        View Details -&gt;
      </Link>
    </div>
  )
}

export default SkillDisplay