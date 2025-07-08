import React from "react";
import { GoArrowRight } from "react-icons/go";
import { FaPhoneAlt, FaCalendarCheck, FaUserMd, FaHeart, FaAward, FaClock } from "react-icons/fa";
import { MdVerified, MdEmergency } from "react-icons/md";

import classes from "./call-to-action.module.css";
import Button from "../button";

const CallToAction = () => {
  return (
    <div className={classes["call-to-action"]}>
      <div className={`${classes["call-to-action-container"]} container`}>
        
        {/* Main Content */}
        <div className={classes["main-content"]}>
          <div className={classes["badge"]}>
            <MdVerified className={classes["badge-icon"]} />
            <span>India's Leading Cardiac Surgeon</span>
          </div>
          
          <h1 className={classes["title"]}>
            Need Expert Cardiac Surgery? 
            <span className={classes["highlight"]}> Schedule Your Consultation Today!</span>
          </h1>

          <p className={classes["description"]}>
            With over 30+ years of experience and 25,000+ successful surgeries, Dr. Bhabananda Das 
            provides world-class cardiac care. From complex heart procedures to congenital defects, 
            trust India's pioneer in beating heart surgery for your cardiac health needs.
          </p>

          {/* Statistics */}
          <div className={classes["stats"]}>
            <div className={classes["stat-item"]}>
              <FaHeart className={classes["stat-icon"]} />
              <div>
                <span className={classes["stat-number"]}>25,000+</span>
                <span className={classes["stat-label"]}>Successful Surgeries</span>
              </div>
            </div>
            <div className={classes["stat-item"]}>
              <FaAward className={classes["stat-icon"]} />
              <div>
                <span className={classes["stat-number"]}>30+</span>
                <span className={classes["stat-label"]}>Years Experience</span>
              </div>
            </div>
            <div className={classes["stat-item"]}>
              <MdVerified className={classes["stat-icon"]} />
              <div>
                <span className={classes["stat-number"]}>98%</span>
                <span className={classes["stat-label"]}>Success Rate</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={classes["action-buttons"]}>
            <Button className={classes["primary-btn"]}>
              <a href="https://healthcityhospital.com/contact-us" target="_blank" rel="noopener noreferrer">
                <FaCalendarCheck className={classes["btn-icon"]} />
                Book Consultation 
                <GoArrowRight className={classes["arrow-icon"]} />
              </a>
            </Button>
            
            <a href="tel:+918638995504" className={classes["phone-btn"]}>
              <FaPhoneAlt className={classes["phone-icon"]} />
              <div className={classes["phone-content"]}>
                <span className={classes["phone-label"]}>Call Now</span>
                <span className={classes["phone-number"]}>+91 86389 95504</span>
              </div>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className={classes["trust-indicators"]}>
            <div className={classes["trust-item"]}>
              <FaClock className={classes["trust-icon"]} />
              <span>Quick Response</span>
            </div>
            <div className={classes["trust-item"]}>
              <MdEmergency className={classes["trust-icon"]} />
              <span>24/7 Emergency Care</span>
            </div>
            <div className={classes["trust-item"]}>
              <FaUserMd className={classes["trust-icon"]} />
              <span>Expert Consultation</span>
            </div>
          </div>
        </div>

        {/* Side Card */}
        <div className={classes["side-card"]}>
          <div className={classes["card-header"]}>
            <FaUserMd className={classes["card-icon"]} />
            <div>
              <h3>Dr. Bhabananda Das</h3>
              <p>MBBS, MS, MCh (CTVS)</p>
            </div>
          </div>

          <div className={classes["specialties"]}>
            <h4>Specialties</h4>
            <ul>
              <li>Beating Heart Surgery</li>
              <li>Congenital Heart Defects</li>
              <li>Valve Surgery</li>
              <li>Complex Cardiac Procedures</li>
            </ul>
          </div>

          <div className={classes["locations"]}>
            <h4>Available At</h4>
            <div className={classes["location-item"]}>
              <strong>Apollo Hospital</strong>
              <span>Delhi</span>
            </div>
            <div className={classes["location-item"]}>
              <strong>Health City Hospital</strong>
              <span>Guwahati, Assam</span>
            </div>
          </div>

          <div className={classes["emergency-contact"]}>
            <MdEmergency className={classes["emergency-icon"]} />
            <div>
              <strong>Emergency:</strong>
              <span>+91 0361 352 1600</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;