import {
  FaHouse,
  FaUser,
  FaCode,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa6";

import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Sandeep<span>.</span>
        </a>


        {/* Navigation */}
        <div className="navbar-links">

          <a href="#home">
            <FaHouse />
            <span>Home</span>
          </a>

          <a href="#about">
            <FaUser />
            <span>About</span>
          </a>

          <a href="#skills">
            <FaCode />
            <span>Skills</span>
          </a>

          <a href="#projects">
            <FaFolderOpen />
            <span>Projects</span>
          </a>

          <a href="#contact">
            <FaEnvelope />
            <span>Contact</span>
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;