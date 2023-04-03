import React from "react";
import AboutImg from "../public/assets/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <div
        id="about"
        className=" min-h-screen flex justify-center items-center pt-[100px] bg-black md:pt-[100px]"
      >
        <div className="p-6 flex flex-col max-w-lg md:max-w-3xl lg:max-w-7xl lg:flex-row lg:gap-10 ">
          <div className="mb-5 lg:mb-0 lg:w-1/2 md:text-l lg:text-xl xl:text-2xl md:leading-8 lg:flex lg:items-center">
            <div className="bg-[#1E2022] p-4 ">
              <h2 className="text-center uppercase tracking-tight font-extrabold md:text-3xl md:text-start text-[#C9CACE]">
                About Me <span className="text-[#F53062]">.</span>
              </h2>
              <hr className="md:hidden" />
              <br />
              <p className="text-center tracking-tight md:text-left text-[#5b5c61] ">
                Hi there! My name is Nobleman, and I am a{" "}
                <span className="text-[#eff0f4]">Full Stack Developer</span>{" "}
                with a passion for creating innovative and user-friendly
                applications. I specialize in both front-end and back-end
                development and have experience working with a wide range of
                programming languages and frameworks, including
                <span className="text-[#F53062]"> JavaScript,</span>{" "}
                <span className="text-[#eff0f4]">React,</span>{" "}
                <span className="text-[#eff0f4]">Angular,</span> and{" "}
                <span className="text-[#F53062]">Node.js.</span>
              </p>
              <br />
              <p className="text-center md:text-left text-[#5b5c61] tracking-tight">
                I freelance for companies and individuals in need of my
                expertise and I enjoy using my skills to develop elegant and
                intuitive web applications that help solve real-world problems.
                I'm a firm believer in continuous learning and self-improvement,
                and I'm always on the lookout for new{" "}
                <span className="text-[#eff0f4]">challenges</span> and {""}
                <span className="text-[#F53062]">opportunities</span> to grow my
                skills.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center bg-[#F53062] min-h-[500px]">
            <div>
              <div className="">
                <h1 className=" font-extrabold tracking-widest text-7xl uppercase text-[#eff0f4]">
                  Mern
                </h1>
              </div>
              <div className="">
                <h1 className="font-extrabold text-7xl uppercase text-[#eff0f4]">
                  Stack.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
