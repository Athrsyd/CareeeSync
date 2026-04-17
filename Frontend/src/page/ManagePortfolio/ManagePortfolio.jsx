import {useState} from 'react'

const ManagePortfolio = () => {
    // const []
    
    return (
        <div className="ml-40 pb-5 w-full">
            <h1 className="text-2xl font-bold mt-5 ml-5">Manage Portfolio</h1>
            <p className="text-sm text-gray-500 mt-2 ml-5">Here you can manage your portfolio, add new projects, and edit existing ones.</p>
            <div className="ml-5 mt-4 w-full flex flex-row justify-between items-center">
                <form action="/manage-portfolio" method="post" className='w-3/5'>
                    <div className="mb-4">
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Project Name</label>
                        <input type="text" id="fullname" name="fullname" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter project name" required />
                    </div>  
                    <div className="mb-4">
                        <label htmlFor="about_me" className="block text-sm font-medium text-gray-700">Project Description</label>
                        <textarea id="about_me" name="about_me" rows="4" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter project description" required></textarea>
                    </div>
                    <div className="mb-4">
                    <label htmlFor="" className=''>Pilihlah Photo 1:1 untuk Portfolio mu</label> <br />
                    <input type="file"  className='mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm'/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education</label>
                        <textarea id="education" name="educatio" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your education" required></textarea>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700">Hobbies</label>
                        <input type='text' id="hobbies" name="hobbies" rows="4" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your hobbies" required></input>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Pengalaman</label>
                        <input type='text' id="experience" name="experience" rows="4" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your experience" required></input>
                    </div>
                    <ul className='w-17/20'>
                        <label htmlFor="">Your social media </label>
                        <li className='my-5'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">email</label>
                            <input type="email" id="email" name="email" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your email" required />
                        </li>
                        <li className='my-5'>
                            <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700">LinkedIn</label>
                            <input type="text" id="linkedin" name="linkedin" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your LinkedIn profile URL" required />
                        </li>
                        <li className='my-5'>
                            <label htmlFor="github" className="block text-sm font-medium text-gray-700">GitHub</label>
                            <input type="text" id="github" name="github" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your GitHub profile URL" required />
                        </li>
                        <li className='my-5'>
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input type="text" id="phone_number" name="phone_number" className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm" placeholder="Enter your phone number" required />
                        </li>
                    </ul>
                    <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                        Save Portfolio
                    </button>
                </form>
                <div className="container w-2/5 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold mb-4">Pilih Style Portofolio mu</h2>
                </div>
            </div>
        </div>
    )
}

export default ManagePortfolio