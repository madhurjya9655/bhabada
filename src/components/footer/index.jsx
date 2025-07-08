import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaHeart
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { MdEmail, MdEmergency } from "react-icons/md";

import classes from "./footer.module.css";
import Logo from "../logo";

const Footer = () => {
  return (
    <footer className={classes["footer"]}>
      <div className={`${classes["footer-container"]} container`}>
        
        {/* Company Info Section */}
        <div className={classes["company-section"]}>
          <Logo variant="light" />
          <p className={classes["company-desc"]}>
            Leading cardiac surgeon with 30+ years of expertise in beating heart surgery, 
            congenital heart defects, and complex cardiac procedures. Committed to providing 
            world-class cardiac care with compassionate service.
          </p>
          
          <div className={classes["certifications"]}>
            <div className={classes["cert-item"]}>
              <FaHeart className={classes["cert-icon"]} />
              <span>25,000+ Successful Surgeries</span>
            </div>
            <div className={classes["cert-item"]}>
              <MdEmergency className={classes["cert-icon"]} />
              <span>Pioneer of Beating Heart Surgery</span>
            </div>
          </div>
        </div>

        {/* Hospital Locations */}
        <div className={classes["locations-section"]}>
          <h3 className={classes["heading"]}>
            <FaMapMarkerAlt className={classes["heading-icon"]} />
            Hospital Locations
          </h3>

          <div className={classes["location-item"]}>
            <h4>Apollo Hospital Indraprastha</h4>
            <p>Sarita Vihar, Delhi Mathura Road</p>
            <p>New Delhi - 110076</p>
            <div className={classes["location-meta"]}>
              <FaClock className={classes["meta-icon"]} />
              <span>Mon-Sat: 9 AM - 6 PM</span>
            </div>
          </div>
          
          <div className={classes["location-item"]}>
            <h4>Health City Hospital</h4>
            <p>Nalapara, Mirza, Guwahati</p>
            <p>Assam - 781125</p>
            <div className={classes["location-meta"]}>
              <FaClock className={classes["meta-icon"]} />
              <span>Mon-Sat: 10 AM - 5 PM</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className={classes["quick-links"]}>
          <h3 className={classes["heading"]}>Quick Links</h3>
          <ul>
            <li><a href="/about">About Dr. Das</a></li>
            <li><a href="/achievements">Achievements & Awards</a></li>
            <li><a href="/contact">Contact & Consultation</a></li>
            <li><a href="#success-stories">Patient Success Stories</a></li>
            <li><a href="#specialties">Medical Specialties</a></li>
            <li>
              <a 
                href="https://healthcityhospital.com/contact-us" 
                target="_blank" 
                rel="noopener noreferrer"
                className={classes["appointment-link"]}
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className={classes["contact-section"]}>
          <h3 className={classes["heading"]}>
            <FaPhone className={classes["heading-icon"]} />
            Contact Information
          </h3>
          
          <div className={classes["contact-item"]}>
            <h4>General Consultation</h4>
            <div className={classes["contact-detail"]}>
              <FaPhone className={classes["contact-icon"]} />
              <span>+91 86389 95504</span>
            </div>
            <div className={classes["contact-detail"]}>
              <FaWhatsapp className={classes["contact-icon"]} />
              <span>+91 86389 95504</span>
            </div>
            <div className={classes["contact-detail"]}>
              <MdEmail className={classes["contact-icon"]} />
              <span>consultation@drbdas.com</span>
            </div>
          </div>
          
          <div className={classes["contact-item"]}>
            <h4>Health City Hospital</h4>
            <div className={classes["contact-detail"]}>
              <FaPhone className={classes["contact-icon"]} />
              <span>+91-361-296-9999</span>
            </div>
          </div>
          
          <div className={classes["emergency"]}>
            <MdEmergency className={classes["emergency-icon"]} />
            <div>
              <p><strong>Emergency: +91 0361 352 1600</strong></p>
              <p>Available 24/7 for cardiac emergencies</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className={classes["social-section"]}>
          <h3 className={classes["heading"]}>Connect With Us</h3>
          
          <div className={classes["social-grid"]}>
            <a href="#" aria-label="Facebook" className={classes["social-link"]}>
              <FaFacebook />
              <span>Facebook</span>
            </a>
            <a href="#" aria-label="Twitter" className={classes["social-link"]}>
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="#" aria-label="LinkedIn" className={classes["social-link"]}>
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
            <a href="#" aria-label="Instagram" className={classes["social-link"]}>
              <FaInstagram />
              <span>Instagram</span>
            </a>
            <a 
              href="https://wa.me/918638995504" 
              aria-label="WhatsApp" 
              target="_blank" 
              rel="noopener noreferrer"
              className={classes["social-link"]}
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>
            <a href="#" aria-label="Medium" className={classes["social-link"]}>
              <FaMedium />
              <span>Medium</span>
            </a>
          </div>

          <div className={classes["newsletter"]}>
            <h4>Stay Updated</h4>
            <p>Get latest updates on cardiac health and medical advances</p>
            <div className={classes["newsletter-form"]}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className={classes["newsletter-input"]}
              />
              <button className={classes["newsletter-btn"]}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className={classes["footer-bottom"]}>
        <div className={`${classes["footer-bottom-container"]} container`}>
          <div className={classes["footer-left"]}>
            <p className={classes["footer-text"]}>
              © 2025 Dr. Bhabananda Das - Cardio Thoracic & Vascular Surgeon. All rights reserved.
            </p>
            <div className={classes["footer-links"]}>
              <a href="/privacy">Privacy Policy</a>
              <span>•</span>
              <a href="/terms">Terms of Service</a>
              <span>•</span>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
          
          <div className={classes["developer-credit"]}>
            <p>
              Crafted with <FaHeart className={classes["heart-icon"]} /> by{" "}
              <a 
                href="https://aiaxom.in/" 
                target="_blank" 
                rel="noopener noreferrer"
                className={classes["developer-link"]}
              >
                AIAxom
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;