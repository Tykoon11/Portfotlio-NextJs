import React from "react";
import MovieApp from "../public/assets/movieapp.png";
import DocPlanner from "../public/assets/docplanner.png";
import Expense from "../public/assets/expensetracker.png";
import resize from "../public/assets/resizeapp.png";
import ProjectsItem from "./mini components/ProjectsItem";
import Image from "next/image";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

const Projects = () => {
  const slides = [
    {
      url: resize,
    },
    {
      url: MovieApp,
    },
    {
      url: Expense,
    },
    {
      url: DocPlanner,
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
      <div className="lg:max-w-7xl px-4 pt-4 lg:border-l-2 border-[#F53062]">
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
            <div className=" max-w-3xl h-auto w-full opacity-70 ease-in duration-500">
              <Image
                src={slides[currentIndex].url}
                alt="project"
                className="opacity-70 ease-in duration-500"
              />
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
