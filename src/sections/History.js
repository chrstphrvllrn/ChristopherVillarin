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
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP (GreenSock Animation Platform)", "GIT", "Following Storyboard(PDF, XD, PSD, Indesign, Figma)","Illustrator" ,"Photoshop", "Figma" ,"Platform: Doubleclick Studio, Flashtalking, Celtra","Version control: Github"]
        },
        { id: 'smartly',
            name:'smartly',
            jobtitle:'Creative Developer',
            description:[
                " Creative Production from PSDs/XDs and other files",
                " Develop fully interactive rich media ad units intended to engage the user",
                " Resize and/or Revise ad units",
                " Set up and configure dynamic feeds to generate variations in accordance with client requirements.",
                " Apply the provided IDs and targeting strategies to accurately tailor campaigns to specific audiences.",
                " Collaborate with Designers and Art Directors to assess the feasibility of animations and features.",
                " Collaborate with Project Managers to understand their technical and programming questions and Help identify and evaluate technical solutions and alternatives.",
                " Cross-Browser and Device Compatibility: Testing and optimizing the banners for various web browsers and devices to ensure a seamless user experience across different platforms. This includes addressing any compatibility issues and making necessary adjustments to ensure proper rendering.",
             
              ],
            tags: ['2018 - 2023'],
             thumbnail: smartly,
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP (GreenSock Animation Platform)", "GIT", "Following Storyboard(PDF, XD, PSD)", "Illustrator", "Google Web Designer (GWD)", ,"Photoshop", "Platform: Doubleclick Studio"]
        },
        { id: 'sizmek',
            name:'sizmek',
            jobtitle:'Creative Developer',
            description:[
                " Platform API intergration from client HTML files",
                " Creative Production from PSDs and other files",
                " Develop fully interactive rich media ad units intended to engage the user",
                " Resize and/or Revise ad units",
                " Encode Client Videos resulting in Online Video Ads",
                " Compile KPI report for team lead",
                " other duties assigned",
              ],
            tags: ['2015 - 2017'],
             thumbnail: sizmek,
             skills: ["HTML", "JAVASCRIPT", "CSS", "GSAP", "JSON", "Following Storyboard(PDF, XD, PSD)", "Illustrator" ,"Photoshop", "Adobe Media Encoder(resizing video quality)", "Filezilla", "Fiddler"]
        },
        { id: 'wideout',
            name:'wideout',
            jobtitle:'Flash Developer',
            description:[
                " Receive tasks from Team Leaders and other designated point persons and develop assigned projects for Clients.",
                " Monitor delivery status and slack time and takes measures to ensure productivity.",
                " Learn new production design, development methodologies, trade tools and apply them in production.",
                " Contribute in the documentation of bugs and their fixes shared in production.",
                " Contribute in the formulation of team-centric policies, standards and practices to ensure consistent performance and productivity of the team.",
                " Offer advice to team personnel on production design, development and testing.",
              ],
            tags: ['2014 - 2015'],
            thumbnail: wideout,
            skills: ["Adobe Flash", "Actionscript 3", "Photoshop", "Illustrator", "GSAP(GreenSock Animation Platform)", "Following Storyboard(PDF)"]
        }


    ];

    // const [content, setContent] = useState(myHistory[0])

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
                                {/* { myHistory.map((item, index) => (
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

                                         
                                ))} */}

                                </div>
                             
                                <div className='w-full h-auto flex flex-col rounded-xl max-w-full' >
                                {myHistory.map(item => (
                                    <>
                                       <div className='flex flex-row gap-y-4 max-w-full gap-x-16 '>

                                                <div className='w-1/7'>
                                                    <div className='flex flex-col gap-x-8 items-between'>
                                                        <div className='w-[13vw] overflow-hidden border rounded-xl '>
                                                            <img className='w-[13vw] hover:scale-105 duration-500 hover:duration-500 hover:transition-all hover:animate-none hover:delay-0 cursor-pointer' src={item.thumbnail}/>
                                                        </div>
                                                        <div className='flex items-center justify-center'>
                                                            <div className='h-[29rem] w-[0.15rem] bg-background-lightlightorange'></div>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            
                                                <div className='w-6/7 pb-10'>
                                                    <div className='flex flex-col gap-y-2'>
                                                            <p className='text-md font-bold uppercase text-text-brand bebas-neue-regular text-5xl sm:text-5xl md:text-5xl lg:text-5xl'>{item.name}</p>
                                                            <p className='text-lg font-bold text-gray-700'>{item.jobtitle}</p>
                                                            <p className='text-sm '>{item.tags}</p>
                                                       
                                                       
                                                        <p className='text-sm font-bold pt-4'>Roles and Responsibilities:</p>
                                                        {item.description.map((detail, index) => (
                                                            <>
                                                                            <li key={index} className="list-image-bullet text-sm sm:text-sm md:text-sm lg:text-md text-wrap  ">{ detail }</li>
                                                                        </>
                                                        ))}
                                                      
                                                        <p className='text-sm font-bold pt-4'>Skills:</p>
                                                        <div className=' inline-block space-x-2 space-y-4'>
                                                        {item.skills.map((detail, index) => (
                                                        <>
                                                                        <span key={index} className="px-4 py-2 rounded-3xl inline-block bg-gray-100 text-sm sm:text-sm md:text-sm lg:text-md w-fit text-nowrap">{ detail }</span>
                                                                    </>
                                                        ))}
                                                        </div>
                                                        </div>
                                                </div>


                                         </div>
                                    </>
                              ))}
                                </div>
                               
                            </div>
                    </section>
        
            

                 
    </div>

           
        </>
    )
}

export default History