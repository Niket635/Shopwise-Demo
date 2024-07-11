import React from "react";
import Home from "../pezes/Home";
import Footer from "../pezes/Footer.jsx"
import { Outlet } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <div className="">
        <nav className="bg-white shadow fixed w-full top-0 z-10">
          <div className=" m-0 flex flex-wrap items-center justify-between md:p-4 p-2 container mx-auto">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://bestwebcreator.com/shopwise/demo/assets/images/logo_dark.png"
                className=""
                alt="Flowbite Logo"
              />
            </a>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full lg:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="md:bg-transparent  bg-blue-700 block py-2 px-3 rounded text-md sm:text-sm md:p-0 text-black hover:text-red-600"
                    aria-current="page"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-md  sm:text-sm md:p-0 text-black hover:text-red-600"
                  >
                    PAGES
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-md  sm:text-sm md:p-0 text-black hover:text-red-600"
                  >
                    PRODUCTS
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-md  sm:text-sm md:p-0 text-black hover:text-red-600"
                  >
                    BLOG
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-md  sm:text-sm md:p-0 text-black hover:text-red-600"
                  >
                    SHOP
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 rounded text-md  sm:text-sm md:p-0 text-black hover:text-red-600"
                  >
                    CONTACT US
                  </a>
                </li>

                <li className="flex gap-5 justify-end ">
                  <div>
                    <a
                      href="#"
                      className="block py-2 px-3 rounded text-md sm:text-sm md:p-0 text-black hover:text-red-600"
                    >
                      <SlMagnifier className="text-xl" />
                    </a>
                  </div>

                  <div>
                    <a
                      href="#"
                      className="block py-2 px-3 rounded text-md sm:text-sm md:p-0 text-black hover:text-red-600"
                    >
                      <IoCartOutline className="text-2xl" />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-20">
        <Outlet />
        <Home />
        <Footer/>
      </div>
    </>
  );
};

export default Navbar;
