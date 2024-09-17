import React from 'react'
import { workSamples } from '../constants/index.js';
import Project from '../components/icons/project.js';


const Portfolio = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <div className=''>
        {/* bg-[f3f3f3]*/}
            <div className="
                w-full 
                flex 
                flex-col 
                text-[#030303] 
                font-light 
                bg-background-light
                py-20
                ">
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
                        gap-15
                        transition-all 
                        duration-500">

                                { workSamples.map((item) => (
                               <Project thumbnail={item.imgURL} name={item.name}  ></Project>
                                ))}             
                                 
                            </div>
                </div>
            </div>
        
        </div>
    )
}

export default Portfolio