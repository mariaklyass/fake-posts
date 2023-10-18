import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr className="mx-4" />
      <Outlet />
    </div>
  );
};

export default Layout;
