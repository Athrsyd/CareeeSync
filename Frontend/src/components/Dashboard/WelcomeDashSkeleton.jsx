import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const WelcomeDashSkeleton = () => {
  return (
    <Skeleton 
      className=" md:w-160 lg:w-180 md:h-60 lg:h-60 rounded-2xl shadow-xl backdrop-blur-md flex flex-col px-10 bg-primary" 
    width={690}
    height={230}
    style={{
        borderRadius: '1rem'
    }}
    />
  )
}

export default WelcomeDashSkeleton
