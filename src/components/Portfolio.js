import React from 'react'
// import bgImage from '../bg.png';
import NavBar from './NavBar.js'

const Portfolio = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <div>
            <NavBar />
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}
                    <p>MY PORTFOLIO</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio