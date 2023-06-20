import React from "react";
import "../styles/barchart.css";

export const Navbar = () => {
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <p className='btn btn-ghost normal-case text-xl logo'>Des/vía</p>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <a
                className='nav_text'
                onClick={() => handleNavLinkClick("information")}
              >
                Information
              </a>
            </li>
            <li>
              <a
                className='nav_text'
                onClick={() => handleNavLinkClick("discover")}
              >
                Discover
              </a>
            </li>
            <li>
              <a
                className='nav_text'
                onClick={() => handleNavLinkClick("mobility")}
              >
                Mobility
              </a>
            </li>
            <li>
              <a
                className='nav_text'
                onClick={() => handleNavLinkClick("about")}
              >
                About us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
