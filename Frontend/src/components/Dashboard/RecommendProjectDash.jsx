import React from 'react'

const DummyProjectItem = [
  {
    id: 1,
    logo: "",
    projectName: "Health Tracker App",
    techStack: "React Native",
    projectDesc:
      "Building a high-performance wellness tracker with real-time biometric data visualization and..",
  },
  {
    id: 2,
    logo: "",
    projectName: "Health Tracker App",
    techStack: "React Native",
    projectDesc:
      "Building a high-performance wellness tracker with real-time biometric data visualization and..",
  }
];

const ProjectItem = ({item}) => {
  return (
    <>
      <div className="flex flex-col gap-5 mt-2 mr-2 ml-2 mb-2">
        <div className="flex flex-row gap-2 bg-white/20 w-140 h-45 rounded-xl shadow-xl p-5 outline-2 outline-primary">
          <div className="w-40 h-35 rounded-4xl bg-black"></div>
          <div className="flex flex-col w-90 ml-2 mt-4 gap-2">
            <div className="flex flex-row gap-2">
              <h1 className="text-lg font-bold font-montserrat text-[#021124]">
                {item.projectName}
              </h1>
              <h2 className="text-sm font-semibold font-montserrat bg-nav h-7 px-2 py-1 ml-auto rounded-2xl text-[#06275A]">
                {item.techStack}
              </h2>
            </div>
            <p className="text-sm font-[450] font-montserrat text-[#021124]/50">
              {item.projectDesc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
const RecommendProject = () => {
  return (
    <>
      <h1 className="self-start text-2xl font-bold font-montserrat text-[#021124]">
        Recommended Projects
      </h1>
      <div className="flex flex-row overflow-x-auto items-center">
        {DummyProjectItem.map((item) => (
          <ProjectItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default RecommendProject
