import React, { useState } from 'react'
import NavBar from './NavBar.js'
import hogarth from '../images/companylogos/hogarth.png';
import smartly from '../images/companylogos/smartly.svg';
import sizmek from '../images/companylogos/sizmek.jpg';
import wideout from '../images/companylogos/wideout.png';
import certificate from '../images/icons/certificate.svg';

const History = () => {

 
    const myHistory = [
        
        { id: 'hogarth',
            name:'hogarth',
            jobtitle:'Front End Developer',
            description:[
                " Creative Production from PSDs/XDs/AI/Indesign/Figma and other files",
                " Set up and configure dynamic feeds to generate variations in accordance with client requirements.",
                " Apply the provided IDs(CM Placement Ids, DV360 Ids, Dynamic Targeting Keys or Geo) and targeting strategies(Remarketing, Prospecting) to accurately tailor campaigns to specific audiences.",
                " Collaborate with Producers to understand their technical and programming questions and Help identify and evaluate technical solutions and alternatives.",
                " Cross-Browser and Device Compatibility: Testing and optimizing the banners for various web browsers and devices to ensure a seamless user experience across different platforms. This includes addressing any compatibility issues and making necessary adjustments to ensure proper rendering.",

              ],
            tags: ['2023 - present'],
             thumbnail: hogarth,
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP (GreenSock Animation Platform)", "Following Storyboard(PDF, XD, PSD, Indesign,Figma)","Photoshop, Illustrator","Platform: Doubleclick Studio, Flashtalking, Celtra","Version control: Github"]
        },
        { id: 'smartly',
            name:'smartly',
            jobtitle:'Creative Developer',
            description:[
                " Creative Production from PSDs/XDs/AI/Indesign/Figma and other files",
                " Set up and configure dynamic feeds to generate variations in accordance with client requirements.",
                " Apply the provided IDs(CM Placement Ids, DV360 Ids, Dynamic Targeting Keys or Geo) and targeting strategies(Remarketing, Prospecting) to accurately tailor campaigns to specific audiences.",
                " Collaborate with Producers to understand their technical and programming questions and Help identify and evaluate technical solutions and alternatives.",
                " Cross-Browser and Device Compatibility: Testing and optimizing the banners for various web browsers and devices to ensure a seamless user experience across different platforms. This includes addressing any compatibility issues and making necessary adjustments to ensure proper rendering.",

              ],
            tags: ['2018 - 2023'],
             thumbnail: smartly,
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP", "GIT"]
        },
        { id: 'sizmek',
            name:'sizmek',
            jobtitle:'Creative Developer',
            description:[
                " Creative Production from PSDs/XDs/AI/Indesign/Figma and other files",
                " Set up and configure dynamic feeds to generate variations in accordance with client requirements.",
                " Apply the provided IDs(CM Placement Ids, DV360 Ids, Dynamic Targeting Keys or Geo) and targeting strategies(Remarketing, Prospecting) to accurately tailor campaigns to specific audiences.",
                " Collaborate with Producers to understand their technical and programming questions and Help identify and evaluate technical solutions and alternatives.",
                " Cross-Browser and Device Compatibility: Testing and optimizing the banners for various web browsers and devices to ensure a seamless user experience across different platforms. This includes addressing any compatibility issues and making necessary adjustments to ensure proper rendering.",

              ],
            tags: ['2015 - 2017'],
             thumbnail: sizmek,
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP", "GIT"]
        },
        { id: 'wideout',
            name:'wideout',
            jobtitle:'Flash Developer',
            description:[
                " Creative Production from PSDs/XDs/AI/Indesign/Figma and other files",
                " Set up and configure dynamic feeds to generate variations in accordance with client requirements.",
                " Apply the provided IDs(CM Placement Ids, DV360 Ids, Dynamic Targeting Keys or Geo) and targeting strategies(Remarketing, Prospecting) to accurately tailor campaigns to specific audiences.",
                " Collaborate with Producers to understand their technical and programming questions and Help identify and evaluate technical solutions and alternatives.",
                " Cross-Browser and Device Compatibility: Testing and optimizing the banners for various web browsers and devices to ensure a seamless user experience across different platforms. This includes addressing any compatibility issues and making necessary adjustments to ensure proper rendering.",

              ],
            tags: ['2014 - 2015'],
            thumbnail: wideout,
            skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP", "GIT"]
        }


    ];

    const [content, setContent] = useState(myHistory[0])

    return (

        <>
            {/* <NavBar />

            <section className="w-full flex flex-row md:flex-row text-[#1B224A] font-light mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] ">

            
                    <div className="w-full flex flex-row text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px] bg-gray-0  p-5 m-5 gap-5 text-white">
                        <div className="w-[260px] h-[150px]  flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer">    <img src={hogarth} alt='hogarthlogo' className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Hogarth</h2><h3 className='text-xs'>2023 - present</h3> </div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={smartly} alt='smartlylogo' className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Smartly</h2><h3 className='text-xs'>2018 - 2023</h3></div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={sizmek} alt='sizmeklogo' className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>Sizmek</h2><h3 className='text-xs'>2015 - 2017</h3></div>
                        <div className="w-[260px] h-[150px] flex flex-col justify-end items-center  text-[#1B224A] hover:bg-gray-100 cursor-pointer"> <img src={wideout} alt='wideoutlogo' className='border rounded-lg shadow-sm' /> <h2 className='text-md font-bold'>WideOut</h2><h3 className='text-xs'>2014 - 2015</h3></div>
                    </div>
                


            </section> */}
            <div>
    <section id='myPortfolio' className='
                w-full 
                flex 
                flex-col 
                text-[#030303] 
                font-light 
                bg-white
                text-black
                min-h-[100vh]
                h-auto
                '>
                    <NavBar/>
      
                    <div className="
                    w-full 
                    h-auto min-h-[50vh] 
                    flex 
                    flex-row
                    flex-wrap
              
                    items-start 
                    justify-start
                    text-left 
                
                    sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]
                    transition-all duration-500
                     pl-8 sm:pl-8 md:pl-16  
                     pr-8 sm:pr-8 md:pr-16
                     pt-8
                     pb-10
                    ">

 
  
                            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-x-10 gap-y-5  ' >
                                { myHistory.map((item, index) => (
                                    <div className='flex flex-col align-center items-center' id={item.id}>
                                         <button
                                        onClick={() => {setContent(item) } }
                                        className=" "
                                     >
                                        
                                            <div className='w-full overflow-hidden border rounded-xl '>
                                                <img className='w-[20vh] hover:scale-105 duration-500 hover:duration-500 hover:transition-all hover:animate-none hover:delay-0 cursor-pointer' src={item.thumbnail}/>
                                            </div>
                                            
                                         </button>
                                        <div className='flex items-center justify-center p-2 w-[20vh]'>
                                        {item.tags.map((detail, index) => (
                                                    <span key={index} className="text-md sm:text-sm md:text-xs lg:text-md text-wrap text-center"> &nbsp;{ detail }</span>
                                         ))}
                                        </div> 

                                  
                                    </div>

                                         
                                ))}

                                </div>
                             
                                <div className='w-3/4 h-auto flex  rounded-xl px-16 max-w-3/4' >
                                {content && (
                                    <>
                                       <div className='flex flex-col gap-y-4 max-w-3/4'>
                                        <p className='text-md font-bold uppercase text-text-brand bebas-neue-regular text-5xl sm:text-5xl md:text-5xl lg:text-5xl'>{content.name}</p>
                                        <p className='text-md font-bold text-gray-700'>{content.jobtitle}</p>
                                        <p className='text-sm '>{content.tags}</p>
                                        <div></div>
                                        <p className='text-sm font-bold '>Roles and Responsibilities:</p>
                                        {content.description.map((detail, index) => (
                                            <>
                                                            <li key={index} className="list-image-bullet text-sm sm:text-sm md:text-sm lg:text-md text-wrap  ">{ detail }</li>
                                                        </>
                                         ))}
                                         <div></div>
                                          <p className='text-sm font-bold '>Skills:</p>
                                         <div className=' inline-block space-x-2 space-y-4'>
                                        {content.skills.map((detail, index) => (
                                        <>
                                                        <span key={index} className="px-4 py-2 rounded-3xl inline-block bg-gray-100 text-sm sm:text-sm md:text-sm lg:text-md w-fit text-nowrap">{ detail }</span>
                                                    </>
                                        ))}
                                        </div>
                                         </div>
                                    </>
                                )}
                                </div>
                               
                            </div>
                    </section>
        
            

                 
    </div>

           
        </>
    )
}

export default History