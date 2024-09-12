import NavBar from './components/NavBar.js'

function App() {
  return (
    <div className=''>
      <NavBar />

      <section className='flex flex-col sm:flex-col md:flex-row'>
            <div className="w-full sm:w-full md:w-1/2 px-8 sm:px-8 md:px-16 flex flex-col md:flex-row" >
                  <div className="w-full min-h-[50vh] sm:min-h-[50vh]  md:min-h-[70vh]  lg:min-h-[70vh] xl:min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1080px] 2xl:max-w-[1536px]"> {/**/}
                  <p className='text-4xl p-8 sm:p-8 md:p-4 lg:p-4 xl:p-4 font-light w-full leading-snug text-[#1B224A] '>Hey there, I'm<br />  <p className='text-5xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[10rem] font-medium bebas-neue-regular text-[#1B224A] bg-gradient-to-b from-[#7383F7] to-[#508989] bg-clip-text text-transparent '>CHRISTOPHER<br />VILLARIN</p></p>
                  {/* <p className='text-4xl p-4 font-light w-full leading-snug text-[#1B224A] '>Hey there, I'm<br />  <p className='text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-medium bebas-neue-regular text-[#1B224A] bg-gradient-to-b from-[#4164A1] via-[#7A4A8A] to-[#7A4A8A] bg-clip-text text-transparent '>CHRISTOPHER<br />VILLARIN</p></p> */}
                  
                    <p className='text-sm px-8 sm:px-8 md:px-4 text-[#626c81] w-full font-light '>a Front End Developer / Creative Developer</p>
                    <p className='text-sm px-8 sm:px-8 md:px-4  text-[#626c81] w-full font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua. </p>
                    <div className='w-full flex flex-row px-8 sm:px-8 md:px-4 pt-4'>
                      <button className='text-sm bg-[#BDEF9C] hover:bg-[#f3f3f3] text-[#000] hover:text-[#000] w-[180px] rounded-full font-medium  py-3 px-1 mr-3 ' style={{ transition: 'background-color 0.3s' }}>About me</button>
                      <button className='text-sm bg-[#f3f3f3] hover:bg-[#4164A1] text-[#1B224A] hover:text-[#fff] w-[180px] rounded-full font-medium  py-3 px-1   ' style={{ transition: 'background-color 0.3s' }}>Contact</button>
                      {/* <button className='bg-[#4267B2] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button>
                              <button className='bg-[#0077B5] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button> */}
                    </div>
                  </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 px-8 sm:px-8 md:px-16 min-h-[70vh] flex flex-row justify-center items-center md:flex-row text-[#030303]" >
            <div className="w-full sm:w-full md:w-full min-h-[70vh] text-[#030303] font-light bg-[url('./images/background/iphone.png')] bg-contain bg-center bg-no-repeat xl:bg-contain lg:bg-contain md:bg-contain sm:bg-contain " >
              </div>
            </div>
      </section>
    </div>);
}

export default App;
