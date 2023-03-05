import React from "react";
import {
  AiFillCloseCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
} from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="max-w-[1240px] w-[50vw] content-center space-y-3 md:space-y-4 max-h-[70vh]">
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
          I'm a Full-Stack Developer specialized in building (and occasionally
          designing) exceptional digital experience. I am efficient in frontend
          and backend development, fully integrated with amazing functionalities
          and designed to meet user requirements.
        </p>
        <div className="w-full md:px-[15%] flex justify-center">
          <div className="w-full flex justify-between ">
            <AiFillLinkedin
              size="40"
              className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
            />
            <AiFillGithub
              size="40"
              className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
            />
            <AiFillMail
              size="40"
              className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
            />
            <BsFillPersonLinesFill
              size="40"
              className="border-2 rounded-md border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
