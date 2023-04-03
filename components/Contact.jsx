import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_syv07sm",
        "template_myvxhdz",
        form.current,
        "r5DOtESDTQB1M4HXX"
      )
      .then(
        (result) => {
          alert(`Thank you for contacting us..`);
          alert(` Your Message was sent successfully!`);
        },
        (error) => {
          alert(error.text);
        }
      );
    form.current.reset();
  };
  return (
    <div
      id="contact"
      className="min-h-screen w-full px-6 flex flex-col justify-center items-center py-[100px] md:pt-[120px] "
    >
      <div>
        <div className="text-center">
          <h2>Contact </h2>
          <p>I am available for freelance or full-time positions.</p>
          <p>Contact me and I'll be sure to respond.</p>
        </div>
      </div>

      <div className="w-full max-w-md md:max-w-4xl px-1 pt-3 md:p-5 mb-5 shadow-xl shadow-gray-400 rounded-xl">
        <form ref={form} action="" onSubmit={sendEmail}>
          <div className="md:flex justify-between gap-6">
            <div className="md:w-1/2">
              <label>Name</label>
              <input
                className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
                type="text"
                name="from_name"
                aria-label="/"
                placeholder="Your Full Name"
              />
            </div>
            <div className="md:w-1/2">
              <label>Phone Number</label>
              <input
                className="border-2 rounded-lg p-1 w-full border-gray-300"
                type="text"
                name="phone_number"
                aria-label="/"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className="">
            <label>Email</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
              type="email"
              name="user_email"
              aria-label="/"
              placeholder="Your Email Address"
            />
          </div>
          <div className="">
            <label>Subject</label>
            <input
              className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
              type="text"
              name="subject"
              aria-label="/"
              placeholder="Subject Of Your Message"
            />
          </div>
          <div className="">
            <label>Message</label>
            <textarea
              className="border-2 rounded-lg p-1 flex border-gray-300 w-full"
              rows="8"
              name="message"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <button className="w-full p-3 text-gray-100 mb-2 md:mb-0 mt-4 bg-[#629cde]">
            Send Message
          </button>
        </form>
      </div>

      <div>{}</div>

      <div className="w-full md:max-w-2xl">
        <div className="flex justify-between">
          <a
            href="https://www.linkedin.com/in/nobleman-unachukwu-7a53b2222/"
            target="_blank"
          >
            <AiFillLinkedin className="rounded-full p-1  h-12 w-12 fill-[#4071B1] border-black shadow-lg shadow-gray-500 cursor-pointer hover:scale-125 ease-in duration-300" />
          </a>
          <a href="https://github.com/Tykoon11" target="_blank">
            <AiFillGithub className="rounded-full p-1 h-12 w-12 fill-[#0E2333] border-black shadow-lg shadow-gray-500 cursor-pointer hover:scale-125 ease-in duration-300" />
          </a>
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer hover:scale-125 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] " size={30} />
            </div>
          </Link>
          <a href="mailto:danobzy@gmail.com" target="_blank">
            <AiFillMail className="rounded-full p-1 h-12 w-12 fill-[#E24134] border-black shadow-lg shadow-gray-500 cursor-pointer hover:scale-125 ease-in duration-300" />
          </a>
          <a
            href="https://drive.google.com/file/d/1b_Xoq5-co7nWkGivpt_x11T398AU4bu8/view?usp=share_link"
            target="_blank"
          >
            <BsFillPersonLinesFill className="rounded-full p-1 h-12 w-12 fill-[#024F77] border-black shadow-lg shadow-gray-500 cursor-pointer hover:scale-125 ease-in duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
