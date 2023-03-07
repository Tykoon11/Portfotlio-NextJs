import React from "react";
import Image from "next/image";
import MovieApp from "../public/assets/movieapp.png";
import DocPlanner from "../public/assets/docplanner.png";
import Expense from "../public/assets/expensetracker.png";
import cart from "../public/assets/cart.png";

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
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 p-2 bg-white">
            <Image src={MovieApp} alt="laptop" className="rounded-xl " />
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 p-2 bg-white">
            <Image src={Expense} alt="laptop" className="rounded-xl " />
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 p-2 bg-white">
            <Image src={DocPlanner} alt="laptop" className="rounded-xl " />
          </div>
          <div className="mb-4 md:mb-0 shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 p-2 bg-white">
            <Image src={cart} alt="laptop" className="rounded-xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
