import React from 'react'
import NavBar from './NavBar.js'
import IconPlay from './icons/play.js'
import supermario from '../images/thumbnails/supermario-thumb.png';
import banner1 from '../images/thumbnails/banner_1.png';
import banner2 from '../images/thumbnails/banner_2.png';
import banner3 from '../images/thumbnails/banner_3.png';
import banner4 from '../images/thumbnails/banner_6.png';
import banner5 from '../images/thumbnails/banner_5.png';
import banner6 from '../images/thumbnails/banner_11.png';
import banner7 from '../images/thumbnails/banner_8.png';
import banner8 from '../images/thumbnails/banner_2.png';
import banner9 from '../images/thumbnails/banner_9.png';
import banner10 from '../images/thumbnails/banner_10.png';

import blank from '../images/blank.png';
import Project from './icons/project.js';
// import banner2 from '../300x250_2.jpg';
// import banner2 from '../300x250_3.jpg';
// import banner4 from '../300x250_4.jpg';
// import banner5 from '../300x250_5.jpg';
// import banner6 from '../300x250_6.jpg';
// import banner7 from '../300x250_7.jpg';
// import banner8 from '../300x250_8.jpg';

const Portfolio = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <div className=''>
            <NavBar />
            <div className="w-full flex flex-col text-[#030303] font-light bg-[#f3f3f3] ">
                <div className="w-full h-auto min-h-[50vh] flex flex-col items-start text-left justify-center mx-auto 
                sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] 2xl:max-w-[1636px]
                gap-3">
                <div className="w-full h-full flex items-center flex-wrap justify-center sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row transition-all duration-2000 ease-in-out transform gap-2" style={{ transition: 'grid 0.5s ease' }}>
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
            {/* <div className="w-full flex flex-col md:flex-row text-[#030303] font-light bg-slate-50  ">
                <div className="w-full h-auto flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                    <div className="w-full h-full flex items-center flex-col sm:flex-col md:flex-col lg:flex-row sm:items-center ">
                        
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  bg-slate-50 ">
                <div className="w-full h-auto flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] gap-3">
                <div className="w-full h-full flex items-center flex-col sm:flex-col md:flex-col lg:flex-row sm:items-center ">
                        
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Portfolio