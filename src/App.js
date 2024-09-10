import NavBar from './components/NavBar.js'

function App() {
  return (
    <div>
      <NavBar />

      <div className="w-full flex flex-col md:flex-row text-[#030303] font-light bg-[url('./images/background/iphone.png')] bg-cover bg-center" >
        <div className="w-full min-h-[70vh] flex flex-col text-left justify-center mx-auto sm:max-w-[640px] md:max-w-[768px] lg:max-w-[924px] xl:max-w-[1240px]"> {/**/}
          <p className='text-4xl p-4 font-light w-full leading-snug text-[#1B224A] '>Hey there, I'm<br />  <p className='text-6xl md:text-8xl lg:text-9xl xl:text-9xl font-medium bebas-neue-regular text-[#1B224A] bg-gradient-to-b from-[#4164A1] via-[#7A4A8A] to-[#7A4A8A] bg-clip-text text-transparent '>CHRISTOPHER<br />VILLARIN</p></p>
          <p className='text-md  text-[#626c81] w-full font-regular '>a Front End Developer / Creative Developer</p>
          <p className='text-md pb-4 text-[#626c81] w-full font-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br />tempor incididunt ut labore et dolore magna aliqua. </p>
          <div className='w-full flex flex-row'>
            <button className='bg-[#BDEF9C] hover:bg-[#f3f3f3] text-[#000] hover:text-[#000] w-[180px] rounded-full font-medium  py-3 px-1 mr-3 ' style={{ transition: 'background-color 0.3s' }}>About me</button>
            <button className='bg-[#f3f3f3] hover:bg-[#4164A1] text-[#1B224A] hover:text-[#fff] w-[180px] rounded-full font-medium  py-3 px-1   ' style={{ transition: 'background-color 0.3s' }}>Contact</button>
            {/* <button className='bg-[#4267B2] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button>
                    <button className='bg-[#0077B5] text-[#000] w-[50px] rounded-full font-medium  py-3 px-4 ml-4'></button> */}
          </div>
        </div>
      </div>
    </div>);
}

export default App;
