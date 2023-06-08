import React from "react";

function Button({ textContent }) {
  return (
    <>
      <button
        type="button"
        class="font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 text-white
        bg-primaryDarkBlue hover:bg-primaryLightBlue
        dark:bg-primaryDarkBlue dark:hover:bg-primaryBlue"
      >
        {textContent}
      </button>
    </>
  );
}

export default Button;
