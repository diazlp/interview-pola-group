import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="topnav">
      <Link to={"/"} className="active">
        Home
      </Link>
      <a>News</a>
      <a>Contact</a>
      <a>About</a>
    </div>
  );
}

export default NavBar;
