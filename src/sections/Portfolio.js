import React from 'react'
// import NavBar from './NavBar.js'
import banner1 from '../images/thumbnails/banner_1.png';
// import banner2 from '../images/thumbnails/banner_2.png';
import banner3 from '../images/thumbnails/banner_3.png';
import banner4 from '../images/thumbnails/banner_6.png';
import banner5 from '../images/thumbnails/banner_5.png';
import banner6 from '../images/thumbnails/banner_11.png';
import banner7 from '../images/thumbnails/banner_8.png';
// import banner8 from '../images/thumbnails/banner_2.png';
import banner9 from '../images/thumbnails/banner_9.png';
import banner10 from '../images/thumbnails/banner_10.png';
// import blank from '../images/blank.png';
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
                                <Project thumbnail={banner1} name="Banner • 2024 "  ></Project>
                                <Project thumbnail={banner3} name="Banner • 2024" ></Project>
                                <Project thumbnail={banner9} name="Banner • 2024" ></Project>
                                <Project thumbnail={banner5} name="Banner • 2024" ></Project>

                                <Project thumbnail={banner6} name="Banner • 2024" ></Project>
                                <Project thumbnail={banner7} name="Banner • 2024" ></Project>
                                <Project thumbnail={banner4} name="Banner • 2024" ></Project>
                                <Project thumbnail={banner10} name="Banner • 2024" ></Project>
                                {/* <Project thumbnail={banner2} name="banner" ></Project>
                                <Project thumbnail={banner2} name="banner" ></Project>
                                <Project thumbnail={banner2} name="banner" ></Project>
                                <Project thumbnail={banner2} name="banner" ></Project> */}
                            </div>
                </div>
            </div>
        
        </div>
    )
}

export default Portfolio