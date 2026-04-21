import React from 'react'
import IconAI from '../../assets/IconAI.svg';


const FeedbackAI = () => {
  return (
                        <div className="container flex flex-col p-5 gap-5 bg-secondary w-5/8 h-auto rounded-xl ">
                        <div className=" flex flex-col items-start justify-start h-full">
                            <div className="flex flex-row items-center gap-2">
                                <img src={IconAI} alt="AI Icon" width="30" height="30" />
                                <div className="">
                                    <h1 className='font-bold text-xl '>AI Insight</h1>
                                    <p className='text-md text-gray-500'>Based on your responses, here's your current skill evaluation.</p>
                                </div>
                            </div>
                        </div>
                        <div className="container bg-white rounded-xl p-7 text-gray-500 h-full">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam debitis cum libero blanditiis eos minus tempore culpa pariatur
                                officiis ad corporis saepe, rem sapiente repellat quae atconsequuntur assumenda perferendis doloribus odit! Optio perferendis ut excepturi
                                recusandae modi. Quidem dolore eaque non repudiandae?
                            </p>
                        </div>
                        <p className='text-center text-gray-600 -m-2 -mt-4 text-xs font-semibold'>Jawaban di buat oleh AI yang mungkin bisa saja salah</p>
                    </div>
  )
}

export default FeedbackAI