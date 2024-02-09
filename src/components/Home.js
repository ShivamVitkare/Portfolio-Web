import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typed from "react-typed";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#000000]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white font-bold text-2xl ">Hi, my name is , </p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#ccd6f6] my-2 ">
          Shivam Vitkare
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0] my-2">
          I'm a{" "}
          <Typed
          className="text-white text-4xl sm:text-7xl"
            strings={["Frontend Developer", "UI Developer"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          ></Typed>
        </h2>
      
        <div>
        
            
         
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
         
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>

           
          </button>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
