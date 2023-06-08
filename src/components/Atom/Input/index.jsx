import React from "react";

function Input() {
  return (
    <>
      <div className="relative">
        <input
          type="email"
          id="helper-text"
          aria-describedby="helper-text-explanation"
          className="block px-2.5 pb-2.5 pt-4 border-1 text-sm rounded-lg appearance-none focus:outline-none focus:ring-0 peer
        bg-transparent border-primaryLightGray text-primaryLightBlue focus:ring-primaryBlue focus:border-LightBlue   
        dark:border-primayLightGray dark:placeholder-primaryLightBlue dark:text-white dark:focus:ring-primaryLightGray dark:focus:border-primaryLightGray"
          placeholder="name@gmail.com"
        />
        <label
          htmlFor="helper-text"
          className="absolute text-xl duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1
        text-gray-500 bg-white
        dark:text-gray-400 dark:bg-gray-900 peer-focus:dark:text-blue-500"
        >
          Label Atom
        </label>
      </div>
    </>
  );
}

export default Input;
