import React from "react";

function Image() {
  return (
    <>
      <figure className="max-w-lg mx-auto">
        <img
          className="h-auto max-w-full rounded-lg mx-auto"
          src="https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="description"
        />
        {/* <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
          Image caption
        </figcaption> */}
      </figure>
    </>
  );
}

export default Image;
