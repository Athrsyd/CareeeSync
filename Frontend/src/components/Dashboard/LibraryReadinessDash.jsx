import React from 'react'

const ProjectsAndSkills = [
  {
    id: 1,
    title: "Health Tracker App",
    description:
      "Explore over 50 real-world briefs to build a competitive industry portfolio.",
    hrefDesc: "Browse all projects",
  },
  {
    id: 2,
    title: "Skill Readiness",
    description:
      "Compare your profile against top-tier tech company requirements.",
    hrefDesc: "Check Readiness",
  },
];

const CardProjectAndSkill = ({ item }) => {
  return (
    <>
      <div
        className={`flex flex-col gap-2 w-125 h-55 p-3 rounded-2xl ${item.id === 1 ? `bg-[#06275A]` : `bg-primary`}`}
      >
        <h1 className="text-3xl font-[450] font-montserrat text-white mt-4 ml-4">
          {item.title}
        </h1>
        <p className="text-lg font-[450] font-montserrat text-white/50 w-92 mt-2 ml-4">
          {item.description}
        </p>
        <a
          href="#"
          className="flex flex-row gap-2 text-lg font-[450] font-montserrat text-nav hover:scale-105 transition-all ease-in-out duration-300 px-4 py-2 rounded-lg w-max mr-4"
        >
          {item.hrefDesc}
          {/* Arrow Icon */}
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-auto mb-auto"
          >
            <path
              d="M15.3027 7.03376H0.78125C0.57405 7.03376 0.375336 7.11607 0.228823 7.26258C0.0823102 7.40909 0 7.60781 0 7.81501C0 8.02221 0.0823102 8.22092 0.228823 8.36743C0.375336 8.51395 0.57405 8.59626 0.78125 8.59626H15.3027L9.60205 14.2921C9.45507 14.439 9.37249 14.6384 9.37249 14.8463C9.37249 15.0541 9.45507 15.2535 9.60205 15.4005C9.74903 15.5474 9.94839 15.63 10.1562 15.63C10.3641 15.63 10.5635 15.5474 10.7104 15.4005L17.7417 8.36921C17.8148 8.2966 17.8728 8.21025 17.9123 8.11514C17.9519 8.02003 17.9723 7.91802 17.9723 7.81501C17.9723 7.71199 17.9519 7.60999 17.9123 7.51488C17.8728 7.41976 17.8148 7.33342 17.7417 7.26081L10.7104 0.229557C10.6377 0.156778 10.5513 0.0990472 10.4562 0.0596598C10.3611 0.0202723 10.2592 2.02888e-09 10.1562 0C10.0533 -2.02888e-09 9.95141 0.0202724 9.85632 0.0596598C9.76123 0.0990472 9.67483 0.156778 9.60205 0.229557C9.52927 0.302335 9.47154 0.388736 9.43215 0.483825C9.39277 0.578915 9.37249 0.680832 9.37249 0.783756C9.37249 0.88668 9.39277 0.988597 9.43215 1.08369C9.47154 1.17878 9.52927 1.26518 9.60205 1.33796L15.3027 7.03376Z"
              fill="#C3E9FE"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

const LibraryReadinessDash = () => {
  return (
    <>
      <div className="flex flex-row gap-6 justify-center">
        {ProjectsAndSkills.map((item) => (
          <CardProjectAndSkill key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default LibraryReadinessDash
