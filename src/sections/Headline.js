

// import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

import React, { useEffect } from 'react';
import HtmlBanners from './HtmlBanners.js'
import { Link } from 'react-router-dom'

import DrawerMessage from '../components/DrawerMessage.js'

function Headline() {

    return (
      <>

            <section className='
            flex 
            flex-col md:flex-row 
            min-h-[75vh] sm:min-h-[75vh] md:min-h-[45vh] lg:min-h-[70vh] xl:min-h-[80vh] 
            transition-all duration-150 ease-in-out 
          
            '>
                    
                    <div className="
                        w-full sm:w-full md:w-1/2 
                        pl-8 sm:pl-8 md:pl-16 
                        pr-8 sm:pr-8 md:pr-0
                        flex flex-col md:flex-row " >

                        <div className="
                            w-full flex flex-col 
                            text-left 
                            justify-center 
                            mx-auto 
                            py-10 sm:py-4 md:py-4 lg:py-5 xl:py-5 
                            gap-y-7 sm:gap-y-7 md:gap-y-6 lg:gap-y-7 xl:gap-y-8
                            ">  
                            
                            <p className='
                            pl-0 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
                            text-4xl 
                            font-light 
                            w-full 
                            leading-none
                            text-textStrong
                            transition-all duration-150 ease-in-out
                            select-none'>
                                {/* Hey there, I'm */}
                                <TypeAnimation  sequence={[
                                `Hey there, I'm`, 2000,
                                ``, 100,
                                `Hey there, I'm`, 2000,
                                ``, 500,
                            ]}
                            speed={40}
                            style={{ whiteSpace: 'pre-line',  display: 'block' }}
                            repeat={Infinity}
                            />
                        
                             </p> 

                               <h1 className='
                             bebas-neue-regular
                            pl-0 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
                            text-7xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[8rem] 2xl:text-[9rem] 3xl:text-[10rem] 4xl:text-[14rem]
                            font-medium 
                             
                            text-text-brand
                          
                            leading-[0.8em] sm:leading-[0.8em] md:leading-[0.8em] xl:leading-[0.8em]
                            select-none
                            '>
                       
                            CHRISTOPHER<br />VILLARIN

                            </h1>
                                                       
                                <p className='text-sm px-0 sm:px-8 md:px-4 text-text-light w-full font-light transition-all duration-150 ease-in-out select-none'>a Front End Developer / Creative Developer<br></br>from the Philippines specializing in developing different kind of banners. With 8 years experienced of developing fully interactive rich media ad units intended to engage the user. In my free time, i'm studying ReactJS, NodeJS and TailwindCSS</p>
                                <div className='w-full flex flex-row px-0 sm:px-8 md:px-4 '>
                               
                                {/* <Link to="/HtmlBanners">  */}
                                {/* <button 
                                onClick={() => { }}
                                >Check my Portfolio</button>
                              */}
                                <DrawerMessage buttonName='Leave a message'/>
                                {/* </Link> */}
                                {/* <button className='text-sm bg-none border border-button-dark hover:bg-[#2E2F2F] text-[#1B224A] hover:text-[#fff] w-[140px] rounded-full font-medium  py-3 px-1  transition-all duration-150 ease-in-out ' style={{ transition: 'background-color 0.3s' }}>Contact</button> */}
                           
                                </div>
                        </div>
                    </div>

                    <div className="
                    w-full sm:w-full md:w-1/2 
                    pr-8 sm:pr-8 md:pr-16 
                    pl-8 sm:pl-8 md:pl-0 
                    flex 
                    flex-row  md:flex-row 
                    justify-center 
                    items-center 
                    text-[#030303] 
                    transition-all 
                    duration-150
                    ease-in-out" >

                        <div className="
                        w-full 
                        min-h-[40vh] sm:min-h-[50vh] md:min-h-[50vh] lg:min-h-[70vh] xl:min-h-[80vh] 
                        bg-[url('./images/background/iphone7.jpg')] 
                        bg-contain 
                        bg-center
                        bg-no-repeat" >
                        </div>
                        {/* https://www.freepik.com/premium-vector/man-sits-desk-with-laptop-plant-background_245630311.htm#query=programmer&position=16&from_view=keyword&track=ais_hybrid&uuid=6de44dc7-e8e8-4e15-9c68-9e9c11029bc8 */}
                        {/* https://www.freepik.com/premium-vector/illustration-programmer-computer-vector-technology-concept-web-digital-design-programming_246000501.htm#from_view=detail_alsolike */}
                        {/* https://www.freepik.com/premium-vector/man-sits-desk-with-computer-monitor-showing-man-working-his-computer_245642724.htm#from_view=detail_alsolike */}
                        {/* https://www.freepik.com/premium-vector/illustration-programmer-computer-vector-technology-concept-web-digital-design-programming_246000604.htm#from_view=detail_alsolike */}
                    </div>
                   
            </section>
    </>
    );
}

export default Headline;
