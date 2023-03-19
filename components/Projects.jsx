import React from "react";
import MovieApp from "../public/assets/movieapp.png";
import DocPlanner from "../public/assets/docplanner.png";
import Expense from "../public/assets/expensetracker.png";
import resize from "../public/assets/resizeapp.png";
import ProjectsItem from "./mini components/ProjectsItem";

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen flex justify-center items-center bg-gradient-to-t from-[#4093f1] via-[#4093f1] to-[#ECF0F3] bg-opacity-50 py-[100px] md:pt-[120px]"
    >
      <div className="lg:max-w-7xl px-6">
        <div className="flex justify-center mb-4 ">
          <div className="text-center">
            <h2>My Projects</h2>
            <hr />
            <br />
            <p>Here are a few of my projects. Click on the links and explore</p>
          </div>
        </div>
        <div className=" md:grid grid-cols-2 gap-6  ">
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
      </div>
    </div>
  );
};

export default Projects;
