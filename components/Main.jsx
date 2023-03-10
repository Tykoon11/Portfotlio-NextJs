import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div
      id="home"
      className="h-screen w-full flex justify-center items-center"
    >
      <div className="max-w-7xl w-[70vw] content-center space-y-3 md:space-y-5 max-h-[70vh]">
        <h3 className="uppercase tracking-widest text-gray-600 text-center">
          Let's build projects together
        </h3>
        <h1 className="capitalize text-center text-gray-700">
          Hello, I'm <span className="text-[#1D92FF]">Nobleman</span>
        </h1>
        <h1 className="capitalize text-center text-gray-700">
          A Full-Stack Web Developer
        </h1>
        <p className="text-center text-gray-600">
          I am efficient in building responsive front-end web applications and
          integrating backend technologies.
        </p>
        <div className="w-full md:px-[15%] flex justify-center">
          <div className="w-full flex justify-between ">
            <AiFillLinkedin className="rounded-full p-1  h-14 w-14 fill-[#4071B1] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
            <AiFillGithub className="rounded-full p-1 h-14 w-14 fill-[#0E2333] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
            <AiFillMail className="rounded-full p-1 h-14 w-14 fill-[#E24134] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
            <BsFillPersonLinesFill className="rounded-full p-1 h-14 w-14 fill-[#024F77] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
