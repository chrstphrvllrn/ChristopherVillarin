
import * as React from "react";

function IconGmail(props) {
  return (
    <>
    <div className="rounded-xl "> 
      <svg
    className="fill-current text-button-dark hover:scale-100 hover:text-button-lightgrey transition-colors duration-100 cursor-pointer"
      viewBox="0 0 24 24"
      fill="currentColor"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M20 18h-2V9.25L12 13 6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
    </svg>
    </div>
    </>
  );
}

export default IconGmail;
