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
            <div className="container text-md bg-white rounded-xl p-7 text-gray-500 max-h-50 overflow-y-auto">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsam debitis cum libero blanditiis eos minus tempore culpa pariatur
                    officiis ad corporis saepe, rem sapiente repellat quae atconsequuntur assumenda perferendis doloribus odit! Optio perferendis ut excepturi
                    recusandae modi. Quidem dolore eaque non repudiandae? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, impedit, pariatur voluptas doloremque enim ab iusto ea eaque sunt recusandae magni? Sed explicabo debitis vel voluptate dolorem necessitatibus numquam suscipit ratione amet incidunt. Illo soluta assumenda dignissimos ipsa voluptatem ea eaque, distinctio quidem placeat cumque natus consequuntur dolorem, in quasi libero incidunt sed, possimus labore ex quam. Quis suscipit consectetur rem veritatis amet quidem necessitatibus aliquam beatae exercitationem autem laborum reiciendis ullam rerum, architecto fuga molestias, corrupti sed fugiat dignissimos ab. Perferendis similique deserunt, illum corrupti aut iusto quia ipsa ducimus quo perspiciatis praesentium atque consectetur repellendus dolorum quidem vel!
                </p>
            </div>
            <p className='text-center text-gray-600 -m-2 -mt-4 text-xs font-semibold'>Jawaban di buat oleh AI yang mungkin bisa saja salah</p>
        </div>
    )
}

export default FeedbackAI