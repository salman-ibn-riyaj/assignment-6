import React from "react";
import { BsPlay } from "react-icons/bs";
import heroImg from '../assets/banner.png'

const HeroSection = () => {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center my-20 gap-11">
      <div className="space-y-3.5">
        <span>
          <small className="bg-linear-to-r from-purple-900 to-violet-500 bg-clip-text text-transparent">New: AI-Powered Tools Available</small>
        </span>
        <h1 className="font-extrabold text-4xl leading-12">
          Supercharge Your <br /> Digital Workflow
        </h1>

        <p className="max-w-75 text-gray-500">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br />
          Explore Products
        </p>

        <div className="flex items-center gap-4">
          <button className="btn bg-linear-to-r from-purple-900 to-violet-500 rounded-4xl w-40 text-white">Explore</button>
          <button className="btn flex items-center gap-2 w-40 rounded-4xl bg-white text-purple-700 border border-purple-800">
            <span>
              <BsPlay />
            </span>
            Work Demo
          </button>
        </div>
      </div>

      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default HeroSection;
