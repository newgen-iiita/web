import Image from "next/image";
import { Facebook, Instagram, Twitter, LinkedIn } from "@mui/icons-material";
import Carousel from "./Carousel";
// import Carousel from "./carousel";

export default function Footer() {
  return (
    <footer className="bg-darkCharcoal text-white py-10 px-6">
      {/* National Innovation Startup Policy Section */}
      <div className="text-center py-20 bg-darkCharcoal mb-8">
        <h2 className="text-6xl font-bold text-white mb-6">National Innovation Startup Policy</h2>
        <p className="text-[20px] text-gray-400 max-w-2xl mx-auto mb-8  leading-relaxed">
          NewGen IEDC has a mission to “promote knowledge-based <br />and technology-driven start-ups by harnessing<br /> young minds and their innovation potential in an<br /> academic environment.”
        </p>
        <a href="https://mic.gov.in/assets/doc/startup_policy_2019.pdf" >
        <button className="relative inline-flex items-center px-6 py-3 text-lg font-medium text-white rounded-lg border-2 border-teal-400 bg-transparent hover:bg-gradient-to-r hover:from-teal-400 hover:via-blue-500 hover:to-blue-600 hover:text-white transition-all duration-300">
         Download
        </button>
       </a>
      </div>
      
      {/* Carousel Section */}
      <h2 className="text-5xl font-bold text-white  px-4 py-2 rounded-lg lg:ml-5  ">
     Our Startups
      </h2>
      <Carousel />

      {/* Register Section */}
      <div className="mt-11 bg-gradient-to-r from-[#1a1a1a] via-[#3d3d3d] to-[#1d1d1e] text-center sm:text-left py-32 sm:p-10 min-h-[350px] rounded-lg shadow-lg mb-40 mx-auto max-w-7xl lg:mt-14">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          {/* Text Section */}
          <div className="sm:w-3/4">
            <h2 className="lg:text-5xl sm:text-4xl font-bold lg:mt-6">Register Your Startup Now!</h2>
            <p className="text-gray-400 mt-8 text-xl sm:text-xl  leading-relaxed space-y-4">
              Applications are welcome round the year. To apply, please fill in the form <br />here and
              click the submit button.
              For any queries, <br />clarification, or discussion about the idea, please feel free to contact the <br />coordinator, Dr. Ranjana Vyas.
            </p>
          </div>
          {/* Button Section */}
          <button className="relative px-12 py-6 text-black font-medium text-2xl bg-teal-300 rounded-lg shadow-lg hover:from-teal-500 hover:to-teal-400 transition-all z-10">
          Get Started
          </button>
        </div>
      </div>
 
    {/*image scetion*/}
      <div className="flex flex-wrap justify-center lg:justify-between items-center gap-4 lg:gap-6 mb-20">
        <Image
          src="/f1.png"
          className="ml-8 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
          alt="Entrepreneurship Development Institute of India"
          width={240}
          height={240}
        />
        <Image
          src="/f2.png"
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
          alt="Department of Science & Technology"
          width={240}
          height={240}
        />
        <Image
          src="/f3.png"
          className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
          alt="NSTEDB"
          width={240}
          height={240}
        />
        <Image
          src="/f4.png"
          className="mr-8 w-[120px] h-[120px] sm:w-[180px] sm:h-[180px] lg:w-[240px] lg:h-[240px]"
          alt="NewGen IEDC Partner"
          width={240}
          height={240}
        />
      </div>

      {/* Footer Links and Description */}
      <div className="flex flex-wrap justify-between items-start gap-8 mb-14">
        {/* Left Section: Logo and Description */}
        <div className="max-w-sm">
          <Image src="/logo.png" alt="logo" width={300} height={300} />
          <p className="mt-6 text-gray-500 text-[22px] leading-relaxed">
            A new generation E-cell to boost and grow your startup.
          </p>
        </div>

        {/* Center Section: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold text-[22px]">Useful Links</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="text-[20px] hover:text-teal-300">Content</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">How it Works</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Create</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Explore</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Terms & Services</a></li>
          </ul>
        </div>

        {/* Center Section: Community */}
        <div>
          <h3 className="text-lg font-semibold text-[22px]">Community</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="text-[20px] hover:text-teal-300">Help Center</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Partners</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Suggestions</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Blog</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Newsletters</a></li>
          </ul>
        </div>

        {/* Right Section: Partner Links */}
        <div>
          <h3 className="text-lg font-semibold text-[22px]">Partner</h3>
          <ul className="mt-4 space-y-3 text-gray-400">
            <li><a href="#" className="text-[20px] hover:text-teal-300">Our Partner</a></li>
            <li><a href="#" className="text-[20px] hover:text-teal-300">Become a Partner</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright and Social Media */}
      <div className="mt-8 border-t border-lightGray  pt-6 flex flex-wrap sm:flex-col sm:items-center md:flex-row md:justify-between text-center">
        <p className=" text-lightGray text-[20px]">
          Copyright © 2023 NewGen IEDC. All Rights Reserved.
        </p>
        <div className="flex space-x-4 sm:mt-4 lg:mt-0">
          <a href="https://www.instagram.com/ecell_iiita/" className="hover:text-teal-400">
            <Instagram fontSize="large" />
          </a>
          <a href="https://www.facebook.com/" className="hover:text-teal-400">
            <Facebook fontSize="large" />
          </a>
          <a href="https://x.com/home" className="hover:text-teal-400">
            <Twitter fontSize="large" />
          </a>
          <a href="https://www.linkedin.com/feed/" className="hover:text-teal-400">
            <LinkedIn fontSize="large" />
          </a>
        </div>
      </div>
    </footer>
  );
}
