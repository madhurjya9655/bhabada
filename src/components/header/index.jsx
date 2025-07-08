import React from "react";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import Button from "../button";

import headerImg from "../../assets/images/bhaba das pic.jpg";

const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <header className={`${classes["header"]} container`}>
        <div className={classes["header-content"]}>
          <div className={classes["header-intro"]}>
            <div className={classes["credentials-badge"]}>
              <span className={classes["medical-icon"]}>⚕️</span>
              <span>Cardio Thoracic & Vascular Surgeon</span>
            </div>
            
            <h4 className={classes["header-name"]}>Dr. Bhabananda Das</h4>
            <p className={classes["header-subtitle"]}>
              Chairman cum Managing Director | MS, MCh (CTVS) AIIMS
            </p>

            <h1 className={classes["header-title"]}>
              30+ Years of Excellence in
              <span className={classes["highlight"]}> Cardiac Surgery</span>
            </h1>
          </div>

          <div className={classes["header-description"]}>
            <p className={classes["header-desc"]}>
              Pioneer of Beating Heart Surgery in India with <strong>25,000+</strong> successful surgeries. 
              <strong>Vishisht Chikitsa Ratna</strong> awardee and founder of Health City Hospital, Guwahati.
            </p>
            
            <div className={classes["key-achievements"]}>
              <div className={classes["achievement-item"]}>
                <span className={classes["achievement-number"]}>25,000+</span>
                <span className={classes["achievement-label"]}>Successful Surgeries</span>
              </div>
              <div className={classes["achievement-item"]}>
                <span className={classes["achievement-number"]}>30+</span>
                <span className={classes["achievement-label"]}>Years Experience</span>
              </div>
              <div className={classes["achievement-item"]}>
                <span className={classes["achievement-number"]}>98%</span>
                <span className={classes["achievement-label"]}>Success Rate</span>
              </div>
            </div>
          </div>

          <div className={classes["header-actions"]}>
            <div className={classes["primary-actions"]}>
              <Link to="/about" className={classes["button-link"]}>
                <Button className={classes["primary-btn"]}>
                  Learn About Dr. Das
                </Button>
              </Link>
              
              <Link to="/achievements" className={classes["button-link"]}>
                <Button variant="secondary" className={classes["secondary-btn"]}>
                  View Achievements
                </Button>
              </Link>
            </div>
            
            <div className={classes["contact-actions"]}>
              <a href="tel:+918638995504" className={classes["quick-contact"]}>
                <span className={classes["contact-icon"]}>📞</span>
                <div className={classes["contact-text"]}>
                  <span className={classes["contact-label"]}>Call for Consultation</span>
                  <span className={classes["contact-number"]}>+91 86389 95504</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className={classes["header-img-section"]}>
          <div className={classes["header-img-parent"]}>
            <img
              src={headerImg}
              className={classes["header-img"]}
              alt="Dr. Bhabananda Das - Cardio Thoracic & Vascular Surgeon"
            />
            <div className={classes["img-overlay"]}>
              <div className={classes["overlay-content"]}>
                <span className={classes["overlay-text"]}>India's Pioneer in Beating Heart Surgery</span>
              </div>
            </div>
          </div>
          
          <div className={classes["credentials-list"]}>
            <div className={classes["credential-item"]}>
              <span className={classes["credential-icon"]}>🎓</span>
              <span>MBBS, MS, MCh (CTVS) AIIMS</span>
            </div>
            <div className={classes["credential-item"]}>
              <span className={classes["credential-icon"]}>🏥</span>
              <span>Apollo Hospital & Health City</span>
            </div>
            <div className={classes["credential-item"]}>
              <span className={classes["credential-icon"]}>🏆</span>
              <span>Vishisht Chikitsa Ratna Awardee</span>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;