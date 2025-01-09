

function Footer() {
  return (
    <>

      <section className='
      w-full 
      flex 
      flex-col sm:flex-col md:flex-row 
      bg-background-dark 
      min-h-[15vh] sm:min-h-[15vh]  md:min-h-[5vh]  lg:min-h-[10vh] xl:min-h-[10vh] 
      transition-all duration-300 ease-in-out 
      pl-8 sm:pl-8 md:pl-16 
      pr-8 sm:pr-8 md:pr-16'>

          <div className='w-full h-auto flex flex-row justify-start items-end md:items-center lg:items-center '>
                            
              <button className="text-text-lightlight p-4 hover:text-text-lightgrey transition-all duration-300 ease-in-out">© 2025 Christopher Villarin</button>
              
          </div>

          <div className='w-full h-auto flex flex-row justify-end items-end max-sm:justify-start max-md:justify-start md:items-center lg:items-center'>
                            
              <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-text-lightlight p-4 hover:text-text-lightgrey transition-all duration-300 ease-in-out">Back on top</button>
                             
          </div>
      </section>

    </>);
}

export default Footer;
