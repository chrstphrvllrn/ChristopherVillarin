import React from 'react'
import NavBar from './NavBar.js'
import hogarth from '../images/companylogos/hogarth.png';
import smartly from '../images/companylogos/smartly.svg';
import sizmek from '../images/companylogos/sizmek.jpg';
import wideout from '../images/companylogos/wideout.png';
import certificate from '../images/icons/certificate.svg';

const History = () => {
    return (

        <>
            <NavBar />

            <section className="w-full flex flex-col md:flex-row text-[#1B224A] font-light mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] ">

                <div className="w-1/2  min-h-[30vh] flex flex-col md:flex-col text-[#1B224A] font-light mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] p-5 m-5 gap-5 ">
                    <p className='text-md font-bold'>Where I've been..</p>
                    <div className="w-full flex flex-row text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-0  p-5 m-5 gap-5 text-white">
                        <div className="w-[260px] h-[150px]  flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer">    <img src={hogarth} className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Hogarth</h2><h3 className='text-xs'>2023 - present</h3> </div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={smartly} className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Smartly</h2><h3 className='text-xs'>2018 - 2023</h3></div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={sizmek} className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Sizmek</h2><h3 className='text-xs'>2015 - 2017</h3></div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={wideout} className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>WideOut</h2><h3 className='text-xs'>2014 - 2015</h3></div>
                    </div>
                    <div className="w-full  flex flex-row text-center text-xs justify-end mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-0  p-5 m-5 gap-5">
                        <div className="w-[260px] h-[200px] flex flex-col justify-between items-center bg-gray-0 hover:bg-gray-200 cursor-pointer"> <img src={certificate} className='border p-7 rounded-lg' /> <h2 className='text-md font-bold'>Tailwind CSS From Scratch | Learn By Building Projects</h2> </div>
                        <div className="w-[260px] h-[200px] flex flex-col justify-between items-center bg-gray-0 hover:bg-gray-200 cursor-pointer"> <img src={certificate} className='border p-7 rounded-lg' /> <h2 className='text-md font-bold'>MERN 2024 Edition - MongoDB, Express, React and NodeJS</h2></div>
                        <div className="w-[260px] h-[200px] flex flex-col justify-between items-center bg-gray-0 hover:bg-gray-200 cursor-pointer"> <img src={certificate} className='border p-7 rounded-lg' /> <h2 className='text-md font-bold'>React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</h2></div>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col md:flex-row text-[#1B224A] font-light mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] ">

                    <div className="w-full min-h-[70vh] flex flex-col text-left justify-center items-center  mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-0">

                        <div className="w-[90%] h-[90%]  rounded-lg flex justify-center items-center bg-gray-100 hover:bg-gray-100 cursor-pointer">
                            <h2 className='text-md font-bold'>WideOut</h2>
                        </div>
                    </div>
                </div>


            </section>

            {/* <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> 
                    <h2 className='text-md'>Smartly</h2>
                    <div className="w-[260px] h-[217px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 cursor-pointer"> 
                                   
                      </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-100"> 
                    <h2 className='text-md'>Sizmek</h2>
                    <div className="w-[260px] h-[217px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 cursor-pointer"> 
                                   
                      </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> 
                    <h2 className='text-md'>Wideout</h2>
                    <div className="w-[260px] h-[217px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 cursor-pointer"> 
                                   
                      </div>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row text-[#030303] font-light  ">
                <div className="w-full min-h-[40vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-100"> 

            
                    <h1 className='text-xl font-bold'>Certificates</h1>
                    <h2 className='text-md'>Udemy: Tailwind CSS From Scratch | Learn By Building Projects</h2>
                    <h2 className='text-md'>Udemy: MERN 2024 Edition - MongoDB, Express, React and NodeJS</h2>
                    <h2 className='text-md'>Udemy: React, NodeJS, Express & MongoDB - The MERN Fullstack Guide</h2>
                    <h2 className='text-md'>Udemy: Understanding APIs and RESTful APIs Crash Course</h2>
                    <h2 className='text-md'>Udemy: Microservices with Node JS and React</h2>
                    <h2 className='text-md'>Udemy: Mastering AWS: Featuring S3</h2>
                    <h2 className='text-md'>Udemy: Complete Web & Mobile Designer: UI/UX, Figma, +more</h2>
                  
                </div>
               
            </div> */}
        </>
    )
}

export default History