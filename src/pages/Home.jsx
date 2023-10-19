import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="relative mx-4 mt-2">
      <img src="./home.jpg" className="object-cover h-screen"></img>
      <Link
        to="/posts"
        className="absolute text-center uppercase text-5xl md:text-7xl text-stone-800 bg-[#946b6f]/20 drop-shadow-md p-6 rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        read lorem ipsum blog
      </Link>{" "}
    </div>
  );
};

export default Home;
