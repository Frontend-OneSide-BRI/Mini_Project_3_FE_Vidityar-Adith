import React from "react";
import Button from "../../Atom/Button";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/logo-text-dark.png";
import Tabs from "../../Atom/Tabs";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Movies",
    path: "/movie",
  },
  // {
  //   display: "TV Series",
  //   path: "/tv",
  // },
];
function Navbar() {
  const { pathname } = useLocation();

  const active = headerNav.findIndex((e) => e.path === pathname);

  return (
    <>
      <nav className="header fixed top-0 left-0 w-full z-[100] transition duration-500 ease-in-out bg-primaryLightBlue">
        <div className="header__wrap flex items-center justify-between px-8">
          <div className="logo flex items-center">
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="mr-2 w-[150px] h-[80px] object-cover"
              />
            </Link>
          </div>
          <div className="flex items-center justify-between h-[100px] px-8 fixed md:relative bottom-0">
            <ul className="header__nav flex items-center">
              {headerNav.map((e, i) => (
                <div key={i}>
                  <Tabs items={e} index={i} active={active} />
                </div>
              ))}
            </ul>
          </div>
          <div className="mt-3">
            <Button> Get Movie</Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
