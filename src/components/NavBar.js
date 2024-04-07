


import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full bg-[#FFF] text-[#122947] font-light  py-4'>
            <div className="flex justify-between items-center h-16 max-w-[1240px] mx-auto px-4 ">
                {/* <div className="p-8 w-full bg-slate-300"> </div> */}
                <h1 className='text-1xl md:text-2xl font-bold'>VILLARIN</h1>
                <ul className='flex'>
                    <li className='p-4'>Home</li>
                    <li className='p-4'>About</li>
                    <li className='p-4'>Contact</li>
                    {/* <button className='bg-[#000000] text-[#FFF] w-[100px] h-5/6 rounded-full font-regular'>Learn More</button> */}
                </ul>
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> */}

            </div>
        </div>
    )
}

export default NavBar