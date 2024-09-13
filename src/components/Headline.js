


function Headline() {
    return (
      <div className=''>

<section className='flex flex-col sm:flex-col md:flex-row bg-gradient-to-br from-stone-50 to-neutral-100 min-h-[85vh] sm:min-h-[85vh]  md:min-h-[45vh]  lg:min-h-[70vh] xl:min-h-[70vh] transition-all duration-300 ease-in-out '>
           
<div className="
    w-full sm:w-full md:w-1/2 
    pl-8 sm:pl-8 md:pl-16 
    pr-8 sm:pr-8 md:pr-0
    flex flex-col md:flex-row " >
      <div className="
          w-full flex flex-col 
          text-left 
          justify-center 
          mx-auto 
          sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1080px] 2xl:max-w-[1536px] 
          py-10 sm:py-4 md:py-4 lg:py-5 xl:py-5 
          gap-y-7 sm:gap-y-7 md:gap-y-6 lg:gap-y-7 xl:gap-y-8
          "> {/**/}
          <p className='
     
          pl-8 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
          text-4xl 
          font-light 
          w-full 
          leading-none
          text-[#2E2F2F] 
          transition-all duration-300 ease-in-out'>Hey there, I'm<br />  </p> 
          <p className='
          pl-8 sm:pl-8 md:pl-4 lg:pl-4 xl:pl-4 
          text-6xl sm:text-7xl md:text-7xl lg:text-8xl xl:text-[9rem] 2xl:text-[10rem] 
          font-medium 
          bebas-neue-regular 
          text-[#508989] 
          transition-all duration-300 ease-in-out
          leading-[0.8em] sm:leading-[0.8em] md:leading-[0.8em] xl:leading-[0.8em]'>CHRISTOPHER<br />VILLARIN</p>{/**bg-gradient-to-b from-[#7383F7] to-[#508989] bg-clip-text text-transparent*/}
          {/* <p className='text-4xl p-4 font-light w-full leading-snug text-[#1B224A] '>Hey there, I'm<br />  <p className='text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-medium bebas-neue-regular text-[#1B224A] bg-gradient-to-b from-[#4164A1] via-[#7A4A8A] to-[#7A4A8A] bg-clip-text text-transparent '>CHRISTOPHER<br />VILLARIN</p></p> */}
          
            <p className='text-sm px-8 sm:px-8 md:px-4 text-[#626c81] w-full font-light transition-all duration-300 ease-in-out'>a Front End Developer / Creative Developer<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className='w-full flex flex-row px-8 sm:px-8 md:px-4 '>
              <button className='text-sm bg-[#508989] hover:bg-[#f3f3f3] text-[#fff] hover:text-[#2E2F2F] w-[180px] rounded-full font-medium  py-3 px-1 mr-3 transition-all duration-300 ease-in-out' style={{ transition: 'background-color 0.3s' }}>About me</button>
              <button className='text-sm bg-[#f3f3f3] hover:bg-[#508989] text-[#1B224A] hover:text-[#fff] w-[180px] rounded-full font-medium  py-3 px-1  transition-all duration-300 ease-in-out ' style={{ transition: 'background-color 0.3s' }}>Contact</button>
              {/* <button className='bg-[#4267B2] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button>
                      <button className='bg-[#0077B5] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button> */}
            </div>
      </div>
</div>
<div className="
w-full sm:w-full md:w-1/2 
pr-8 sm:pr-8 md:pr-16 
pl-8 sm:pl-8 md:pl-0 
flex 
flex-row  md:flex-row 
justify-center 
items-center 
text-[#030303] 
transition-all 
duration-300
 ease-in-out" >
     <div className="w-full sm:w-full md:w-full min-h-[50vh] sm:min-h-[50vh] md:min-h-[50vh] lg:min-h-[70vh] text-[#030303] font-light bg-[url('./images/background/iphone.png')] bg-contain bg-center bg-no-repeat xl:bg-contain lg:bg-contain md:bg-contain sm:bg-contain " >
     </div>

</div>
</section>

</div>);
}

export default Headline;