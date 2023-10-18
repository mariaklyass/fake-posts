import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-[#946b6f]/30 sticky top-0 z-40 backdrop-blur-lg">
      <nav className="w-full my-2 drop-shadow-xl flex justify-around items-center">
        <div className="flex justify-evenly gap-1.5 ml-2">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <ul className="flex items-center justify-center gap-8 flex-wrap  p-3 text-stone-700 mx-4 rounded-md">
          <li className="block lg:inline-block hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="block lg:inline-block hover:text-white">
            <Link to="/posts">Posts</Link>
          </li>
          <li className="block lg:inline-block hover:text-white">
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
        <div className="hover:text-white hidden sm:block">
          <Link to="https://jsonplaceholder.typicode.com/">
            JSON Placeholder | Info
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
