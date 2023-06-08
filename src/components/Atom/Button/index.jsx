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
      <Button
        className="bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white"
        onClick={onClick ? () => onClick() : null}
      >
        {children}
      </Button>
    </>
  );
}

export default Button;
