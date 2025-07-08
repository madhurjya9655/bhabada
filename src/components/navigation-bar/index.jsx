// src/components/navigation-bar/index.jsx - COMPLETE NAVIGATION BAR
import React from "react";
import classes from "./navigation-bar.module.css";
import Logo from "../logo";
import NavigationLinks from "../navigation-links";

const NavigationBar = () => {
  return (
    <div className={classes["navigation-container"]}>
      <nav className={`${classes["navigation-bar"]} container`}>
        {/* Logo */}
        <Logo variant="dark" />
        
        {/* Navigation Links */}
        <NavigationLinks />
      </nav>
    </div>
  );
};

export default NavigationBar;