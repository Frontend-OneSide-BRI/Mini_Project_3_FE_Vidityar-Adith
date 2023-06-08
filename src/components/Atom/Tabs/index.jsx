import React from "react";
import { Link } from "react-router-dom";

function Tabs({ items, index, active }) {
  return (
    <>
      <li
        key={index}
        className={`font-bold text-white text-lg md:h-0 h-20 md:px-8 sm:shadow-none shadow-[box-shadow] ${
          index === active
            ? "border-2 border-primaryDarkBlue"
            : "border-transparent"
        }`}
      >
        <Link
          to={items.path}
          className="hover:text-primaryDarkBlue border-b-2 border-transparent hover:border-primaryDarkBlue"
        >
          <div className="">{items.display}</div>
        </Link>
      </li>
    </>
  );
}

export default Tabs;
