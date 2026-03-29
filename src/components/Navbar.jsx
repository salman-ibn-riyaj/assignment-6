import React from "react";
import { TiShoppingCart } from "react-icons/ti";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 w-10/12 mx-auto gap-4">
      <div>
        <h2 className="font-bold text-2xl bg-linear-to-r from-purple-900 to-violet-500 bg-clip-text text-transparent">DigiTools</h2>
      </div>

      <div className="hidden md:block">
        <ul className="flex items-center gap-4 font-semibold">
          <li>Products</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Testimonials</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="flex items-center gap-3 font-medium">
        <span>
          <TiShoppingCart />
        </span>

        <button>Login</button>

        <button className="btn bg-linear-to-r from-purple-900 to-violet-500 rounded-4xl text-white font-semibold">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;
