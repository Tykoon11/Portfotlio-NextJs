import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectsItem = ({ title, type, backgroundImage, projectUrl }) => {
  return (
    <div className="mb-4 md:mb-0 hover:shadow-2xl shadow-gray-900 rounded-xl relative group hover:bg-gradient-to-r from-[#1E2022] to-[#6a6c6f] ease-in duration-300 p-2 bg-white bg-opacity-50 flex justify-center items-center">
      <Image
        src={backgroundImage}
        alt="projects"
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="hidden group-hover:block absolute text-center">
        <h3 className="text-white lg:tracking-wider lg:text-2xl">{title}</h3>
        <p className="text-white lg:tracking-wider lg:font-bold">{type}</p>
        <Link href={projectUrl}>
          <p className="text-gray-700 md:tracking-wider underline cursor-pointer rounded-lg bg-white lg:font-bold py-1 lg:py-2">
            Visit site
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsItem;
