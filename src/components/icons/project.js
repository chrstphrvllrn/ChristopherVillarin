
import * as React from "react";

import IconPlay from './play.js'

function Project({thumbnail, name}) {
  return (<>
  {/* border border-[#f3f3f3] shadow-sm bg-[#f3f3f3] */}
    <div className="w-72 h-auto flex flex-col justify-center items-left "  style={{ transition: 'width 0.5s ease' }}>
        <div className="flex justify-center items-center cursor-pointer relative m-4">
            <img src={thumbnail} className='border border-[#f3f3f3]  bg-[rgba(0,0,0,0)]' style={{ transition: 'width 0.5s ease' }} />
            <div className="bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0.2)] w-full h-full absolute transition-all duration-300" ></div>
            <IconPlay></IconPlay>
        </div>
        <div className="flex flex-row justify-center pl-4 pr-4">
          <p className="text-[0.55rem] font-bold mb-4 text-[#2E2F2F]">{name}</p>
          {/* <p className="text-[0.55rem] font-bold mb-4 text-gray-600">10</p> */}
        </div>
     </div>
  </>
  );
}

export default Project;
