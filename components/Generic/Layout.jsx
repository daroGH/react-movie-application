import React from "react";
import Navbar from "../Navigation/Navbar";

const Layout = ({ children }) => {
  return (
    <>
    {/* Layout of the website that contain Navigate bar and children props */}
      <Navbar />
      <div>
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
