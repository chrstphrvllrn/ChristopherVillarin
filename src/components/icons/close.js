
import * as React from "react";


function CloseBurger(props) {
  return (
    <>
     <div className="rounded-xl ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" height="2em" width="2em" 
         {...props}
         >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </>
  );
}

export default CloseBurger;
