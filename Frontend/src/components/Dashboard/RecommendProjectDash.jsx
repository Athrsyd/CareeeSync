import React from 'react'
import { Link } from 'react-router-dom';

const DummyProjectItem = [
  {
    id: 1,
    logo: "",
    projectName: "Health Tracker App",
    techStack: "React Native",
    projectDesc:
      "Building a high-performance wellness tracker with real-time biometric data visualization and..",
  }
];

const ProjectItem = ({ item }) => {
  return (
    <>
      <div className="flex flex-row gap-2 bg-white/20 w-140 h-45 rounded-xl shadow-lg p-5 outline-2 outline-primary">
        <div className="w-40 h-35 rounded-4xl bg-black"></div>
        <div className="flex flex-col w-90 ml-2 mt-3 gap-2">
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
          <a
            href="#"
            className="text-sm font-[450] ml-auto font-montserrat text-white hover:scale-105 transition-all ease-in-out duration-300 bg-[#06275A] px-4 py-2 rounded-lg w-max"
          >
            Start Project
          </a>
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
      <div className="flex flex-row overflow-x-auto gap-5 p-2 -ml-2 items-center">
        <div className="flex flex-row gap-2 bg-white/20 w-19/20 h-65 rounded-xl items-center shadow-lg p-5 outline-2 outline-primary">
          <div className="w-30 h-27 rounded-2xl flex justify-center items-center  bg-nav">
            <svg
              width="45"
              height="45"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.7959 16.5375L18.75 10.6812L12.8292 4.76457C14.0375 4.37916 15.3292 4.16666 16.6667 4.16666C18.6191 4.16609 20.5446 4.62288 22.2887 5.50044C24.0328 6.37799 25.5471 7.65191 26.7102 9.22008C27.8733 10.7883 28.6529 12.6071 28.9865 14.5308C29.3201 16.4545 29.1985 18.4297 28.6313 20.2979L41.6667 33.3333C42.2139 33.8805 42.6479 34.5301 42.944 35.245C43.2402 35.9599 43.3926 36.7262 43.3926 37.5C43.3926 38.2738 43.2402 39.0401 42.944 39.755C42.6479 40.4699 42.2139 41.1195 41.6667 41.6667C41.1195 42.2138 40.4699 42.6479 39.755 42.944C39.0401 43.2401 38.2739 43.3925 37.5 43.3925C36.7262 43.3925 35.96 43.2401 35.245 42.944C34.5301 42.6479 33.8805 42.2138 33.3334 41.6667L20.2979 28.6312C18.1149 29.2951 15.7918 29.3488 13.5805 28.7864C11.3692 28.2241 9.35391 27.0672 7.7532 25.4412C6.15249 23.8151 5.02738 21.782 4.49983 19.5621C3.97228 17.3422 4.06241 15.0202 4.76045 12.8479L10.675 18.75L16.5354 16.7979L16.7959 16.5375Z"
                fill="#5482B4"
              />
            </svg>
          </div>
          <div className="flex flex-col w-full ml-2 mt-3 gap-2">

            <div className="flex flex-row justify-between items-center mb-2 gap-2">
              <h1 className="text-2xl font-bold font-montserrat text-[#021124]">
                Lorem, ipsum dolor.
              </h1>
              <h2 className="text-md font-semibold font-montserrat bg-nav h-7 px-2 py-1 ml-auto rounded-2xl text-[#06275A]">
                Lorem ipsum dolor sit amet.
              </h2>
            </div>
            <div className="w-full h-1 bg-gray-300 rounded-full"></div>
            <div className="flex flex-row gap-2 bg-gray-300 p-2 rounded-lg">
              <p className="text-sm font-semibold font-montserrat text-primary">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quasi commodi aliquam fuga, esse doloribus!
              </p>
            </div>

            <div className="flex flex-row gap-2 bg-gray-300 p-2 rounded-lg">
              <p className="text-sm font-semibold font-montserrat text-primary">
                Output : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores quasi commodi aliquam fuga, esse doloribus!
              </p>
            </div>

            <Link
              to="/dashboard/project"
              className="text-sm font-[450] ml-auto font-montserrat text-white hover:scale-105 transition-all ease-in-out duration-300 bg-[#06275A] px-4 py-2 rounded-lg w-max"
            >
              Start Project
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendProject
