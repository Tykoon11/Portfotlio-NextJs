import React from "react";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiPostgresql,
  SiAngular,
  SiTypescript,
  SiJasmine,
  SiTailwindcss,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io";
import { FaNpm } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-[100px] md:pt-[120px]">
      <div className="lg:max-w-7xl px-3">
        <div className="flex justify-center">
          <h2 className="tracking-widest md:text-5xl">My Skills</h2>
        </div>
        <br />
        <hr />
        <br />
        <div className="grid grid-cols-3 gap-10 md:grid-cols-4">
          <div className="py-4 px-5 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiHtml5 className="h-12 w-12 fill-[#F25220] hover:scale-110 ease-in duration-200 " />
            </div>
            <p>HTML</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiCss3 className="h-12 w-12 fill-[#028FD0] hover:scale-110 ease-in duration-200" />
            </div>
            <p>CSS</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiJavascript className=" h-12 w-12 fill-[#EBD41B] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Javascript</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <RiReactjsLine className="h-12 w-12 fill-[#5ED2F3] hover:scale-110 ease-in duration-200" />
            </div>
            <p>ReactJs</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <IoLogoNodejs className="h-12 w-12 fill-[#509640] hover:scale-110 ease-in duration-200" />
            </div>
            <p>NodeJs</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiExpress className="h-12 w-12 fill-[black] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Express</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiMongodb className="h-12 w-12 fill-[#51A543] hover:scale-110 ease-in duration-200" />
            </div>
            <p>MongoDB</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiGit className="h-12 w-12 fill-[#E44D31] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Git</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiGithub className="h-12 w-12 fill-[#0E2333] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Github</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiTailwindcss className="h-12 w-12 fill-[#14B8C5] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Tailwind</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <FaNpm className="h-12 w-12 fill-[#C13534] hover:scale-110 ease-in duration-200" />
            </div>
            <p>npm</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiVisualstudiocode className="h-12 w-12 fill-[#0173C1] hover:scale-110 ease-in duration-200" />
            </div>
            <p>VS Code</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiPostgresql className="h-12 w-12 fill-[#2F648B] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Postgres</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiJasmine className="h-12 w-12 fill-[#833D7C] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Jasmine</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiTypescript className="h-12 w-12 fill-[#007ACB] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Typescript</p>
          </div>

          <div className="py-3 px-4 flex flex-col items-center justify-center shadow-xl shadow-gray-400 rounded-xl hover:scale-110 ease-in duration-300">
            <div>
              <SiAngular className="h-12 w-12 fill-[#D2022F] hover:scale-110 ease-in duration-200" />
            </div>
            <p>Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
