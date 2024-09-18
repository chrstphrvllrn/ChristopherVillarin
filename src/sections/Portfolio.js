import React from 'react'
import { workSamples } from '../constants/index.js';
import Project from '../components/icons/project.js';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"

const Portfolio = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <>
   
                {/* bg-[url("./images/background/backgroundportfolio.svg")]
                bg-cover 
                bg-center
                bg-no-repeat */}
            <section id='myPortfolio' className='
                w-full 
                flex 
                flex-col 
                text-[#030303] 
                font-light 
                py-10 md:py-20
                bg-background-light
                '>
                    <div className="
                    w-full 
                    h-auto min-h-[50vh] 
                    flex 
                    flex-col 
                    items-start 
                    justify-center
                    text-left 
                    pl-8 sm:pl-8 md:pl-16 
                    pr-8 sm:pr-8 md:pr-16
                    sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]
                    transition-all duration-500">
                        <p className='w-full flex justify-center py-5 font-medium text-text-dark '>SOME OF MY LATEST WORK</p>
                        <div className="
                        w-full 
                        h-full 
                        flex 
                        items-center 
                        flex-wrap 
                        justify-center
                        sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row 
                        ease-in-out 
                        transform 
                        gap-7
                        transition-all 
                        duration-500
                        ">
                                
                                { workSamples.map(( item, index) => (
                                    
                                
                                    <ScrollAnimation  animateIn='fadeIn' animateOnce={false} duration={0.5} delay={100 * index}>
                                            <Project thumbnail={ item.imgURL } name={ item.name }></Project>

                                    </ScrollAnimation>   
                           
                                ))}     
                              
                                
                            

                       </div>
                </div>
              
            </section>
        
      </>
    )
}

export default Portfolio