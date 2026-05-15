import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Help from "./assets/components/Help";

const Layout = () => {
  const navigate = useNavigate();

  function navigateToHelp() {
    navigate("/Help");
  }
  return (
    <div>
      <Navbar />
      <button
        onClick={navigateToHelp}
        className="p-4 border-none bg-amber-300 rounded-xl m-3 font-bold"
      >
        Navigate to Help
      </button>
      <Outlet />
    </div>
  );
};

export default Layout;
