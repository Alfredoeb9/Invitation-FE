import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div>
          <Link to={"/welcome"}>
            <span>A1. </span> Invitation
          </Link>
          <Link to={"/"}>Home</Link>
        </div>
      </nav>
    </header>
  );
}
