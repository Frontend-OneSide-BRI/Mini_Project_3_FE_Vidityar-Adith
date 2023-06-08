import React from "react";

function Button({ children, onClick }) {
  return (
    <>
      <button
        type="button"
        onClick={onClick ? () => onClick() : null}
        className="font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white 
        bg-primaryDarkBlue hover:bg-primaryLightBlue 
        dark:bg-primaryDarkBlue dark:hover:bg-primaryBlue"
      >
        {children}
      </button>
    </>
  );
}

export function ButtonOutline({ children, onClick }) {
  return (
    <>
      <button
        className="relative inline-flex items-center justify-center cursor-default p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        onClick={onClick}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
          {children}
        </span>
      </button>
    </>
  );
}

export default Button;
