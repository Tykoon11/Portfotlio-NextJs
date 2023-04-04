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
import { useState, useEffect } from "react";
import Logo from "../public/assets/logo1.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <>
      <div
        className={
          shadow
            ? "fixed w-full h-20 shadow-xl z-[2] bg-[#020404]"
            : "fixed w-full h-20 z-[2] bg-[#020404]"
        }
      >
        <div className="flex items-center w-full h-full px-2 2xl:px-16">
          <Image className="md:ml-6" src={Logo} alt="/" width="35" />

          <div className="w-full flex justify-end md:flex md:justify-center">
            <div>
              <ul className="hidden md:flex">
                <Link href="/">
                  <li className="ml-10 text-xs text-[#5b5c61] hover:text-[#eff0f4] uppercase px-1 py-4">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li className="ml-10 text-xs text-[#5b5c61] hover:text-[#eff0f4] uppercase px-1 py-4">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li className="ml-10 text-xs text-[#5b5c61] hover:text-[#eff0f4] uppercase px-1 py-4">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li className="ml-10 text-xs text-[#5b5c61] hover:text-[#eff0f4] uppercase px-1 py-4">
                    Project
                  </li>
                </Link>
              </ul>

              <div className="md:hidden">
                <GiHamburgerMenu
                  onClick={handleNav}
                  size="25"
                  className=" cursor-pointer fill-[#eff0f4]"
                />
              </div>
            </div>
          </div>

          <div className="hidden md:block px-2">
            <Link href="/#contact">
              <li className="mr-24 text-xs text-[#eff0f4] uppercase px-4 py-2 list-none border-2 border-[#F53062] hover:border-[#eff0f4]">
                Contact
              </li>
            </Link>
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
              : "fixed left-[-200%] bg-white h-screen p-5 ease-in duration-500"
          }
        >
          <div className="flex justify-between">
            <Image src={Logo} alt="/" width="50" height="50" />
            <div>
              <AiFillCloseCircle
                onClick={handleNav}
                size="26"
                className="rounded-full border-2 border-black shadow-lg shadow-gray-400 cursor-pointer mt-2"
              />
            </div>
          </div>
          <h3 className="m-4 tracking-wide">Let's build projects together!</h3>
          <hr />
          <div>
            <ul className="m-1">
              <Link href="/">
                <li
                  onClick={() => setNav(!nav)}
                  className=" text-sm uppercase hover:bg-black hover:text-white px-4 py-4"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(!nav)}
                  className=" text-sm uppercase hover:bg-black hover:text-white px-4 py-4"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(!nav)}
                  className=" text-sm uppercase hover:bg-black hover:text-white px-4 py-4"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(!nav)}
                  className=" text-sm uppercase hover:bg-black hover:text-white px-4 py-4"
                >
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(!nav)}
                  className=" text-sm uppercase hover:bg-black hover:text-white px-4 py-4"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <hr />
          </div>

          <div className="mt-20">
            <h3 className=" m-4 uppercase tracking-widest">Let's connect</h3>
            <div className="flex justify-between mx-4 ">
              <a
                href="https://www.linkedin.com/in/nobleman-unachukwu-7a53b2222/"
                target="_blank"
              >
                <AiFillLinkedin
                  size="28"
                  className=" border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
                />
              </a>
              <a href="https://github.com/Tykoon11" target="_blank">
                <AiFillGithub
                  size="28"
                  className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
                />
              </a>
              <a href="mailto:danobzy@gmail.com" target="_blank">
                <AiFillMail
                  size="28"
                  className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1b_Xoq5-co7nWkGivpt_x11T398AU4bu8/view?usp=share_link"
                target="_blank"
              >
                <BsFillPersonLinesFill
                  size="28"
                  className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
