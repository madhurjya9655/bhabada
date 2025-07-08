// src/pages/AchievementsPage.jsx
import React from "react";
import NavigationBar from "../components/navigation-bar";
import Footer from "../components/footer";
import classes from "./AchievementsPage.module.css";

const AchievementsPage = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <NavigationBar />
      
      {/* Page Content */}
      <main className={classes["achievements-page"]}>
        {/* Hero Section with Background */}
        <section className={classes["achievements-hero"]}>
          <div className={classes["hero-bg"]}>
            <img 
              src="/images/achievements-hero-bg.jpg" 
              alt="Dr. Bhabananda Das Awards and Recognition"
              className={classes["hero-bg-image"]}
            />
            <div className={classes["hero-overlay"]}></div>
          </div>
          <div className={`${classes["hero-content"]} container`}>
            <h1>Achievements & Recognition</h1>
            <p>Celebrating a lifetime of excellence in cardiac surgery and medical innovation</p>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section className={classes["key-achievements"]}>
          <div className={`${classes["achievements-content"]} container`}>
            <h2>Major Milestones</h2>
            
            <div className={classes["milestones-grid"]}>
              <div className={classes["milestone-card"]}>
                <div className={classes["milestone-icon"]}>🫀</div>
                <div className={classes["milestone-number"]}>25,000+</div>
                <h3>Successful Surgeries</h3>
                <p>Over three decades of life-saving cardiac procedures</p>
              </div>
              
              <div className={classes["milestone-card"]}>
                <div className={classes["milestone-icon"]}>⏱️</div>
                <div className={classes["milestone-number"]}>30+</div>
                <h3>Years of Experience</h3>
                <p>Distinguished career in cardio-thoracic surgery</p>
              </div>
              
              <div className={classes["milestone-card"]}>
                <div className={classes["milestone-icon"]}>🚀</div>
                <div className={classes["milestone-number"]}>1st</div>
                <h3>Pioneer in India</h3>
                <p>First to introduce beating heart surgery techniques</p>
              </div>
              
              <div className={classes["milestone-card"]}>
                <div className={classes["milestone-icon"]}>🏥</div>
                <div className={classes["milestone-number"]}>3</div>
                <h3>Hospital Foundations</h3>
                <p>Established cardiac centers across India and Bangladesh</p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey with Image */}
        <section className={classes["journey-section"]}>
          <div className={`${classes["journey-content"]} container`}>
            <div className={classes["journey-layout"]}>
              <div className={classes["journey-image-container"]}>
                <img 
                  src="/src/assets/images/1 (6).jpg" 
                  alt="Dr. Bhabananda Das Professional Journey"
                  className={classes["journey-image"]}
                />
                <div className={classes["image-overlay"]}>
                  <div className={classes["overlay-stats"]}>
                    <div className={classes["overlay-stat"]}>
                      <span className={classes["stat-number"]}>98%</span>
                      <span className={classes["stat-label"]}>Success Rate</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={classes["journey-text"]}>
                <h2>Professional Journey</h2>
                <div className={classes["journey-highlights"]}>
                  <div className={classes["highlight-item"]}>
                    <div className={classes["highlight-icon"]}>🎓</div>
                    <div>
                      <h3>Education Excellence</h3>
                      <p>MBBS, MS, MCh from prestigious institutions including AIIMS</p>
                    </div>
                  </div>
                  
                  <div className={classes["highlight-item"]}>
                    <div className={classes["highlight-icon"]}>🌍</div>
                    <div>
                      <h3>International Training</h3>
                      <p>WHO Fellowship, Commonwealth Fellowship, and training in USA</p>
                    </div>
                  </div>
                  
                  <div className={classes["highlight-item"]}>
                    <div className={classes["highlight-icon"]}>💡</div>
                    <div>
                      <h3>Medical Innovation</h3>
                      <p>Pioneer of beating heart surgery in India, revolutionizing cardiac care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Contributions */}
        <section className={classes["contributions-section"]}>
          <div className={`${classes["contributions"]} container`}>
            <h2>Professional Contributions</h2>
            
            <div className={classes["contributions-grid"]}>
              <div className={classes["contribution-item"]}>
                <div className={classes["contribution-header"]}>
                  <div className={classes["contribution-icon"]}>🏥</div>
                  <h3>Hospital Establishments</h3>
                </div>
                <ul>
                  <li>Founded Health City Hospital, Guwahati (2017)</li>
                  <li>Established cardiac surgery center at Satya Sai Institute, Andhra Pradesh</li>
                  <li>Started cardiac center at Hayat Hospital, Guwahati</li>
                  <li>Founded beating heart surgery division at Zainul Haque Sikder Women's Medical College, Bangladesh</li>
                </ul>
              </div>
              
              <div className={classes["contribution-item"]}>
                <div className={classes["contribution-header"]}>
                  <div className={classes["contribution-icon"]}>🌍</div>
                  <h3>International Training</h3>
                </div>
                <ul>
                  <li>Lancaster General Hospital, USA</li>
                  <li>Boston Children's Hospital, USA</li>
                  <li>Mayo Clinic, USA</li>
                  <li>Texas Heart Institute, USA</li>
                </ul>
              </div>
              
              <div className={classes["contribution-item"]}>
                <div className={classes["contribution-header"]}>
                  <div className={classes["contribution-icon"]}>👥</div>
                  <h3>Professional Memberships</h3>
                </div>
                <ul>
                  <li>Cardiological Society of India</li>
                  <li>Cardio Vascular Society of India</li>
                  <li>Pediatric Cardiac Society of India</li>
                  <li>Indian Medical Association</li>
                  <li>Delhi Medical Association</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className={classes["awards-section"]}>
          <div className={`${classes["awards-content"]} container`}>
            <h2>Awards & Recognition</h2>
            
            <div className={classes["awards-grid"]}>
              <div className={classes["award-item"]}>
                <div className={classes["award-icon"]}>🏆</div>
                <h3>Vishisht Chikitsa Ratna (2012)</h3>
                <p>Prestigious award from Delhi Medical Association recognizing outstanding contribution to medical science</p>
                <div className={classes["award-year"]}>2012</div>
              </div>
              
              <div className={classes["award-item"]}>
                <div className={classes["award-icon"]}>🥇</div>
                <h3>Lifetime Achievement Award (2017)</h3>
                <p>Honored by Morland News for exceptional service and groundbreaking contributions to cardiac surgery</p>
                <div className={classes["award-year"]}>2017</div>
              </div>
              
              <div className={classes["award-item"]}>
                <div className={classes["award-icon"]}>⭐</div>
                <h3>Cardiac Surgery Pioneer</h3>
                <p>Recognition as the pioneer of Beating Heart Surgery in India, revolutionizing cardiac surgical techniques</p>
                <div className={classes["award-year"]}>Ongoing</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AchievementsPage;