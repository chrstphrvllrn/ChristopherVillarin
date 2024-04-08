


import React from 'react'

const NavBar = () => {
    return (
        <div className='w-full  text-[#000000] font-light py-7 sm:py-7  md:py-7 lg:py-8 xl:py-8 '>
            <div className="h-16  mx-auto md:px-14 lg:px-17 flex"> {/** max-w-[1240px]*/}
                {/* <div className="p-8 w-full bg-slate-300"> </div> */}
                <div className='w-full flex flex-row justify-between items-center'>
                    <div className='flex text-1xl md:text-2xl lg:text-3xl font-bold mr-5 text-[#fac541]'>VILL<span className=' text-black '>ARIN</span></div>
                    <ul className='flex bg-[#f3f3f3] rounded-full font-medium 
                    text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md 
                    hidden sm:flex md:flex lg:flex xl:flex'>
                        <li className='p-4 mx-5'>HOME</li>
                        <li className='p-4 mx-5'>ABOUT</li>
                        <li className='p-4 mx-5'>CONTACT</li>
                        {/* <button className='bg-[#000000] text-[#FFF] w-[100px] h-5/6 rounded-full font-regular'>Learn More</button> */}
                    </ul>
                    <ul className='flex bg-[#f3f3f3] rounded-full font-medium text-sm sm:text-sm md:text-sm lg:text-sm xl:text-md'>
                        <li className='p-4 mx-5'>CART</li>


                    </ul>
                </div>

                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg> */}

            </div>
        </div>
    )
}

export default NavBar