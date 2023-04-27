import React from "react";
import navMenu from "../utils/navMenu.js";
import { useSelector, useDispatch } from "react-redux";
import { setHeading } from "../store/navbarSlice.js";

function Navbar() {
  const heading = useSelector((state) => state.navbar.heading);
  const dispatch = useDispatch();

  return (
    <>
      {navMenu.map((item, index) => (
        <>
          <div
            className="menu-item"
            key={index}
            onClick={() =>
              heading !== item.title
                ? dispatch(setHeading(item.title))
                : dispatch(setHeading(""))
            }
          >
            <span>{item.title}</span>
            <i className={item.menuItem.length > 0 ? "down" : "hide"}></i>
            <span
              className={`arrow ${
                heading === item.title ? "arrow-reverse" : ""
              }`}
            ></span>
            <ul className={item.menuItem.length > 0 ? "dropdown" : "hide"}>
              {item.menuItem.map((item, index) => (
                <li key={index} className="dropdown-item">
                  <a href="/" className="dropdown-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={heading === item.title ? "is-block" : "hide"}>
            {item.menuItem.map((item) => (
              <a href="/" className="block-link">
                {item}
              </a>
            ))}
          </div>
        </>
      ))}
    </>
  );
}

export default Navbar;
