
import * as React from "react";

import IconPlay from './play.js'

function Project({thumbnail, name}) {
  return (<>
    <div className="w-1/4 h-auto flex flex-col justify-center items-center gap-5 m-4"  style={{ transition: 'width 0.5s ease' }}>
        <div className="pr-4 pl-4 flex justify-center items-center cursor-pointer relative pt-4">
            <img src={thumbnail} className='border border-[#e2e8f0] shadow-md bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0.1)]' style={{ transition: 'width 0.5s ease' }} />
            {/* <div className="bg-[rgba(0,0,0,0)] hover:bg-[rgba(0,0,0,0.1)] w-1/4 h-full absolute" ></div> */}
            <IconPlay></IconPlay>
        </div>
          <p className="text-[0.55rem] font-bold mb-4">{name}</p>
     </div>
  </>
  );
}

export default Project;
