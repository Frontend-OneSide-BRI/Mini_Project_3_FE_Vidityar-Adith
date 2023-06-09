import React from "react";
import { Anchor } from "../../Atom";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-white rounded-lg shadow mt-20 dark:bg-gray-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                VidityarA™
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <Anchor>About</Anchor>
              </li>
              <li>
                <Anchor>Privacy Policy</Anchor>
              </li>
              <li>
                <Anchor>Licensing</Anchor>
              </li>
              <li>
                <Anchor>Contact</Anchor>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
