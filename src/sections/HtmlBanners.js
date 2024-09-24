import React, { useEffect } from 'react';
import Footer from './Footer.js'
import NavBar from './NavBar.js'
import WebFont from 'webfontloader';

function HtmlBanners() {

    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Bebas Neue', 'Anton']
          }
        });
      }, []);


  const myBanners = [
        {id: "Simple Display",   title: 'Banner • 2024', width:'300px', height:'600px',  banner:'/banners/300x600-SimpleDisplay/index.html', description:[
            " Used GSAP for animation (a third party framework)",
            " Used SplitText JS (which is also a GSAP framework) to animate the text per line",
            " Used Web default font",
            " User can replay the animation"
          ],
          list_image:'/icons/checkmark.png'
          },
        {id: "Display with Customized Landing Page",   title: 'Banner • 2024', width:'300px', height:'600px',  banner:'/banners/300x600-SimpleDisplayWithCustomizeLandingPage/index.html',  description: [
            " Used GSAP for animation (a third party framework)",
            " Used CSS animation for button hover",
            " Used Google font",
            " With two landing pages",
            " General (https://www.totallymoney.com/loans/)",
            " Submit - This will add the value from the dropdown text to the landing page once the user hits the 'check my eligibility' button"
            ,"https://www.totallymoney.com/loans/?category=Personal&loanId=00&loanAmount=£500&loanTerm=24"
        ] },
        {id: "Display with Video and Image Gallery",   title: 'Banner • 2024', width:'300px', height:'600px',  banner:'/banners/300x600-InteractiveAd/index.html',  description:[
            " Click unmute icon to play the animation",
            " User can click the coin",
            " Used GSAP for animation (a third party framework)",
            " Used CustomEase JS (which is a GSAP framework) to change the animation ease",
            " With Image Gallery (User can interact with the ads)",
            " With Video",
            " With three landing pages"
          ] },

    ];
    


  return (
    <div>
    <section id='myPortfolio' className='
                w-full 
                flex 
                flex-col 
                text-[#030303] 
                font-light 
               bg-white
                 text-black

                '>
                    <NavBar/>
      
                    <div className="
                    w-full 
                    h-auto min-h-[50vh] 
                    flex 
                    flex-row
                    flex-wrap
              
                    items-start 
                    justify-center
                    text-left 
                
                    sm:max-w-[100%] md:max-w-[100%] lg:max-w-[100%] xl:max-w-[100%] 2xl:max-w-[100%]
                    transition-all duration-500

                    ">


                            { myBanners.map((item, index) => (
                                //  border rounded-lg shadow-md
                                <div className='  
                                py-10 pl-10 flex gap-10 min-w-[100%] w-screen sm:w-screen md:w-screen lg:w-screen xl:w-screen
                                bg-[#ffffff] 
                                rounded-lg
                                odd:bg-slate-50

                                '>
                                 <div className='  
                                py-10 pl-10 pr-10 
                            
                                '>
                                     <iframe src={item.banner} width={item.width} height={item.height} alt={item.id} className="" ></iframe>
                                </div>

                                    <div className='
                                    flex flex-col
                                    w-[100%]
                                    justify-start gap-10
                                    py-10 pl-10 pr-10 
                                  
                                    '>
                                        <div className='flex flex-col  '>
                                            {/* bg-gradient-to-r from-[#9bf8f4] via-[#6f7bf7] to-[#9bf8f4]     inline-block text-transparent bg-clip-text */}
                                            <p className='bebas-neue-regular text-6xl sm:text-5xl md:text-4xl lg:text-7xl font-bold pb-14 
                                            w-full sm:w-full md:w-full lg:w-full xl:w-full 
                                            text-text-brand
                                            '>{item.id}</p>
                                            <ul className=' p-5 flex flex-col gap-5
                                            w-full sm:w-full md:w-full lg:w-full xl:w-full'>
                                                {item.description.map((detail, index) => (
                                                    <li key={index} className="list-image-checkmark text-md sm:text-sm md:text-md lg:text-md "> &nbsp; { detail }</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className='flex'>

                                            {/* <button 
                                            onClick={() => { const element = document.getElementById('myPortfolio'); element?.scrollIntoView({ behavior: 'smooth' }); }}
                                            className='text-sm bg-button-dark hover:bg-button-lightgrey  text-[#fff] hover:text-[#fff] w-[160px] rounded-full font-medium  py-3 px-1 mr-3 transition-all duration-150 ease-in-out' style={{ transition: 'background-color 0.3s' }}>Play again</button>
                                                   */}
                                         

                                        </div>
                                            
                                
                                    </div>




                                </div>
                            ))}   
                            </div>
                  

                    </section>
       
                    <Footer/>
    </div>
  )
}

export default HtmlBanners