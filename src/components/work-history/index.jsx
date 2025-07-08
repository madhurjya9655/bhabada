import React from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import classes from "./work-history.module.css";
import WorkHistoryCard from "./work-history-card";

import work1 from "../../assets/images/work-1.png";
import work2 from "../../assets/images/work-2.png";
import work3 from "../../assets/images/work-3.png";

const WorkHistory = () => {
  return (
    <div className={`${classes["work-history"]} container`}>
      <div className={classes["work-his-heading-wrapper"]}>
        <h1 className={classes["history-heading"]}>Professional Journey</h1>
        <div className={classes["divider"]}></div>
        <p className={classes["history-desc"]}>
          Over 37 years of distinguished service across premier medical institutions, 
          pioneering cardiac surgery techniques and establishing world-class cardiac care centers.
        </p>
      </div>

      <div className={classes["work-history-card-wrapper"]}>
        <WorkHistoryCard
          isCurrent={true}
          img={work1}
          time="1994 - PRESENT"
          title="Indraprastha Apollo Hospital, New Delhi"
          desc="Chief Consultant of Cardio Thoracic and Vascular Surgery, leading advanced cardiac procedures and mentoring next generation surgeons."
        />
        <WorkHistoryCard
          img={work2}
          time="2017 - PRESENT"
          title="Health City Hospital, Guwahati"
          desc="Senior Consultant and Founder, establishing state-of-the-art cardiac surgery facilities in Northeast India."
        />
        <WorkHistoryCard
          img={work3}
          time="1984 - 1994"
          title="All India Institute of Medical Sciences (AIIMS)"
          desc="Visiting Consultant in Cardio Thoracic Surgery, contributing to research and complex cardiac procedures at India's premier medical institute."
        />
      </div>

      <div className={classes["work-history-arrow-wrapper"]}>
        <button>
          <GoArrowLeft />
        </button>
        <button>
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default WorkHistory;