import React, { useState, useEffect } from 'react'

const Popup = ({ title, content, onClose, item }) => {
  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    console.log("handleClose");
    setIsVisible(false);
    setTimeout(() => onClose(), 0); // Delay `onClose` to allow `useEffect` to execute first
};


    //Prevent scroll when modal is open
    useEffect(() => {
        console.log("isVisible:", isVisible);
        document.body.style.overflow = isVisible ? "hidden" : "unset";
    }, [isVisible]);
    
//   if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full mx-12 transition-all duration-1000">
        <div className="flex items-start justify-between p-5 border-b border-gray-200 rounded-t">
          <h3 className="text-xl font-semibold text-gray-900 ">
            {item.name}
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 
            rounded-lg text-sm p-1.5 ml-auto inline-flex items-center
           
             "
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 
              0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 
              11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 
              10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500">
         
         <div className='flex flex-row'>
                <div className=' py-0 pl-5 pr-5 '>
                    <iframe src={item.banner} width={item.width} height={item.height} alt={item.id} className="" ></iframe>
                </div>

                <div className='
                                            hidden flex-col
                                            w-full sm:w-3/4 md:w-3/4 lg:w-full xl:w-full
                                            justify-start gap-10
                                            py-10 pl-10 pr-10 
                                             sm:hidden md:flex
                                            '>
                                                <div className='flex flex-col  '>
                                                
                                                    <p className='bebas-neue-regular text-sm sm:text-5xl md:text-4xl lg:text-7xl font-bold pb-14 
                                                    w-full sm:w-full md:w-3/4 lg:w-full xl:w-full 
                                                    text-text-brand
                                                    '>{item.name}</p>
                                                    <ul className=' p-5 hidden flex-col gap-5
                                                    w-full sm:w-full md:w-3/4 lg:w-full xl:w-full
                                                    sm:hidden md:flex  
                                                    overflow-hidden'>
                                                        {item.description.map((detail, index) => (
                                                            <li key={index} className="list-image-checkmark text-sm sm:text-sm md:text-sm lg:text-md "> &nbsp; { detail }</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                                <div className='flex'>

                                            
                                                

                                                </div>
                                                    
                                        
                </div>

           </div>

                                    
         
 
          </p>
        </div>
        {/* <div className="flex items-center justify-end p-6 border-t border-gray-200 rounded-b"> */}
          {/* <button
            onClick={handleClose}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 
            focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Close
          </button> */}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Popup