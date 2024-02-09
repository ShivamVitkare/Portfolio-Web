import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a0e13] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <img
              src="https://www.aceinfoway.com/blog/wp-content/uploads/2020/07/front-end-developer.jpg"
              alt=""
            />
          </div>
          <div>
            <p className="font-bold py-2 text-[18px]">
              Front-end Developer and UI/UX Developer with Latest Technologies
              HTML, CSS, Javascript, React Js (React-Redux, React-Router,
              Toolkit), along with a knack of building applications with utmost
              efficiency.
            </p>
            <ul>
              <li className="font-bold">- Front End Developer</li>
              <li className="font-bold">- UI/UX Developer</li>
            </ul>
            <a
              href="https://drive.google.com/file/d/1OM5l4NaEL7WPkA6S-HyarUnMBI0sWI8D/view?usp=sharing"
              download
              className="text-white group border-2 w-[120px] px-4 py-2 my-3 flex items-center bg-[#000000] hover:border-pink-600"
            >
              Resume
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;