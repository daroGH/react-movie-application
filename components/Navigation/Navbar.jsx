import Link from "next/link";
import NavbarStyle from "../../styles/Home.module.css";
import React from "react";

const Navbar = () => {
  return (
    <nav className ={NavbarStyle.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/watchlist">WatchList</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
