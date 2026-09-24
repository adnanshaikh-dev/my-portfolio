import React, { Fragment } from "react";

import classes from "./aboutMe.module.css";
import PersonalData from "../../Data/PersonalData";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

import parse from "html-react-parser";

const AboutMe = () => {
  const uiColor = useSelector((state) => state.uiColor);

  const handleResumeView = () => {
    window.open("/Portfolio/Adnan_Resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Fragment>
      <div className={classes.contactMe} id="getInTouch">
        <div className={classes.contactCard}>
          <h1 style={{ color: uiColor }}>About Me</h1>

          <div>{parse(PersonalData.aboutMe)}</div>

          <Button className={classes.resumeBtn} onClick={handleResumeView}>
            See My Resume
          </Button>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutMe;
