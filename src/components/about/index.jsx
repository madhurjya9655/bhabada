import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";

import classes from "./about.module.css";
import about from "../../assets/images/about.png";

import Button from "../button";

import logo1 from "../../assets/icons/featured-1.svg";
import logo2 from "../../assets/icons/featured-2.svg";
import logo3 from "../../assets/icons/featured-3.svg";

const About = () => {
  return (
    <div className={classes["about-container"]} id="about">
      <div className={`${classes["about"]} container`}>
        <div className={classes["about-content"]}>
          <div className={classes["about-img-parent"]}>
            <img src={about} alt="Dr. Bhabananda Das" className={classes["about-img"]} />
          </div>

          <div className={classes["about-text-content"]}>
            <h2 className={classes["about-name"]}>About Dr. Bhabananda Das</h2>

            <p className={classes["about-desc"]}>
              A distinguished Cardio Thoraco Vascular Surgeon with over 37 years of experience. 
              Dr. Das served as consultant at AIIMS New Delhi (1984-1996) and currently works as 
              HOD cum Senior Consultant at Apollo Hospital, Indraprastha. He is renowned for 
              pioneering beating heart surgery techniques in India and has successfully performed 
              over 25,000 cardiac surgeries throughout his illustrious career.
            </p>

            <div className={classes["about-btn-wrapper"]}>
              <Button>
                <a href="https://healthcityhospital.com/contact-us" target="_blank" rel="noopener noreferrer">
                  Book Appointment <BsArrowRight />
                </a>
              </Button>
              <Button variant="secondary">
                Download Profile <FiDownload />
              </Button>
            </div>
          </div>
        </div>

        <div className={classes["featured-container"]}>
          <p className={classes["featured-heading"]}>Associated with:</p>

          <div className={classes["logo-wrapper"]}>
            <img src={logo1} className={classes["logo"]} alt="AIIMS" />
            <img src={logo2} className={classes["logo"]} alt="Apollo Hospital" />
            <img src={logo3} className={classes["logo"]} alt="Health City Hospital" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;