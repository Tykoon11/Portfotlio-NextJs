import React from "react";
import Image from "next/image";
import MovieApp from "../public/assets/movieapp.png";
import DocPlanner from "../public/assets/docplanner.png";
import Expense from "../public/assets/expensetracker.png";
import cart from "../public/assets/cart.png";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[] py-[100px] md:pt-[120px]">
      <div className="lg:max-w-7xl px-6">
        <div className="flex justify-center mb-4 ">
          <div className="text-center">
            <h2>My Projects</h2>
            <br />
            <hr />
            <br />
            <p>Here are a few of my projects. Click on the links and explore</p>
          </div>
        </div>
        <div className=" md:grid grid-cols-2 gap-6  ">
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl relative group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300 p-2 bg-white flex justify-center items-center">
            <Image
              src={MovieApp}
              alt="laptop"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute text-center">
              <h3 className="text-white tracking-wider text-2xl">
                Movie Trailer App
              </h3>
              <p className="text-white tracking-wider font-bold">React Js</p>
              <Link href="/">
                <p className="text-white tracking-wider underline cursor-pointer">
                  Visit site
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl relative group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300 p-2 bg-white flex justify-center items-center">
            <Image
              src={Expense}
              alt="laptop"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute text-center">
              <h3 className="text-white tracking-wider text-2xl">
                Expense Tracker App
              </h3>
              <p className="text-white tracking-wider font-bold">React Js</p>
              <Link href="/">
                <p className="text-white tracking-wider underline cursor-pointer">
                  Visit site
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl relative group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300 p-2 bg-white flex justify-center items-center">
            <Image
              src={DocPlanner}
              alt="laptop"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute text-center">
              <h3 className="text-white tracking-wider text-2xl">
                Docplanner Replica
              </h3>
              <p className="text-white tracking-wider font-bold">HTML/CSS</p>
              <Link href="/">
                <p className="text-white tracking-wider underline cursor-pointer">
                  Visit site
                </p>
              </Link>
            </div>
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl relative group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] ease-in duration-300 p-2 bg-white flex justify-center items-center">
            <Image
              src={cart}
              alt="laptop"
              className="rounded-xl group-hover:opacity-10"
            />
            <div className="hidden group-hover:block absolute text-center">
              <h3 className="text-white tracking-wider text-2xl">
                Shopping Cart
              </h3>
              <p className="text-white tracking-wider font-bold">JavaScript</p>
              <Link href="/">
                <p className="text-white tracking-wider underline cursor-pointer">
                  Visit site
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
