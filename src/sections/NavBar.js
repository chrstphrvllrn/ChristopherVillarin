


// import React from 'react'
import { Link } from 'react-router-dom'
import IconLinkedin from '../components/icons/linkedin'
import IconGmail from '../components/icons/gmail'
import Hamburger from '../components/icons/hamburger'
import { socialMedia  } from '../constants/index';
import { Toaster, toast } from 'sonner'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const NavBar = () => {

   

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
                 
                    <div className='w-3/4 flex flex-row justify-start gap-10  max-md:hidden '>
                        <ul className='flex rounded-full font-medium 
                        sm:text-xs md:text-xs lg:text-xs xl:text-xs 2xl:text-sm
                        pl-0 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
                      
                        sm:flex md:flex lg:flex xl:flex '>
                            <Link to="/" className='hover:text-button-lightgrey bg-white'  style={{ transition: 'background-color 0.3s' }}> 
                                <li className='py-3  cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >HOME</li>
                            </Link>
                  
                            <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/history" className='hover:text-button-lightgrey bg-white' style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >WHERE I'VE BEEN</li></Link>
                            
                                <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                           <Link to="/HtmlBanners" className='hover:text-button-lightgrey bg-white' style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3   cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out' >PORTFOLIO</li></Link>
                            
                        
                            {/* <p className='py-3 px-6 font-light text-gray-300 bg-white'>|</p>
                            
                            <Link to="/skills" className='hover:text-button-lightgrey bg-white ' style={{ transition: 'background-color 0.3s' }}>
                                <li className='py-3 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'  >SKILLS</li></Link>
                            */}
                        </ul>
                   
                       </div>
                       <div className='w-3/4 hidden max-md:block justify-start'>

                             <Hamburger></Hamburger>
                       
                        </div>
                       <div className='w-1/4 flex flex-row justify-end'>
                            
                            <div className='flex flex-row items-cente gap-4
                              pr-0 sm:pr-0 md:pr-4 lg:pr-4 xl:pr-4 '>
                                
                                <Link to={socialMedia.linkedin.value} target="_blank" rel="noopener noreferrer" >
                                 
                                    <IconLinkedin></IconLinkedin>
                                
                                </Link>
                               
                                <CopyToClipboard text="christopher.villarin.wo@gmail.com">
                                        <button onClick={() => {
                                            toast.success('Email Address has copied to clipboard')
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



