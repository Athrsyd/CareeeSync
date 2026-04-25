const CIRCUMFERENCE = 2 * Math.PI * 54;
import React, { useEffect, useRef } from 'react'

const JobReadinessScore = ({ score = 78, role = "Web Developer" }) => {
    const arcRef = useRef(null);
    useEffect(() => {
        if (arcRef.current) {
            const offset = CIRCUMFERENCE * (1 - score / 100);
            arcRef.current.style.transition = "stroke-dashoffset 0.6s cubic-bezier(0.4,0,0.2,1)";
            arcRef.current.style.strokeDashoffset = offset;
        }
    }, [score]);
    const topPercent = Math.max(1, 100 - score);

    return (
        <div className="bg-white/10 rounded-2xl outline-2 outline-primary shadow-xl backdrop-blur-md p-6 flex flex-col items-center gap-2 md:w-160 lg:w-72 h-full">
            <h2 className="md:font-semibold text-base font-montserrat lg:font-[450] text-[#06275A] tracking-tight">
                Job Readiness Score
            </h2>
            <div className="">
                <svg width="100" height="100" viewBox="0 0 140 140">
                    {/* Background track */}
                    <circle
                        cx="70"
                        cy="70"
                        r="54"
                        fill="none"
                        stroke="#e2e8f0"
                        strokeWidth="12"
                    />
                    <circle
                        ref={arcRef}
                        cx="70"
                        cy="70"
                        r="54"
                        fill="none"
                        stroke="#1e3a5f"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={CIRCUMFERENCE}
                        strokeDashoffset={CIRCUMFERENCE * (1 - score / 100)}
                        transform="rotate(-90 70 70)"
                    />
                    <text
                        x="70"
                        y="78"
                        textAnchor="middle"
                        fontSize="25"
                        fontWeight="500"
                        fill="#1e3a5f"
                    >
                        {score.toFixed(2)}%
                    </text>
                </svg>
            </div>
            <p className="md:text-md lg:text-[14px] font-montserrat text-[#06275A] md:w-[50%] lg:w-full text-center leading-relaxed">
                Top <span className="font-semibold text-slate-800">{topPercent.toFixed(2)}%</span>{" "}
                closer to becoming a{" "}
                <span className="font-semibold text-slate-800">{role}</span>
            </p>
        </div>
    );
}

export default JobReadinessScore

// const JobReadinessScore = ({ score = 78, role = "Web Developer" }) => {
//     const topPercent = Math.max(1, 100 - score);

//     return (
//         <div className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center gap-4 w-56">
//             <h2 className="text-sm font-medium text-gray-800 text-center">
//                 Job Readiness Score
//             </h2>

//             <div
//                 className="w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300"
//                 style={{
//                     background: `conic-gradient(#5482B4 ${score}%, #e2e8f0 0)`,
//                 }}
//             >
//                 <div className="w-19 h-19 rounded-full bg-white flex items-center justify-center">
//                     <span className="text-xl font-medium text-[#1e3a5f]">{score}%</span>
//                 </div>
//             </div>

//             <p className="text-[13px] text-gray-500 text-center leading-relaxed">
//                 Top <strong className="text-gray-800">{topPercent}%</strong> closer to becoming a{" "}
//                 <strong className="text-gray-800">{role}</strong>
//             </p>
//         </div>
//     );
// };

// export default JobReadinessScore;