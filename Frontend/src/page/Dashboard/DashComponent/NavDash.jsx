import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/Logo_CareerSync.svg'


const NavIcon = [
  {
    id: 1,
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99984 31.6667H14.9998V21.6667H24.9998V31.6667H29.9998V16.6667L19.9998 9.16667L9.99984 16.6667V31.6667ZM6.6665 35V15L19.9998 5L33.3332 15V35H21.6665V25H18.3332V35H6.6665Z"
          fill="#021124"
        />
      </svg>
    ),
    title: "Home",
    path: "",
  },
  {
    id: 2,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 31 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.16672 18.55V29.9333C8.16672 30.6141 7.89631 31.2669 7.41496 31.7482C6.93362 32.2296 6.28078 32.5 5.60005 32.5H2.58339C2.24493 32.5022 1.90938 32.4374 1.59605 32.3094C1.28272 32.1814 0.997802 31.9927 0.757697 31.7542C0.517591 31.5156 0.32704 31.2319 0.197012 30.9194C0.0669844 30.6069 4.73363e-05 30.2718 5.44722e-05 29.9333V18.55C-0.00215971 18.2101 0.0631484 17.8732 0.192189 17.5588C0.321229 17.2444 0.511432 16.9587 0.751759 16.7184C0.992086 16.478 1.27775 16.2878 1.59218 16.1588C1.9066 16.0298 2.24352 15.9645 2.58339 15.9667H5.60005C5.93852 15.9667 6.27365 16.0336 6.58614 16.1636C6.89863 16.2937 7.18232 16.4842 7.42088 16.7243C7.65944 16.9644 7.84815 17.2493 7.97615 17.5627C8.10415 17.876 8.16892 18.2115 8.16672 18.55ZM19.3334 2.58333V29.9333C19.3334 30.2718 19.2665 30.6069 19.1364 30.9194C19.0064 31.2319 18.8159 31.5156 18.5757 31.7542C18.3356 31.9927 18.0507 32.1814 17.7374 32.3094C17.4241 32.4374 17.0885 32.5022 16.7501 32.5H13.7334C13.0511 32.5 12.3966 32.2301 11.9126 31.7493C11.4286 31.2684 11.1545 30.6156 11.1501 29.9333V2.58333C11.1544 1.89954 11.428 1.24499 11.9115 0.761469C12.395 0.277944 13.0496 0.00436942 13.7334 0H16.7501C17.4352 0 18.0923 0.272172 18.5767 0.756641C19.0612 1.24111 19.3334 1.89819 19.3334 2.58333ZM30.4834 11.2167V29.9333C30.4834 30.6141 30.213 31.2669 29.7316 31.7482C29.2503 32.2296 28.5974 32.5 27.9167 32.5H24.9001C24.5616 32.5022 24.226 32.4374 23.9127 32.3094C23.5994 32.1814 23.3145 31.9927 23.0744 31.7542C22.8343 31.5156 22.6437 31.2319 22.5137 30.9194C22.3836 30.6069 22.3167 30.2718 22.3167 29.9333V11.2167C22.3167 10.8774 22.3835 10.5415 22.5134 10.2281C22.6432 9.91464 22.8335 9.62986 23.0734 9.38997C23.3132 9.15009 23.598 8.9598 23.9115 8.82998C24.2249 8.70015 24.5608 8.63333 24.9001 8.63333H27.9834C28.654 8.65498 29.2899 8.93667 29.7564 9.41882C30.223 9.90096 30.4837 10.5457 30.4834 11.2167Z"
          fill="#021124"
        />
      </svg>
    ),
    title: "Analysis",
    path: "",
  },
  {
    id: 3,
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.66683 30L3.3335 27.6667L15.6668 15.25L22.3335 21.9167L31.0002 13.3333H26.6668V10H36.6668V20H33.3335V15.6667L22.3335 26.6667L15.6668 20L5.66683 30Z"
          fill="#021124"
        />
      </svg>
    ),
    title: "Progress",
    path: "",
  },
  {
    id: 4,
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 34 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.33333 26.6667C2.41667 26.6667 1.63222 26.3406 0.98 25.6883C0.327778 25.0361 0.00111111 24.2511 0 23.3333V3.33333C0 2.41667 0.326667 1.63222 0.98 0.98C1.63333 0.327777 2.41778 0.00111111 3.33333 0H13.3333L16.6667 3.33333H30C30.9167 3.33333 31.7017 3.66 32.355 4.31333C33.0083 4.96667 33.3344 5.75111 33.3333 6.66667V23.3333C33.3333 24.25 33.0072 25.035 32.355 25.6883C31.7028 26.3417 30.9178 26.6678 30 26.6667H3.33333ZM3.33333 23.3333H30V6.66667H15.2917L11.9583 3.33333H3.33333V23.3333Z"
          fill="#021124"
        />
      </svg>
    ),
    title: "Projects",
    path: "",
  },
];

const SidebarIcon = ({ item }) => {
  return (
    <>
      <div className="flex flex-row items-center justify-start w-full h-10 cursor-pointer hover:bg-white rounded-l-full">
        <div className="flex flex-col justify-center items-center h-12 w-12">
          {item.icon}
        </div>
        <div className="w-20">
          <h1 className="text-sm font-bold font-inclusive-sans ml-2">
            {item.title}
          </h1>
        </div>
      </div>
    </>
  );
}

const NavDash = () => {
  return (
    <aside className="bg-nav top-0 left-0 h-screen w-40 border-t-0">
      <div className="flex w-full h-full flex-row md:justify-start justify-around gap-5 items-center lg:flex-col lg:items-center md:py-6 md:flex-col md:items-center">

        {/* Logo */}
        <div className="flex flex-row justify-center items-center mb-4 w-full">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="logo" className="w-8 h-8" />
            <h1 className="text-[12px] font-bold text-[#5482B4] font-inclusive-sans mt-2 text-center">
              CareerSync
            </h1>
          </Link>
        </div>

        {NavIcon.map((item) => (
          <Link to={item.path} key={item.id} className="w-full pl-4">
            <SidebarIcon key={item.id} item={item} />
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default NavDash
