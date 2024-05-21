


import React from 'react'
import { Link } from 'react-router-dom'
import IconLinkedin from './icons/linkedin'
import IconGmail from './icons/gmail'

const NavBar = () => {
    return (
        <div className='w-full  text-[#000000] font-light py-7 sm:py-7  md:py-7 lg:py-8 xl:py-8 '>
            <div className="h-16  mx-auto md:px-14 lg:px-27 flex"> {/** max-w-[1240px]*/}
                {/* <div className="p-8 w-full bg-slate-300"> </div> */}
                <div className='w-full flex flex-row justify-end items-center gap-10'>
                    {/* <div className='flex text-1xl md:text-2xl lg:text-3xl font-bold mr-5 text-[#fac541]'>VILL<span className='text-black'>ARIN</span></div> */}
                    <ul className='flex rounded-full font-medium 
                    text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 
                    hidden sm:flex md:flex lg:flex xl:flex'>
                        <Link to="/" className='hover:bg-[#fac541] hover:text-[#000] rounded-l-full bg-[#f3f3f3]' style={{ transition: 'background-color 0.3s' }}> <li className='p-4 mx-5  cursor-pointer' >HOME</li></Link>
                        {/* <p className='p-4 font-light text-gray-400'>|</p> */}
                        <Link to="/portfolio" className='hover:bg-[#fac541] hover:text-[#000] bg-[#f3f3f3]' style={{ transition: 'background-color 0.3s' }}> <li className='p-4 mx-5 cursor-pointer' >PORTFOLIO</li></Link>
                        {/* <p className='p-4 font-light text-gray-400'>|</p> */}
                        <Link to="/history" className='hover:bg-[#fac541] hover:text-[#000] bg-[#f3f3f3]' style={{ transition: 'background-color 0.3s' }}><li className='p-4 mx-5 cursor-pointer' >HISTORY</li></Link>
                        {/* <p className='p-4 font-light text-gray-400'>|</p> */}
                        <Link to="/skills" className='hover:bg-[#fac541] hover:text-[#000] rounded-r-full bg-[#f3f3f3]' style={{ transition: 'background-color 0.3s' }}> <li className='p-4 mx-5 cursor-pointer'  >SKILLS</li></Link>
                        {/* <button className='bg-[#000000] text-[#FFF] w-[100px] h-5/6 rounded-full font-regular'>Learn More</button> */}
                    </ul>
                    {/* <ul className='flex bg-[#f3f3f3] rounded-full font-medium text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md hover:bg-[#fac541] hover:text-[#000] cursor-pointer'>
                        <li className='p-4 mx-5 '>
                          
                        </li>
                    </ul> */}
                    <div className='flex flex-row gap-4'>
                        <IconLinkedin></IconLinkedin>
                        <IconGmail></IconGmail>
                    </div>
                </div>

                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> */}

            </div >
        </div >
    )
}

export default NavBar



