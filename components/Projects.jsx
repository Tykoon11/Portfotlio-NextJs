import React from "react";
import MovieApp from "../public/assets/movieapp.png";
import DocPlanner from "../public/assets/docplanner.png";
import Expense from "../public/assets/expensetracker.png";
import cart from "../public/assets/cart.png";
import ProjectsItem from "./mini components/ProjectsItem";

const Projects = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[] py-[100px] md:pt-[120px]">
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
            projectUrl="/"
          />
          <ProjectsItem
            title="Expense Tracker App"
            type="React Js"
            backgroundImage={Expense}
            projectUrl="/"
          />
          <ProjectsItem
            title="Docplanner Replica"
            type="HTML/CSS"
            backgroundImage={DocPlanner}
            projectUrl="/"
          />
          <ProjectsItem
            title="Shopping Cart"
            type="JavaScript"
            backgroundImage={cart}
            projectUrl="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
