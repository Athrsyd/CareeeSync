/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Eye, EyeOff } from "lucide-react";


const Auth = () => {
    const [isSignIn, setIsSignIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const toggleButton = () => {
        setIsSignIn(!isSignIn);
        setShowPassword(false);
    }
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center gap-4 relative'>
            <div className="background relative -z-30"></div>
            <div className={`container z-10 bg-[#021124]/50 w-4/5 h-4/5 rounded-xl transition-all duration-300 ease-in-out backdrop-blur-xl flex ${isSignIn ? 'flex-row-reverse' : 'flex-row'} items-center gap-6`}>
                <div className={`containter flex flex-col   justify-center w-1/2 ${isSignIn ? 'text-end items-end px-10 ' : 'items-start text-justify pl-10 p-17'}  h-full text-white `}>
                    <h1 className={`${isSignIn ? 'text-4xl' : 'text-4xl'} font-bold mb-2`}>{isSignIn ? 'Keep Proving Your Skills' : 'Build Your Future Skills'}</h1>
                    <p className={`${isSignIn ? 'text-xl' : 'text-lg'}`}>{isSignIn ? 'Continue your journey and track your career progress.' : 'Discover your potential, close your skill gap, and prove your value through real projects.'}</p>
                </div>
                <div className="container w-1/2 h-full bg-[#021124]/90 rounded-xl text-white">
                    <div className="container flex flex-row items-center justify-center h-full w-full">
                        <div className="container w-3/4 h-full flex flex-col items-start justify-center gap-4">
                            <h1 className='font-bold text-3xl text-start px-5'>
                                {isSignIn ? 'Welcome Back!' : 'Create Your Account'}
                            </h1>
                            <form action="" method="post" className='flex flex-col justify-center items-start w-9/10 pl-5 py-3 gap-10'>
                                {!isSignIn && (
                                    <>
                                        <input type="text" name='username' placeholder='Your Name'
                                            className='w-full outline-0 border-b border-b-white/50 py-2 ' />

                                        <input type="text" name='email' placeholder='Your Email'
                                            className='w-full outline-0 border-b border-b-white/50 py-2 ' />
                                        <div className="relative w-full flex items-center">

                                            <input type={showPassword ? "text" : "password"} name='password' placeholder='Create Password'
                                                className='w-full outline-0 border-b border-b-white/50 py-2 ' />
                                            <button className='opacity-50 w-10 h-10' type="button" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </>
                                )}
                                {isSignIn && (<>
                                    <input type="text" name='email' placeholder='Your Email'
                                        className='w-full outline-0 border-b border-b-white/50 py-2 ' />
                                    <div className="relative w-full flex items-center flex-row">
                                        <input type={showPassword ? "text" : "password"} name='password' placeholder='Your Password'
                                            className='w-full outline-0 border-b border-b-white/50 py-2 ' />
                                        <button className='opacity-50 w-10 h-10' type='button' onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                                        </button>
                                    </div>
                                </>)}
                                <div className="w-full flex flex-col items-center justify-center gap-2">
                                    <button className='w-full bg-[#5482B4] rounded-xl py-2 text-white font-bold'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                                    <p className='text-center font-light text-white/50'>{isSignIn ? 'Don\'t have an account?' : 'Already have an account?'}
                                        <span className='text-[#5482B4] font-semibold cursor-pointer' onClick={toggleButton}>{' '}{isSignIn ? 'Sign Up' : 'Sign In'}</span></p>
                                </div>
                            </form>
                        </div>
                        <div className="container w-1/10 h-full flex opacity-50 flex-col items-center justify-center gap-3">
                            <div className="garis bg-white w-0.5 h-35"></div>
                            <p className='text-white'>OR</p>
                            <div className="garis bg-white w-0.5 h-35"></div>
                        </div>
                        <div className=" flex flex-col items-center justify-center gap-5 w-1/10">
                            <button className='flex flex-row items-center justify-center gap-2 w-8 h-8 bg-[#5482B4] rounded-full py-2 text-[#021124]'><FaInstagram /></button>
                            <button className='flex flex-row items-center justify-center gap-2 w-8 h-8 bg-[#5482B4] rounded-full py-2 text-[#021124]'><FaGoogle /> </button>
                            <button className='flex flex-row items-center justify-center gap-2 w-8 h-8 bg-[#5482B4] rounded-full py-2 text-[#021124]'><FaFacebook /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth