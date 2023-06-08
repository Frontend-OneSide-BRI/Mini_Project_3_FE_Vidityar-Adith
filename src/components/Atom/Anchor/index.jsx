import React from "react";

function Anchor({ textContent }) {
  return (
    <>
      <a
        href=""
        className="block py-2 pl-3 pr-4 m-2 text-white border-transparent border-2
        bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 
        md:dark:text-primaryBlue md:hover:text-primaryLightBlue md:hover:border-primaryBlue"
        aria-current="page"
      >
        {textContent}
      </a>
    </>
  );
}

export default Anchor;
