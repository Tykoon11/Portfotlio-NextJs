import React from "react";
import AboutImg from "../public/assets/about.jpg";
import Image from "next/image";

const About = () => {
  return (
    <>
      <hr />
      <div
        id="about"
        className=" min-h-screen flex justify-center items-center  bg-[#629cde] md:pt-[100px]"
      >
        <div className="p-6 flex flex-col max-w-lg md:max-w-3xl lg:max-w-7xl lg:flex-row lg:gap-10 ">
          <div className="mb-5 lg:w-1/2 md:text-l lg:text-xl xl:text-2xl md:leading-8 lg:flex lg:items-center">
            <div>
              <h2 className="text-center tracking-widest md:text-5xl">
                About Me
              </h2>
              <br />
              <hr />
              <br />
              <p className="text-center text-gray-600 ">
                Hi there! My name is Nobleman, and I am a{" "}
                <span className="text-[#dc4000]">Full Stack Developer</span>{" "}
                with a passion for creating innovative and user-friendly
                applications. I specialize in both front-end and back-end
                development and have experience working with a wide range of
                programming languages and frameworks, including
                <span className="text-[#EBD41B]"> JavaScript</span>,{" "}
                <span className="text-[#5ed3f3f9]">React</span>,{" "}
                <span className="text-[#D2022F]">Angular</span>, and{" "}
                <span className="text-[#79cf65]">Node.js</span>.
              </p>

              <p className="text-center text-gray-600">
                I freelance for companies and individuals in need of my
                expertise and I enjoy using my skills to develop elegant and
                intuitive web applications that help solve real-world problems.
                I'm a firm believer in continuous learning and self-improvement,
                and I'm always on the lookout for new{" "}
                <span className="text-[#F65C15]">challenges</span> and
                <span className="text-[#39f976d4]">opportunities</span> to grow
                my skills.
              </p>
              <br />
              <p className="text-center underline text-gray-700">
                <a href="">Check out some of my latest projects</a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:flex md:justify-center lg:items-center">
            <div className="shadow-xl shadow-gray-400 rounded-xl hover:scale-105 ease-in duration-300 p-4 bg-white">
              <Image src={AboutImg} alt="laptop" className="rounded-xl " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
