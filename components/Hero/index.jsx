import React from "react";

// Icons
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="max-w-7xl w-full m-auto md:py-32 py-12 grid place-items-center grid-cols-1 md:grid-cols-2 md:gap-6 gap-10">
      <div className="">
        <h1 className="lg:text-7xl md:text-5xl text-4xl md:text-left text-center font-bold text-slate-900">
          Your favourite online clinic.
        </h1>
        <ul className="my-6 flex flex-col md:justify-start md:items-start justify-center items-center gap-2">
          <li className="text-sm text-stone-400 font-semibold">
            1. Same day treatment
          </li>
          <li className="text-sm text-stone-400 font-semibold">
            2. Board-certified practitioners
          </li>
          <li className="text-sm text-stone-400 font-semibold">
            3. Satisfaction guarantee
          </li>
        </ul>

        <div className="mt-6 flex md:justify-start justify-center items-center gap-4 md:flex-row flex-col">
          <button
            className="flex justify-center items-center gap-2 bg-indigo-800 text-white border border-indigo-800 py-3 px-10 rounded-full duration-150 md:text-sm text-xs hover:text-indigo-800 hover:bg-white md:w-max w-full"
            title="Download on the apple store"
          >
            <FaApple fontSize={22} />
            <span className="flex flex-col justify-center items-start text-xs">
              <span>Download on the</span>
              <b>Apple Store</b>
            </span>
          </button>

          <button
            className="flex justify-center items-center gap-2 bg-amber-100 text-gray-800 border border-amber-100 py-3 px-10 rounded-full duration-150 md:text-sm text-xs md:w-max w-full"
            title="Download on the google play"
          >
            <FaGooglePlay fontSize={22} />
            <span className="flex flex-col justify-center items-start text-xs">
              <span>Get it from</span>
              <b>Google Play</b>
            </span>
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <img src="/hero-image.svg" alt="Hero-image" style={{ width: "100%" }} />
      </div>
    </div>
  );
};

export default Hero;
