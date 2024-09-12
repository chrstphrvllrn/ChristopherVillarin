


import React from 'react'
import { Link } from 'react-router-dom'
import IconLinkedin from './icons/linkedin'
import IconGmail from './icons/gmail'

const NavBar = () => {
    return (
        <div className='w-full  text-[#1B224A] font-light py-7 sm:py-7  md:py-7 lg:py-8 xl:py-8 '>
            <div className="h-10  mx-auto md:px-14 lg:px-27 flex"> {/** max-w-[1240px]*/}
                {/* <div className="p-8 w-full bg-slate-300"> </div> */}
                <div className='w-full flex flex-row justify-center items-center'>
                    {/* <div className='flex text-1xl md:text-2xl lg:text-3xl font-bold mr-5 text-[#1B224A]'>VILL<span className='text-[#1B224A]'>ARIN</span></div> */}

                    <div className='w-3/4 flex flex-row justify-start gap-10'>
                        <ul className='flex rounded-full font-medium 
                        sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm
                        hidden sm:flex md:flex lg:flex xl:flex'>
                            <Link to="/" 
                            className='
                            hover:text-[#000]
                            rounded-l-full
                            bg-[#f3f3f3]
                            hover:bg-[#D5D5D8]' 
                            style={{ transition: 'background-color 0.3s' }}> 
                                <li className='p-3 mx-5  cursor-pointer hover:scale-105 transition-all duration-500' >HOME</li>
                            </Link>
                            {/*bg-[#f3f3f3] hover:bg-[#fac541]*/}
                            <p className='pt-3 pb-3 font-light text-gray-300 bg-[#f3f3f3]'>|</p>
                            <Link to="/portfolio" className='hover:text-[#000] bg-[#f3f3f3] hover:bg-[#D5D5D8] ' style={{ transition: 'background-color 0.3s' }}> <li className='p-3 mx-5 cursor-pointer hover:scale-105 transition-all duration-500' >PORTFOLIO</li></Link>
                            <p className='pt-3 pb-3 font-light text-gray-300 bg-[#f3f3f3]'>|</p>
                            <Link to="/history" className='hover:text-[#000] bg-[#f3f3f3] hover:bg-[#D5D5D8] ' style={{ transition: 'background-color 0.3s' }}><li className='p-3 mx-5 cursor-pointer hover:scale-105 transition-all duration-500' >WHERE I'VE BEEN</li></Link>
                            <p className='pt-3 pb-3 font-light text-gray-300 bg-[#f3f3f3]'>|</p>
                            <Link to="/skills" className='hover:text-[#000] rounded-r-full bg-[#f3f3f3] hover:bg-[#D5D5D8]' style={{ transition: 'background-color 0.3s' }}> <li className='p-3 mx-5 cursor-pointer hover:scale-105 transition-all duration-500'  >SKILLS</li></Link>
                            {/* <button className='bg-[#000000] text-[#FFF] w-[100px] h-5/6 rounded-full font-regular'>Learn More</button> */}
                        </ul>
                        {/* <ul className='flex bg-[#f3f3f3] rounded-full font-medium text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md hover:bg-[#fac541] hover:text-[#000] cursor-pointer'>
                            <li className='p-4 mx-5 '>
                            
                            </li>
                        </ul> */}
                       </div>
                       <div className='w-1/4 flex flex-row justify-end '>
                            <div className='flex flex-row items-center     '>
                                <Link to="https://www.linkedin.com/in/christophervillarin" target="_blank" rel="noopener noreferrer" className='pt-3 pb-3  pl-3 pr-3 bg-[#f3f3f3] rounded-l-full'>
                                    <IconLinkedin></IconLinkedin>
                                </Link>
                                <button onClick={() => navigator.clipboard.writeText('christopher.villarin.wo@gmail.com')} className='pt-3 pb-3   pl-3 pr-3 bg-[#f3f3f3]  rounded-r-full' >
                                    <IconGmail></IconGmail>
                                </button>

                            </div>
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



