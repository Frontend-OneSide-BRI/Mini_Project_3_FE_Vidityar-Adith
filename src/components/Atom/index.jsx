import React from "react";

function Input() {
  return (
    <>
      <input
        type="email"
        id="helper-text"
        aria-describedby="helper-text-explanation"
        class="block w-full p-2.5
        bg-primaryBrown-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   
        dark:bg-primaryBrown dark:border-primayLightBrown dark:placeholder-primaryLightBrown dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@gmail.com"
      ></input>
    </>
  );
}

export default Input;
