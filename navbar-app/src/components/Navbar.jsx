import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav>
      <div className="class-header">
        <img src={logo} className="logo" alt="logo" />
        <button onClick={() => setShowLinks(!showLinks)}>
          <FaBars />
        </button>
      </div>
      {showLinks && (
        <div className="links-container">
          <ul className="links">
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
