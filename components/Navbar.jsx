import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  AiFillCloseCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="fixed w-full h-20 shadow-xl z-[2]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <Image src="" alt="/" width="125" height="50" />

          <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Project
                </li>
              </Link>
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="md:hidden">
              <GiHamburgerMenu
                onClick={handleNav}
                size="25"
                className=" cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "fixed w-full h-screen md:hidden bg-black/70 z-[3] ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 bg-white h-screen w-65 p-5 ease-in duration-500"
              : "fixed left-[-100%] bg-white h-screen p-5 ease-in duration-500"
          }
        >
          <div className="flex justify-between">
            <Image src="" alt="/" width="125" height="50" />
            <div>
              <AiFillCloseCircle
                onClick={handleNav}
                size="26"
                className="rounded-full border-2 border-black shadow-lg shadow-gray-400 cursor-pointer"
              />
            </div>
          </div>
          <h3 className="m-4 tracking-wide">Let's build projects together!</h3>
          <hr />
          <div>
            <ul className="m-1">
              <Link href="/">
                <li className=" text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Project
                </li>
              </Link>
              <Link href="/">
                <li className=" text-sm uppercase hover:bg-yellow-400 px-4 py-4">
                  Contact
                </li>
              </Link>
            </ul>
            <hr />
          </div>

          <div className="mt-20">
            <h3 className=" m-4 uppercase tracking-widest">Let's connect</h3>
            <div className="flex justify-between mx-4 ">
              <AiFillLinkedin
                size="28"
                className=" border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
              />
              <AiFillGithub
                size="28"
                className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
              />
              <AiFillMail
                size="28"
                className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
              />
              <BsFillPersonLinesFill
                size="28"
                className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
