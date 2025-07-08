import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navigation-links.module.css";
import Button from "../button";

const NavigationLinks = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const location = useLocation();

  // Update active link based on current route
  useEffect(() => {
    const path = location.pathname;
    switch (path) {
      case "/":
        setActiveLink("Home");
        break;
      case "/about":
        setActiveLink("About");
        break;
      case "/achievements":
        setActiveLink("Achievements");
        break;
      case "/contact":
        setActiveLink("Contact");
        break;
      default:
        setActiveLink("Home");
    }
  }, [location.pathname]);

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={classes["nav-links-container"]}>
      <ul className={classes["nav-links-parent"]}>
        <li className={classes["nav-link-item"]}>
          <Link
            to="/"
            onClick={() => handleActiveLink("Home")}
            className={`${classes["nav-link"]} ${
              activeLink === "Home" ? classes["active-link"] : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li className={classes["nav-link-item"]}>
          <Link
            to="/about"
            onClick={() => handleActiveLink("About")}
            className={`${classes["nav-link"]} ${
              activeLink === "About" ? classes["active-link"] : ""
            }`}
          >
            About
          </Link>
        </li>
        <li className={classes["nav-link-item"]}>
          <Link
            to="/achievements"
            onClick={() => handleActiveLink("Achievements")}
            className={`${classes["nav-link"]} ${
              activeLink === "Achievements" ? classes["active-link"] : ""
            }`}
          >
            Achievements
          </Link>
        </li>
        <li className={classes["nav-link-item"]}>
          <Link
            to="/contact"
            onClick={() => handleActiveLink("Contact")}
            className={`${classes["nav-link"]} ${
              activeLink === "Contact" ? classes["active-link"] : ""
            }`}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className={classes["divider"]}></div>

      <Button className={classes["contact-btn"]}>
        <a href="https://healthcityhospital.com/contact-us" target="_blank" rel="noopener noreferrer">
          Book Appointment
        </a>
      </Button>
    </div>
  );
};

export default NavigationLinks;