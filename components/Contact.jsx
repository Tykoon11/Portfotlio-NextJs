import React from "react";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="min-h-screen w-screen px-6 flex flex-col justify-center items-center py-[100px] md:pt-[120px] bg-blue-300">
      <div>
        <div className="text-center">
          <h2>Contact </h2>
          <p>I am available for freelance or full-time positions.</p>
          <p>Contact me and I'll be sure to respond.</p>
        </div>
      </div>

      <div className="w-full max-w-md md:max-w-4xl px-1 py-3 md:p-6 mb-6 shadow-xl shadow-gray-400 rounded-xl">
        <form>
          <div className="md:flex justify-between gap-6">
            <div className="md:w-1/2">
              <label>Name</label>
              <input
                className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
                type="text"
                name="name"
                aria-label="/"
              />
            </div>
            <div className="md:w-1/2">
              <label>Phone Number</label>
              <input
                className="border-2 rounded-lg p-1 w-full border-gray-300"
                type="text"
                name="number"
                aria-label="/"
              />
            </div>
          </div>
          <div className="">
            <label>Email</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
              type="email"
              name="email"
              aria-label="/"
            />
          </div>
          <div className="">
            <label>Subject</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
              type="text"
              name="subject"
              aria-label="/"
            />
          </div>
        </form>
      </div>

      <div className="w-full md:max-w-2xl">
        <div className="flex justify-between">
          <AiFillLinkedin className="rounded-full p-1  h-12 w-12 fill-[#4071B1] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
          <AiFillGithub className="rounded-full p-1 h-12 w-12 fill-[#0E2333] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
          <AiFillMail className="rounded-full p-1 h-12 w-12 fill-[#E24134] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
          <BsFillPersonLinesFill className="rounded-full p-1 h-12 w-12 fill-[#024F77] border-black shadow-lg shadow-gray-400 cursor-pointer hover:scale-125 ease-in duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
