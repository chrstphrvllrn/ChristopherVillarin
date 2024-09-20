
import React, { useState } from 'react'


import IconPlay from './play.js'

function Project({thumbnail, name, banner, width, height, id}) {

  const [toggle, setToggle] = useState(false)

  return (<>
  {/* border border-[#f3f3f3] shadow-sm bg-[#f3f3f3] */}
    <div className="w-72 h-auto flex flex-col justify-center items-left"  style={{ transition: 'width 0.5s ease' }}  >
   
        <div className="flex justify-center items-center cursor-pointer relative m-0 md:m-0 lg:m-2 " id={id} onClick={()=>{
              console.log(id, toggle)
              setToggle(!toggle)
            }}>
            
            <img src={thumbnail} alt='thumbnail' className='border border-[#f3f3f3]  bg-[rgba(0,0,0,0)]' style={{ transition: 'width 0.5s ease' }} 
           />

             {/* <iframe src={banner} width={width} height={height} className="d" ></iframe> */}
    
          
            { toggle ? null  :   (  <><div className="bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0.2)] w-full h-full absolute transition-all duration-300" ></div> <IconPlay/></>     )}

           
        </div>
        <div className="flex flex-row justify-center pl-1 pr-1 ">
          <p className="text-[0.55rem] font-bold py-4 text-[#2E2F2F] flex align-center justify-center h-full">{name}</p>
          {/* <p className="text-[0.55rem] font-bold mb-4 text-gray-600">10</p> */}
        </div>
     </div>
  </>
  );
}

export default Project;
