import Link from "next/link";
import React from "react";

// Icons
import { BsFillCloudDownloadFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="max-w-7xl w-full m-auto flex justify-between items-center md:gap-0 md:mt-4 md:flex-row flex-col gap-6">
      <div>
        <h2 className="flex flex-col justify-center items-center">
          <Link href="" className="text-2xl font-bold">
            Docta
          </Link>
          <span className="text-xs text-indigo-800">Mobile App</span>
        </h2>
      </div>

      <div>
        <ul className="flex justify-center items-center md:gap-6 gap-4 flex-wrap">
          <li className="font-semibold text-gray-800 md:text-md text-sm">
            <Link href="" title="How it works">
              How it works
            </Link>
          </li>
          <li className="font-semibold text-gray-800 md:text-md text-sm">
            <Link href="" title="Our Services">
              Our Services
            </Link>
          </li>
          <li className="font-semibold text-gray-800 md:text-md text-sm">
            <Link href="" title="Pricing & Insurance">
              Pricing & Insurance
            </Link>
          </li>
          <li className="font-semibold text-gray-800 md:text-md text-sm">
            <Link href="" title="Inside Docta">
              Inside Docta
            </Link>
          </li>
          <li className="font-semibold text-gray-800 md:text-md text-sm">
            <Link href="" title="Reviews">
              Reviews
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <button className="flex justify-center items-center gap-1 py-2 px-6 border-2 border-indigo-800 text-indigo-700 bg-white rounded-full font-semibold text-sm">
          <span>Download</span>
          <BsFillCloudDownloadFill fontSize={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
