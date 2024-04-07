import React from 'react'
import bgImage from '../bg.png';

const Hero = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        <div className="w-full flex flex-col md:flex-row text-[#030303] font-light" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="w-full h-[90vh] flex flex-col text-left justify-center mx-auto max-w-[1240px] ">
                <p className='text-5xl p-4 font-bold w-full leading-snug'>I'm Chris<br />Front End Developer and <br /> Creative Developer</p>
                <h1 className='text-md p-4 text-[#626c81] w-full '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br />eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br />quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h1>
                <div className='p-4 w-full flex flex-row'>
                    <button className='bg-[#fac541] text-[#000] w-[200px] rounded-full font-medium  py-3 px-4 '>Learn More</button>
                    {/* <button className='bg-[#4267B2] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button>
                    <button className='bg-[#0077B5] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button> */}
                </div>
            </div>
        </div>
    )
}

export default Hero