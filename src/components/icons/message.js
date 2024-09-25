 
 


import * as React from "react";

function IconMessage(props) {
  return (
    <>
    <div className="rounded-xl "> 
      <svg
    className="fill-current text-white hover:scale-100 hover:text-button-lightgrey transition-colors duration-100 cursor-pointer"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.3em"
      width="1.3em"
      {...props}
    >
     <path fill="none" d="M0 0h24v24H0z" />
      
      <path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path>
     </svg>
    </div>
    </>
  );
}

export default IconMessage;
