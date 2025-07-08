// src/pages/AboutPage.jsx
import React from "react";
import NavigationBar from "../components/navigation-bar";
import Footer from "../components/footer";
import classes from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div>
      <NavigationBar />
      
      <main className={classes["about-page"]}>
        {/* Hero Section */}
        <section className={classes["hero"]}>
          <div className={classes["hero-bg"]}>
            <img 
              src="/src/assets/images/bhaba das pic.jpg" 
              alt="Dr. Bhabananda Das" 
              className={classes["hero-image"]}
            />
            <div className={classes["hero-overlay"]}></div>
          </div>
          <div className={`${classes["hero-content"]} container`}>
            <h1>About Dr. Bhabananda Das</h1>
            <p>India's pioneering cardiac surgeon with 30+ years of excellence</p>
          </div>
        </section>

        {/* Biography Section */}
        <section className={classes["biography"]}>
          <div className={`${classes["bio-container"]} container`}>
            <div className={classes["bio-layout"]}>
              <div className={classes["doctor-photo"]}>
                <img 
                  src="/src/assets/images/bhaba das pic.jpg" 
                  alt="Dr. Bhabananda Das"
                  className={classes["doctor-image"]}
                />
                <div className={classes["credentials"]}>
                  <h3>Dr. Bhabananda Das</h3>
                  <p>MBBS, MS, MCh (CTVS)</p>
                  <span className={classes["experience"]}>30+ Years Experience</span>
                </div>
              </div>

              <div className={classes["bio-content"]}>
                <h2>Professional Biography</h2>
                <div className={classes["bio-text"]}>
                  <p>
                    Dr. Bhabananda Das stands as one of India's most distinguished Cardio Thoracic and Vascular Surgeons, 
                    with an illustrious career spanning over 30+ years. His journey in cardiac surgery began at the 
                    prestigious All India Institute of Medical Sciences (AIIMS), where he completed his MCh in 
                    Cardio-Thoracic and Vascular Surgery.
                  </p>
                  
                  <p>
                    As the Chief Consultant of Cardio Thoracic and Vascular Surgery at Indraprastha Apollo Hospital, 
                    New Delhi, Dr. Das has performed over 25,000 successful cardiac surgeries. His expertise spans 
                    complex procedures including beating heart surgery, for which he is recognized as a pioneer in India.
                  </p>

                  <p>
                    Dr. Das's international training includes fellowships from the World Health Organization (1993) 
                    and Commonwealth Fellowship (1994). He has worked extensively in the United States at renowned 
                    institutions including Lancaster General Hospital, Boston Children's Hospital, Mayo Clinic, 
                    and Texas Heart Institute.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hospitals Section */}
        <section className={classes["hospitals"]}>
          <div className={`${classes["hospitals-container"]} container`}>
            <h2>Our Medical Facilities</h2>
            <div className={classes["hospitals-grid"]}>
              <div className={classes["hospital-card"]}>
                <img 
                  src="/src/assets/images/apollo delhi.avif" 
                  alt="Apollo Hospital Indraprastha - Delhi"
                  className={classes["hospital-image"]}
                />
                <div className={classes["hospital-info"]}>
                  <h3>Apollo Hospital Indraprastha</h3>
                  <p>New Delhi</p>
                </div>
              </div>
              
              <div className={classes["hospital-card"]}>
                <img 
                  src="/src/assets/images/healthcity.webp" 
                  alt="Health City Hospital - Guwahati"
                  className={classes["hospital-image"]}
                />
                <div className={classes["hospital-info"]}>
                  <h3>Health City Hospital</h3>
                  <p>Guwahati, Assam</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas of Expertise */}
        <section className={classes["expertise"]}>
          <div className={`${classes["expertise-container"]} container`}>
            <h2>Areas of Expertise</h2>
            
            {/* Surgery Stats */}
            <div className={classes["surgery-stats"]}>
              <div className={classes["stat"]}>
                <span className={classes["stat-number"]}>25,000+</span>
                <span className={classes["stat-label"]}>Surgeries Performed</span>
              </div>
              <div className={classes["stat"]}>
                <span className={classes["stat-number"]}>98%</span>
                <span className={classes["stat-label"]}>Success Rate</span>
              </div>
              <div className={classes["stat"]}>
                <span className={classes["stat-number"]}>30+</span>
                <span className={classes["stat-label"]}>Years Experience</span>
              </div>
            </div>

            <div className={classes["expertise-grid"]}>
              <div className={classes["expertise-card"]}>
                <div className={classes["card-icon"]}>🫀</div>
                <h3>Cardiac Surgery</h3>
                <ul>
                  <li>Coronary Artery Disease</li>
                  <li>Aortic Valve Disease</li>
                  <li>Atrial Fibrillation</li>
                  <li>Myocarditis</li>
                </ul>
              </div>
              
              <div className={classes["expertise-card"]}>
                <div className={classes["card-icon"]}>👶</div>
                <h3>Congenital Heart Defects</h3>
                <ul>
                  <li>Tetralogy of Fallot</li>
                  <li>Tricuspid Atresia</li>
                  <li>Truncus Arteriosus</li>
                  <li>Kawasaki Disease</li>
                </ul>
              </div>
              
              <div className={classes["expertise-card"]}>
                <div className={classes["card-icon"]}>⚕️</div>
                <h3>Advanced Procedures</h3>
                <ul>
                  <li>Beating Heart Surgery</li>
                  <li>Minimally Invasive Cardiac Surgery</li>
                  <li>Vascular Surgery</li>
                  <li>Thoracic Surgery</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className={classes["awards"]}>
          <div className={`${classes["awards-container"]} container`}>
            <h2>Awards & Recognition</h2>
            <div className={classes["awards-grid"]}>
              <div className={classes["award-item"]}>
                <div className={classes["award-icon"]}>🏆</div>
                <div className={classes["award-info"]}>
                  <h3>Vishisht Chikitsa Ratna</h3>
                  <p>Delhi Medical Association - 2012</p>
                  <span>Prestigious award recognizing outstanding contribution to medical science</span>
                </div>
              </div>
              
              <div className={classes["award-item"]}>
                <div className={classes["award-icon"]}>🥇</div>
                <div className={classes["award-info"]}>
                  <h3>Lifetime Achievement Award</h3>
                  <p>Morland News - 2017</p>
                  <span>Honored for exceptional service and groundbreaking contributions to cardiac surgery</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;