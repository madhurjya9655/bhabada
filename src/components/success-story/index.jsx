import React, { useState, useEffect } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { BiSolidQuoteAltRight } from "react-icons/bi";

import classes from "./success-story.module.css";

// Success Stories Data
const successStories = [
  {
    id: 1,
    quote: "Dr. Bhabananda Das performed my father's triple bypass surgery when other doctors said it was too risky. Today, five years later, my father is living a healthy, active life. Dr. Das didn't just save a heart - he saved our entire family's happiness. His expertise in beating heart surgery made the impossible possible.",
    patientName: "Priya Sharma",
    location: "New Delhi",
    procedure: "Triple Bypass Surgery"
  },
  {
    id: 2,
    quote: "After years of living with a congenital heart defect, Dr. Das gave me a new lease on life. His precision and care during my complex cardiac surgery was extraordinary. I can now play with my children without fear, something I never thought possible.",
    patientName: "Rajesh Kumar",
    location: "Mumbai",
    procedure: "Congenital Heart Repair"
  },
  {
    id: 3,
    quote: "Dr. Das's innovative beating heart technique meant I recovered faster than anyone expected. The surgery that once seemed impossible became routine under his expert hands. My family and I are forever grateful for his dedication to advancing cardiac surgery.",
    patientName: "Meera Patel",
    location: "Gujarat",
    procedure: "Beating Heart Surgery"
  },
  {
    id: 4,
    quote: "When I was told I needed emergency heart surgery, Dr. Das was the only surgeon willing to take on such a complex case. His skill and confidence reassured our entire family. Today, I'm living proof of his exceptional surgical abilities.",
    patientName: "Amit Singh",
    location: "Punjab",
    procedure: "Emergency Cardiac Surgery"
  },
  {
    id: 5,
    quote: "Dr. Das performed my valve replacement with such precision that my recovery was remarkably smooth. His compassionate approach and surgical excellence transformed not just my heart, but my entire outlook on life.",
    patientName: "Sunita Reddy",
    location: "Hyderabad",
    procedure: "Valve Replacement"
  }
];

const SuccessStory = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStory(prev => (prev + 1) % successStories.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Handle manual navigation
  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setActiveStory(prev => prev === 0 ? successStories.length - 1 : prev - 1);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveStory(prev => (prev + 1) % successStories.length);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Handle dot navigation
  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setActiveStory(index);
    
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentStory = successStories[activeStory];

  return (
    <div className={`${classes["success-story"]} container`}>
      <div className={classes["story-content"]}>
        <div className="content-wrapper">
          <h2 className={classes["story-content-heading"]}>
            25,000+ Patient Success Stories
          </h2>
          <div className={classes["divider"]}></div>
          <p className={classes["story-content-desc"]}>
            Over three decades of transforming lives through pioneering cardiac surgery. 
            Each successful procedure represents hope restored and families reunited.
          </p>
        </div>

        <div className={classes["actions-button"]}>
          <div className={classes["button-wrapper"]}>
            <button 
              onClick={handlePrevious}
              className={classes["nav-button"]}
              aria-label="Previous story"
            >
              <GoArrowLeft />
            </button>
            <button 
              onClick={handleNext}
              className={classes["nav-button"]}
              aria-label="Next story"
            >
              <GoArrowRight />
            </button>
          </div>

          <div className={classes["dots-wrapper"]}>
            {successStories.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`${classes["dot"]} ${
                  activeStory === index ? classes["dot-active"] : ""
                }`}
                aria-label={`Go to story ${index + 1}`}
              ></div>
            ))}
          </div>
        </div>

        {/* Auto-play indicator */}
        <div className={classes["auto-play-indicator"]}>
          <div className={classes["progress-bar"]}>
            <div 
              className={classes["progress-fill"]}
              style={{
                animationDuration: isAutoPlaying ? '5s' : '0s',
                animationPlayState: isAutoPlaying ? 'running' : 'paused'
              }}
            ></div>
          </div>
          <span className={classes["auto-play-text"]}>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'} • Story {activeStory + 1} of {successStories.length}
          </span>
        </div>
      </div>

      <div className={classes["story-quote"]}>
        <BiSolidQuoteAltRight className={classes["quote"]} />

        <div className={classes["quote-content"]}>
          <p className={classes["quote-text"]}>
            "{currentStory.quote}"
          </p>
          
          <div className={classes["patient-info"]}>
            <div className={classes["patient-details"]}>
              <p className={classes["patient-name"]}>- {currentStory.patientName}</p>
              <p className={classes["patient-location"]}>{currentStory.location}</p>
            </div>
            <div className={classes["procedure-tag"]}>
              {currentStory.procedure}
            </div>
          </div>
        </div>

        {/* Story counter */}
        <div className={classes["story-counter"]}>
          <span>{String(activeStory + 1).padStart(2, '0')}</span>
          <span>/</span>
          <span>{String(successStories.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;