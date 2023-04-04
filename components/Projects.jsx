import React from "react";
import MovieApp from "../public/assets/movieapp.jpg";
import DocPlanner from "../public/assets/docplanner.jpg";
import Expense from "../public/assets/expensetracker.jpg";
import resize from "../public/assets/resizeapp.jpg";
import ProjectsItem from "./mini components/ProjectsItem";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";

const Projects = () => {
  const slides = [
    {
      url: [
        resize,
        "Resize App",
        "Node Js/JavaScript",
        "https://top-t-resize-app.onrender.com",
      ],
    },
    {
      url: [
        MovieApp,
        "Movie Trailer App",
        "React Js",
        "https://movietrailerapp.netlify.app",
      ],
    },
    {
      url: [
        Expense,
        "Expense Tracker App",
        "React Js",
        "https://track-expenseapp.netlify.app/",
      ],
    },
    {
      url: [DocPlanner, "Docplanner Replica", "HTML/CSS", "/"],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      id="projects"
      className="min-h-screen flex justify-center items-center bg-[#000000] py-[100px] md:pt-[120px]"
    >
      <div className="lg:max-w-7xl px-4 pt-4 lg:border-l-0 border-[#F53062]">
        <div className="flex justify-center mb-4 ">
          <div className=" w-full">
            <div className="text-center md:text-start md:ml-12">
              <h2 className="uppercase tracking-tight font-extrabold md:text-3xl text-[#C9CACE]">
                My Projects<span className="text-[#F53062]">.</span>
              </h2>

              <p className="text-[#5b5c61] tracking-tight text-xl mt">
                Here are a few of my projects. Click on the links and explore
              </p>
            </div>
          </div>
        </div>
        <div className=" md:hidden grid-cols-2 gap-6 ">
          <ProjectsItem
            title="Movie Trailer App"
            type="React Js"
            backgroundImage={MovieApp}
            target="_blank"
            projectUrl="https://movietrailerapp.netlify.app"
          />
          <ProjectsItem
            title="Expense Tracker App"
            type="React Js"
            backgroundImage={Expense}
            target="_blank"
            projectUrl="https://track-expenseapp.netlify.app/"
          />
          <ProjectsItem
            title="Docplanner Replica"
            type="HTML/CSS"
            target="_blank"
            backgroundImage={DocPlanner}
            projectUrl="/"
          />
          <ProjectsItem
            title="Resize App"
            type="JavaScript"
            backgroundImage={resize}
            target="_blank"
            projectUrl="https://top-t-resize-app.onrender.com"
          />
        </div>

        <div className="hidden md:block">
          <div className="flex items-center ">
            <div>
              <AiFillCaretLeft
                onClick={prevSlide}
                className="h-6 w-6 cursor-pointer fill-[#F53062]"
              />
            </div>

            <div className="relative group hover:bg-gradient-to-r from-[#1c1d1e] to-[#58585a] ease-in duration-300 flex justify-center items-center">
              <div className=" max-w-3xl h-auto w-full ease-in duration-500 group-hover:border-4 border-[#F53062]">
                <Image
                  src={slides[currentIndex].url[0]}
                  alt="project"
                  className="group-hover:opacity-20 opacity-100 ease-in duration-500 "
                />
              </div>
              <div className="hidden group-hover:block duration-300 ease-in absolute text-center">
                <h3 className="text-white lg:tracking-wider lg:text-2xl">
                  {slides[currentIndex].url[1]}
                </h3>
                <p className="text-white lg:tracking-wider lg:font-bold">
                  {slides[currentIndex].url[2]}
                </p>
                <Link href={slides[currentIndex].url[3]} target="_blank">
                  <p className="text-gray-700 tracking-tight cursor-pointer bg-white lg:font-bold px-6 py-1 mt-2 hover:bg-[#F53062] hover:text-[#eff0f4]">
                    Visit site
                  </p>
                </Link>
              </div>
            </div>

            <div>
              <AiFillCaretRight
                onClick={nextSlide}
                className="h-6 w-6 cursor-pointer fill-[#F53062]"
              />
            </div>
          </div>
          <div className="mt-2">
            <div className="flex w-full justify-center">
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                  className="mr-4 text-2xl cursor-pointer"
                >
                  <BsDot className="fill-[#F53062]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
