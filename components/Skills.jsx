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
    <div
      id="skills"
      className="min-h-screen flex justify-center items-center py-[100px] md:pt-[120px] bg-[#000000]"
    >
      <div className="lg:max-w-7xl px-3 lg:px-20 lg:py-5 lg:border-l-2 border-[#F53062]">
        <div className="flex justify-center md:justify-start  ">
          <h2 className="uppercase tracking-tight font-extrabold md:text-3xl md:text-start text-[#C9CACE]">
            My Skills<span className="text-[#F53062]">.</span>
          </h2>
        </div>
        <br />
        <div className="grid grid-cols-3 gap-10 md:grid-cols-4">
          <div className="py-4 px-5 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiHtml5 className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#F25220]" />
            </div>
            <p>HTML</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiCss3 className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#028FD0] " />
            </div>
            <p>CSS</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiJavascript className=" h-12 w-12 fill-[#eff0f4] group-hover:fill-[#EBD41B] " />
            </div>
            <p>Javascript</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <RiReactjsLine className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#5ED2F3] " />
            </div>
            <p>ReactJs</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <IoLogoNodejs className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#509640] " />
            </div>
            <p>NodeJs</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiExpress className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[black] " />
            </div>
            <p>Express</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiMongodb className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#51A543] " />
            </div>
            <p>MongoDB</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiGit className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#E44D31] " />
            </div>
            <p>Git</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiGithub className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#0E2333] " />
            </div>
            <p>Github</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiTailwindcss className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#14B8C5] " />
            </div>
            <p>Tailwind</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <FaNpm className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#C13534] " />
            </div>
            <p>npm</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiVisualstudiocode className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#0173C1] " />
            </div>
            <p>VS Code</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiPostgresql className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#2F648B] " />
            </div>
            <p>Postgres</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiJasmine className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#833D7C] " />
            </div>
            <p>Jasmine</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiTypescript className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#007ACB] " />
            </div>
            <p>Typescript</p>
          </div>

          <div className="py-3 px-4 text-[#c9cace] group flex flex-col items-center justify-center bg-[#5b5c61]">
            <div>
              <SiAngular className="h-12 w-12 fill-[#eff0f4] group-hover:fill-[#D2022F] " />
            </div>
            <p>Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
