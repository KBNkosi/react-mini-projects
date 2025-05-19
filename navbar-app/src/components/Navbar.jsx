import React, { useState, useRef } from "react";
import { FaBars} from "react-icons/fa";
import { links, social } from "./data";
import logo from "../assets/logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px `
      : "0px",
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="class-header">
          <img src={logo} className="logo" alt="logo" />
          <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>

        <div
          className={"links-container"}
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map(({ id, url, text }) => (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            ))}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map(({ id, url, text }) => (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
