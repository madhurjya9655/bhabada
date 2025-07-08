import React from "react";
import classes from "./qualification-awards.module.css";
import ExperienceCard from "./experience-card";
import AwardCard from "./award-card";

import award1 from "../../assets/images/award-1.svg";
import award2 from "../../assets/images/award-2.svg";
import award3 from "../../assets/images/award-3.svg";

const QualificationAwards = () => {
  return (
    <div
      className={`${classes["qualification-awards"]} container`}
      id="education"
    >
      <div className={classes["qualification-heading-wrapper"]}>
        <h1 className={classes["qualification-heading"]}>
          Qualifications & Achievements
        </h1>
        <div className={classes["divider-heading"]}></div>
        <p className={classes["qualification-desc"]}>
          A distinguished academic journey and recognition of excellence in cardiac surgery, 
          spanning over three decades of dedicated service to medical science and patient care.
        </p>
      </div>

      <div className={classes["qualification-content"]}>
        <div className={classes["education-wrapper"]}>
          <ExperienceCard
            universityName="Post Graduate Institute of Medical Education and Research, Chandigarh"
            duration="1975 - 1980"
            degree="Bachelor of Medicine & Bachelor of Surgery (MBBS)"
            desc="Foundation medical degree with comprehensive training in clinical medicine, surgery, and patient care fundamentals."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="Post Graduate Institute of Medical Education and Research, Chandigarh"
            duration="1980 - 1983"
            degree="Master of Surgery (MS) - General Surgery"
            desc="Advanced surgical training with specialization in general surgical procedures and operative techniques."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="All India Institute of Medical Sciences (AIIMS), New Delhi"
            duration="1983 - 1986"
            degree="Master of Chirurgiae (MCh) - Cardio-Thoracic and Vascular Surgery"
            desc="Specialized training in cardiac surgery, thoracic procedures, and vascular interventions at India's premier medical institute."
          />
          <div className={classes["divider"]}></div>
          <ExperienceCard
            universityName="World Health Organization & Commonwealth"
            duration="1993 - 1994"
            degree="WHO Fellowship & Commonwealth Fellowship"
            desc="International fellowships for advanced training in cardiac surgery techniques and research collaboration."
          />
        </div>

        <div className={classes["award-card-wrapper"]}>
          <div className={classes["award-card-column"]}>
            <AwardCard
              img={award1}
              count="01"
              title="Vishisht Chikitsa Ratna"
              desc="Prestigious award from Delhi Medical Association in 2012 recognizing outstanding contribution to medical science."
            />
            <AwardCard
              img={award3}
              count="03"
              title="Cardiac Surgery Pioneer"
              desc="Recognition as the pioneer of Beating Heart Surgery in India, revolutionizing cardiac surgical techniques."
            />
          </div>
          <AwardCard
            img={award2}
            count="02"
            title="Lifetime Achievement Award"
            desc="Honored by Morland News in 2017 for exceptional service and groundbreaking contributions to cardiac surgery."
          />
        </div>
      </div>
    </div>
  );
};

export default QualificationAwards;