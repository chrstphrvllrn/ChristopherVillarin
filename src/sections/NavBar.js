


// import React from 'react'
import { Link } from 'react-router-dom'
import IconLinkedin from '../components/icons/linkedin'
import IconGmail from '../components/icons/gmail'
import Hamburger from '../components/icons/hamburger'

const NavBar = () => {
    return (
        <>
        <section className='
        w-full text-text-dark font-light 
        py-3 sm:py-3  md:py-5 lg:py-6 xl:py-6 px-8 sm:px-8 md:px-4 '>
          
            <div className="h-10 mx-auto md:px-14 lg:px-27 flex"> 
              
                <div className='w-full flex flex-row justify-center items-center'>
                 
                    <div className='w-3/4 flex flex-row justify-start gap-10  max-md:hidden '>
                        <ul className='flex rounded-full font-medium 
                        sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm
                       
                        sm:flex md:flex lg:flex xl:flex'>
                            <Link to="/" className='hover:text-button-dark bg-white'  style={{ transition: 'background-color 0.3s' }}> 
                                <li className='p-3 mx-5 md:mx-2  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >HOME</li>
                            </Link>
                  
                            <p className='pt-3 pb-3 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/history" className='hover:text-button-dark bg-white' style={{ transition: 'background-color 0.3s' }}><li className='p-3 mx-5 md:mx-2  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >WHERE I'VE BEEN</li></Link>
                            
                            <p className='pt-3 pb-3 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/skills" className='hover:text-button-dark bg-white ' style={{ transition: 'background-color 0.3s' }}> <li className='p-3 mx-5 md:mx-2 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'  >SKILLS</li></Link>
                           
                        </ul>
                   
                       </div>
                       <div className='w-3/4 hidden max-md:block justify-start'>

                             <Hamburger></Hamburger>
                       
                        </div>
                       <div className='w-1/4 flex flex-row justify-end'>
                            
                            <div className='flex flex-row items-center'>
                                
                                <Link to="https://www.linkedin.com/in/christophervillarin" target="_blank" rel="noopener noreferrer" className='pt-3 pb-3  pl-3 pr-3 bg-[#fff] rounded-l-full'>
                                 
                                    <IconLinkedin></IconLinkedin>
                                
                                </Link>
                               
                                <div onClick={() => navigator.clipboard.writeText('christopher.villarin.wo@gmail.com')} className='pt-3 pb-3 pl-3 pr-3 bg-[#fff] rounded-r-full' >
                                 
                                    <IconGmail></IconGmail>
                               
                                </div> 
       
                           
                            </div>
                        </div>
                </div>

            </div >
        </section >
        </>
    )
}

export default NavBar



