import React from 'react'
// import bgImage from '../bg.png';

const Hero = () => {
    return (
        // bg-[url('https://fastly.picsum.photos/id/972/1600/900.jpg?grayscale&hmac=W638WD8WqRiozMXbLvTcudGIQ8EFsXe7ljBjSXFSCz0')] bg-center
        //  style={{ backgroundImage: `url(${bgImage})` }}
        <div className="w-full flex flex-col md:flex-row text-[#030303] font-light ">
            <div className="w-full h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1536px]"> {/**/}
                <p className='text-4xl p-4 font-light w-full leading-snug'>Hey there, I'm<br />  <p className='text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-medium bebas-neue-regular '>CHRISTOPHER<br/>VILLARIN</p></p>
                <p className='text-md pt-4 text-[#626c81] w-full font-regular '>a Front End Developer / Creative Developer</p>
                <p className='text-md pb-4 text-[#626c81] w-full font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>tempor incididunt ut labore et dolore magna aliqua. </p>
                <div className='w-full flex flex-row'>
                    <button className='bg-[#fac541] text-[#000] w-[180px] rounded-full font-medium  py-3 px-1 mr-3 '>About me</button>
                    <button className='bg-[#000] text-[#fff] w-[180px] rounded-full font-medium  py-3 px-1 '>Contact</button>
                    {/* <button className='bg-[#4267B2] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button>
                    <button className='bg-[#0077B5] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button> */}
                </div>
            </div>
        </div>
    )
}

export default Hero