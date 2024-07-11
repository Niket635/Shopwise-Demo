import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { RiYoutubeLine } from "react-icons/ri";
import { SlEnvolopeLetter } from "react-icons/sl";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 text-white relative overflow-hidden p-3">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mb-5 lg:m-0 lg:py-20  ">
            <div>
              <h1 className="capitalize mt-3 mb-6 lg:text-xl text-lg font-bold">
                Contact Info
              </h1>
              <div className="m-0 p-0">
                <h3 className="flex mb-4">
                  <span className="m-0 p-0">
                    <FaLocationDot className="inline-block align-top  mr-3 mt-1 text-lg" />
                  </span>
                  <span className="overflow-hidden lg:text-lg text-md mx-w-[78%] inline-block align-middle">
                    123 Street, Old Trafford, NewYork, USA
                  </span>
                </h3>
                <h4 className="flex mb-4">
                  <span className="m-0 p-0">
                    <MdOutlineEmail className="inline-block align-top mr-3 mt-1 text-lg" />
                  </span>
                  <span className="overflow-hidden lg:text-lg text-md mx-w-[78%] inline-block align-middle">
                    info@sitename.com
                  </span>
                </h4>
                <h4 className="flex mb-4">
                  <span className="m-0 p-0">
                    <IoMdPhonePortrait className="inline-block align-top mr-3 mt-1 text-lg" />
                  </span>
                  <span className="overflow-hidden lg:text-lg text-md mx-w-[78%] inline-block align-middle">
                    + 457 789 789 65
                  </span>
                </h4>
              </div>
              <div className="mb-7 ">
                <ul className="m-0 p-0 ">
                  <li className="inline-block mb-1 ml-1">
                    <a
                      href="3"
                      className="rounded-full lg:h-10 lg:w-10 h-9 w-9 inline-block text-center align-middle overflow-hidden bg-blue-950 relative"
                    >
                      <FaFacebookF className="block leading-9 absolute top-2 left-2 lg:text-2xl text-xl" />
                    </a>
                  </li>
                  <li className="inline-block mb-1 ml-1">
                    <a
                      href="3"
                      className="rounded-full lg:h-10 lg:w-10 h-9 w-9 inline-block text-center align-middle overflow-hidden bg-blue-500 relative"
                    >
                      <FaTwitter className="block leading-9 absolute top-2 left-2 lg:text-2xl text-xl" />
                    </a>
                  </li>
                  <li className="inline-block mb-1 ml-1">
                    <a
                      href="3"
                      className="rounded-full lg:h-10 lg:w-10  h-9 w-9 inline-block text-center align-middle overflow-hidden bg-red-500 relative"
                    >
                      <TiSocialGooglePlus className="block leading-9 absolute top-2 left-2 lg:text-2xl text-xl" />
                    </a>
                  </li>
                  <li className="inline-block mb-1 ml-1">
                    <a
                      href="3"
                      className="rounded-full lg:h-10 lg:w-10 h-9 w-9 inline-block text-center align-middle overflow-hidden bg-red-600 relative"
                    >
                      <RiYoutubeLine className="block leading-9 absolute top-2 left-2 lg:text-2xl text-xl" />
                    </a>
                  </li>
                  <li className="inline-block mb-1 ml-1">
                    <a
                      href="3"
                      className="rounded-full lg:h-10 lg:w-10 h-9 w-9 inline-block text-center align-middle overflow-hidden bg-blue-800 relative"
                    >
                      <FaInstagram className="block leading-9 absolute top-2 left-2 lg:text-2xl text-xl " />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:mb-8">
              <h1 className="capitalize mt-3 mb-6 lg:text-xl text-lg font-bold">
                Useful Links
              </h1>
              <div className="m-0 p-0 ">
                <div className=" pb-3 lg:text-lg text-md">About Us</div>
                <div className=" pb-3 lg:text-lg text-md">FAQ</div>
                <div className=" pb-3 lg:text-lg text-md">Location</div>
                <div className=" pb-3 lg:text-lg text-md">Affiliates</div>
                <div className=" pb-3 lg:text-lg text-md">Contact</div>
              </div>
            </div>
            <div className="lg:mb-8">
              <h1 className="capitalize mt-3 mb-6 lg:text-xl text-lg font-bold">
                My Account
              </h1>
              <div className="m-0 p-0 ">
                <div className=" pb-3 lg:text-lg text-md">My Account</div>
                <div className=" pb-3 lg:text-lg text-md">Discount</div>
                <div className=" pb-3 lg:text-lg text-md">Returns</div>
                <div className=" pb-3 lg:text-lg text-md">Orders History</div>
                <div className=" pb-3 lg:text-lg text-md">Order Tracking</div>
              </div>
            </div>

            <div className="md:w-[296%] lg:w-full">
              <h1 className="capitalize mt-3 mb-6 lg:text-lg text-md font-bold">
                Subscribe Our Newsletter
              </h1>
              <p className=" lg:text-lg text-md mb-6 mt-0 ">
                If you want to get an email from us every time we have a new
                special offer, then sign up here!
              </p>
              <div className=" md:mb-16">
                <form className="relative mt-5">
                  <input
                    type="text"
                    required
                    className="px-6 py-4 rounded-3xl border-none shadow-none h-12 w-full m-0 text-black lg:text-xl text-lg"
                    placeholder="Enter Email Addres"
                  />
                  <button
                    type="submit"
                    className="bg-red-600 text-white right-1 rounded-full w-10 h-10 p-0 absolute top-1 "
                  >
                    <SlEnvolopeLetter className="block leading-9 absolute top-2 left-2 text-xl" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="md:py-8 px-0 relative  border-t-2 border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto">
            <div className="w-full">
              <p className="text-white lg:text-left text-center text-md p-2">
                © 2020 All Rights Reserved by Bestwebcreator
              </p>
            </div>

            <div>
              <div className="flex gap-2 md:float-end justify-center">
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/visa.png"
                  alt=""
                />
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/discover.png"
                  alt=""
                />
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/master_card.png"
                  alt=""
                />
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/paypal.png"
                  alt=""
                />
                <img
                  src="https://bestwebcreator.com/shopwise/demo/assets/images/amarican_express.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
