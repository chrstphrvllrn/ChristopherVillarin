


import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import IconLinkedin from '../components/icons/linkedin'
import IconGmail from '../components/icons/gmail'
import IconWhatsapp from '../components/icons/whatsapp'
import Hamburger from '../components/icons/hamburger'
import { socialMedia  } from '../constants/index';
import { Toaster, toast } from 'sonner'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ReactWhatsapp from 'react-whatsapp';
import CloseBurger from '../components/icons/close';


const NavBar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        console.log("isNavOpen:", isNavOpen);
        document.body.style.overflow = isNavOpen ? "hidden" : "unset";
    }, [isNavOpen]);
    

    const getLinkClass = (path) => {
        return location.pathname === path
          ? "border-b-2 border-[#4F8989] text-[#4F8989] "
          : "text-text-dark hover:text-button-lightgrey";
      };

    return (
        <>
        <section className='
        w-full text-text-dark font-light 
        py-3 sm:py-3  md:py-5 lg:py-6 xl:py-6 
        pl-8 sm:pl-8 md:pl-16 
        pr-8 sm:pr-8 md:pr-16
      '>
          
            <div className="h-10 mx-auto  flex"> 
              
                <div className='w-full flex flex-row justify-center items-center '>

                    {/* Desktop Menu */}
                    <div className='w-3/4 flex flex-row justify-start gap-10  max-md:hidden '>
                        <ul className='flex rounded-full font-medium 
                        sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm
                        pl-0 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
                      
                        sm:flex md:flex lg:flex xl:flex '>
                            <Link to="/" className={getLinkClass("/") + ` bg-white`}   style={{ transition: 'background-color 0.3s' }}> 
                                <li className='py-3  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >HOME</li>
                            </Link>
                  
                            <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/history" className={getLinkClass("/history") + `  bg-white`} style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >WHERE I'VE BEEN</li></Link>
                            
                                <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                           <Link to="/Projects" className={getLinkClass("/Projects") + `  bg-white`} style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >PORTFOLIO</li></Link>
                            
    
                            {/* <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/skills" className='hover:text-button-lightgrey bg-white ' style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'  >SKILLS</li></Link>
                            */}
                        </ul>
                   
                       </div>
                        
                       {/* Mobile Menu */}
                       <div className='w-3/4 hidden max-md:block justify-start'>
                            <Hamburger  onClick={() => { setIsNavOpen((prev) => !prev); }}  className={isNavOpen ? 'hidden' : 'flex ' }></Hamburger>
                            <div className={isNavOpen ? "flex flex-col bg-[rgba(255,255,255,0.5)] w-full h-[100vh] z-10 absolute top-0 left-0 backdrop-blur-md" : "hidden"}>
                                    
                                        <div
                                        className="relative px-8 py-4"
                                        onClick={() => setIsNavOpen(false)}
                                        >
                                        <CloseBurger className='cursor-pointer' ></CloseBurger>
                                        </div> 
                                    
                                        <div  className="flex flex-col relative px-8 py-8">
                                            <Link to="/" className='hover:text-button-lightgrey '  style={{ transition: 'background-color 0.3s' }}> 
                                                <li className='py-3  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out list-none font-bold' >HOME</li>
                                            </Link>
                                            <Link to="/history" className='hover:text-button-lightgrey ' style={{ transition: 'background-color 0.3s' }}>
                                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out list-none font-bold' >WHERE I'VE BEEN</li>
                                            </Link>
                                            <Link to="/Projects" className='hover:text-button-lightgrey ' style={{ transition: 'background-color 0.3s' }}>
                                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out list-none font-bold' >PORTFOLIO</li>
                                            </Link>
                                        </div>
                            </div>
                        </div>
                    
                        {/* Social */}
                       <div className='w-1/4 flex flex-row justify-end'>
                            
                            <div className='flex flex-row items-cente gap-4
                              pr-0 sm:pr-0 md:pr-4 lg:pr-4 xl:pr-4 '>
                                
                                <ReactWhatsapp number="+639174700328" message="Hi">
                                    <IconWhatsapp>   </IconWhatsapp>
                                </ReactWhatsapp>

                                <Link to={socialMedia.linkedin.value} target="_blank" rel="noopener noreferrer" >
                                 
                                    <IconLinkedin></IconLinkedin>
                                
                                </Link>
                               
                                <CopyToClipboard text="christopher.villarin.wo@gmail.com">
                                        <button onClick={() => {
                                            toast.success('Email address copied to clipboard!')
                                            console.log('copied to clipboard')
                                            // navigator.clipboard.writeText('christopher.villarin.wo@gmail.com')
                                        }}>
                                             <IconGmail></IconGmail>
                                        </button>
                                </CopyToClipboard>
                                <Toaster position="bottom-right" />
                              
        

                           
                            </div>
                        </div>
                      
                </div>

            </div >
        </section >
        </>
    )
}

export default NavBar



