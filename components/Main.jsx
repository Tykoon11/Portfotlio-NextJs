import Image from "next/image";
import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import mainBg from "../public/assets/main-bg.jpg";

const Main = () => {
  return (
    <div
      id="home"
      className="min-h-[100vh] w-full flex justify-center md:justify-start md:items-end items-center "
    >
      <div className="z-[-20]">
        <Image src={mainBg} layout="fill" objectFit="cover" className="" />
      </div>
      <div className="max-w-7xl w-[70vw] content-center md:content-start space-y-3 md:space-y-5 max-h-[70vh] md:pl-[10vh] md:hidden">
        <h3 className="uppercase tracking-widest text-[#eff0f4] text-center md:text-start">
          Let's build projects together
        </h3>
        <h1 className="capitalize text-center md:text-start text-[#eff0f4]">
          Hello, I'm <span className="text-[#eff0f4]">Nobleman</span>
        </h1>
        <h1 className="capitalize text-center md:text-start text-[#eff0f4]">
          A Full-Stack Web Developer
        </h1>
        <p className="text-center md:text-start text-[#eff0f4]">
          I am efficient in building responsive front-end web applications and
          integrating backend technologies.
        </p>
        <div className="w-full md:px-[15%] flex justify-center">
          <div className="w-full flex justify-between ">
            <a
              href="https://www.linkedin.com/in/nobleman-unachukwu-7a53b2222/"
              target="_blank"
            >
              <AiFillLinkedin className="rounded-full p-1 h-14 w-14 fill-[#C9CACE] border-black shadow-lg shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a href="https://github.com/Tykoon11" target="_blank">
              <AiFillGithub className="rounded-full p-1 h-14 w-14 fill-[#C9CACE] border-black shadow-lg shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a href="mailto:danobzy@gmail.com" target="_blank">
              <AiFillMail className="rounded-full p-1 h-14 w-14 fill-[#C9CACE] border-black shadow-lg shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1b_Xoq5-co7nWkGivpt_x11T398AU4bu8/view?usp=share_link"
              target="_blank"
            >
              <BsFillPersonLinesFill className="rounded-full p-1 h-14 w-14 fill-[#C9CACE] border-black shadow-lg shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:block mb-16">
        <div className="ml-16 static">
          <h3 className="absolute bottom-[51vh] uppercase tracking-widest text-[#5b5c61] text-xs text-start">
            Let's build projects together
          </h3>
        </div>
        <div className="ml-16 static">
          <h1 className="absolute bottom-[40vh] text-8xl uppercase font-extrabold text-[#5b5c61] tracking-tight leading-0">
            FullStack
          </h1>
          <h1 className="absolute bottom-[31vh] text-8xl uppercase font-extrabold text-[#5b5c61] tracking-tight">
            Web
          </h1>
          <h1 className="absolute bottom-[22vh] text-8xl ml-14 uppercase font-extrabold text-[#eff0f4] tracking-tight">
            Developer
          </h1>
          <h1 className="absolute bottom-[13vh]  text-8xl font-extrabold text-[#eff0f4] tracking-tight">
            04.19
          </h1>
        </div>

        <div className="static bg-[#F53062] border-2 border-[#F53062]">
          <div>
            <a
              href="https://www.linkedin.com/in/nobleman-unachukwu-7a53b2222/"
              target="_blank"
              className="absolute bottom-[70vh] right-[10vw]"
            >
              <AiFillLinkedin className="rounded-full p-1 h-9 w-9 fill-[#F53062] border-black shadow-lg hover:shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a
              href="https://github.com/Tykoon11"
              target="_blank"
              className="absolute bottom-[64vh] right-[10vw]"
            >
              <AiFillGithub className="rounded-full p-1 h-9 w-9 fill-[#F53062] border-black shadow-lg hover:shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a
              href="mailto:danobzy@gmail.com"
              target="_blank"
              className="absolute bottom-[58vh] right-[10vw]"
            >
              <AiFillMail className="rounded-full p-1 h-9 w-9 fill-[#F53062] border-black shadow-lg hover:shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
            <a
              href="https://drive.google.com/file/d/1b_Xoq5-co7nWkGivpt_x11T398AU4bu8/view?usp=share_link"
              target="_blank"
              className="absolute bottom-[52vh] right-[10vw]"
            >
              <BsFillPersonLinesFill className="rounded-full p-1 h-9 w-9 fill-[#F53062] border-black shadow-lg hover:shadow-gray-700 cursor-pointer hover:scale-125 ease-in duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
