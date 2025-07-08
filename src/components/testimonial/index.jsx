import React, { useEffect, useState } from "react";
import classes from "./testimonial.module.css";
import testimonial from "../../assets/images/testimonial.png";

// Medical colleagues testimonials for Dr. Bhabananda Das
const medicalTestimonials = [
  {
    quote: "Dr. Bhabananda Das is a pioneer in beating heart surgery. His expertise and precision in complex cardiac procedures are unparalleled. Working alongside him has been an honor and a continuous learning experience.",
    name: "Dr. Rajesh Kumar",
    passion: "Senior Cardiologist, AIIMS New Delhi"
  },
  {
    quote: "Few surgeons possess the combination of technical brilliance and compassionate care that Dr. Das demonstrates. His contribution to cardiac surgery in India is immeasurable.",
    name: "Dr. Priya Sharma",
    passion: "Chief of Cardiac Anesthesia, Apollo Hospital"
  },
  {
    quote: "Dr. Das's innovative approaches to congenital heart defects have saved countless lives. His mentorship has shaped an entire generation of cardiac surgeons.",
    name: "Dr. Amit Patel",
    passion: "Pediatric Cardiac Surgeon, Health City Hospital"
  },
  {
    quote: "The precision and success rate of Dr. Bhabananda Das in complex CTVS procedures is remarkable. He is truly one of India's finest cardiac surgeons.",
    name: "Dr. Meera Gupta",
    passion: "Director of Cardiology, Delhi Medical Institute"
  },
  {
    quote: "Having collaborated with Dr. Das on numerous cases, I can attest to his exceptional surgical skills and his dedication to advancing cardiac surgery techniques.",
    name: "Dr. Suresh Reddy",
    passion: "Interventional Cardiologist, Apollo Hospital"
  }
];

const Testimonial = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [activeQuote, setActiveQuote] = useState({});

  useEffect(() => {
    setActiveQuote(medicalTestimonials[activeDot]);
  }, [activeDot]);

  // Auto-play testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % medicalTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (i) => {
    setActiveDot(i);
  };

  return (
    <div className={classes["testimonial"]}>
      <div className={`${classes["testimonial-container"]} container`}>
        <div className={classes["testimonial-quote"]}>
          <p className={classes["quote-subtitle"]}>
            What my medical colleagues say about me.
          </p>
          
          {/* Quote Icon */}
          <div className={classes["quote-icon"]}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
            </svg>
          </div>

          <h2 className={classes["quote-text"]}>"{activeQuote.quote}"</h2>

          <div className={classes["quote-author-dots"]}>
            <div className={classes["quote-author"]}>
              <p className={classes["author-name"]}>{activeQuote.name}</p>
              <p className={classes["author-passion"]}>{activeQuote.passion}</p>
            </div>

            <div className={classes["quote-dots"]}>
              {medicalTestimonials.map((_, i) => (
                <div
                  onClick={() => handleDotClick(i)}
                  key={i}
                  className={`${classes["dot"]} ${
                    activeDot === i ? classes["dot-active"] : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className={classes["testimonial-img-parent"]}>
          <img src={testimonial} alt="Dr. Bhabananda Das with medical colleagues" className={classes["testimonial-img"]} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;