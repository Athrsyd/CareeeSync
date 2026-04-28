import React from 'react'
import { useCareer } from '../../context/CareerContext';

const TitleProgress = () => {
  const {careerData} = useCareer();
  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl font-montserrat text-black leading-10">Perjalan menuju kesempatan kerja</h1>
        <h2 className="text-xl font-[450] font-montserrat text-black/50">
          Panduan Skill untuk menjadi{" "}
          <span>{careerData?.career_name || "no career selected"}</span>
        </h2>
        <p className="text-md font-montserrat font-[450] text-black/50 mb-5">Lacak kemajuan belajar Anda dan lihat seberapa jauh Anda sudah berkembang</p>
      </div>
    </>
  );
}

export default TitleProgress
