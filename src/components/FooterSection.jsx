import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const FooterSection = () => {
  return (
    <div className="bg-[#101727] text-white py-25">
      <div className="main mx-auto w-10/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
        <div className="mr-4">
          <h3 className="text-2xl font-bold mb-4">DigiTools</h3>
          <p className="text-gray-500">
            Premium digital tools for creators, professionals, and businesses.
            Work smarter with our suite of powerful tools.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-xl">Product</h4>
          <ul className="text-gray-500">
            <li>Features</li>
            <li>Pricing</li>
            <li>Templates</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Company</h4>
          <ul className="text-gray-500">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Resources</h4>
          <ul className="text-gray-500">
            <li>Documentation</li>
            <li>Help Center</li>
            <li>Community</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-xl mb-3">Social Links</h4>
          <div className="flex items-center gap-4">
            <span className="bg-white text-black p-1 rounded-full">
              <FaInstagram />
            </span>
            <span className="bg-white text-black p-1 rounded-full">
              <FaFacebook />
            </span>
            <span className="bg-white text-black p-1 rounded-full">
              <FaTwitter />
            </span>
          </div>
        </div>
      </div>

      <hr className="text-gray-400 mt-5 w-10/12 mx-auto" />

      <div className="w-10/12 mx-auto flex flex-col md:flex-row justify-between items-center mt-20">
        <div className="text-gray-500"> &copy; salman shah. All right reserved.</div>
        <div className="flex items-center gap-4 text-gray-500">
          <h2>Privacy Policy</h2>
          <h2>Terms of Service</h2>
          <h2>Cookies</h2>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
