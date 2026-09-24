import React, { Fragment } from "react";
import EducationImg from "../asset/kindpng_2158189.png";
import EducationData from "../../Data/EducationData";
import Degree from "./Degree";
import classes from "./education.module.css";
import { useSelector } from "react-redux";

function Education(props) {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    const languagesDone = EducationData.codingStatus;

    return (
        <Fragment>
            <div className={classes.educationHeader} id="education">
                <div className={classes.eduImg}>
                    <img src={EducationImg} alt="Education Infrastructure" />
                </div>
                <div className={classes.educationCard}>
                    <h1 style={{ color: uiColor }}>Education</h1>
                    <h2 style={{ color: nonThemeColor }}>Coding Statistics & Core Competencies</h2>
                    
                    <div className={classes.codingInfo}>
                        {languagesDone.map((item, index) => (
                            <div key={index} className={classes.progressBar}>
                                <label htmlFor={item.name}>{item.name}</label>
                                <div className={classes.trackWrapper}>
                                    <progress id={item.name} value={item.percentDone} max="100"></progress>
                                    {/* 🚀 Restored & Structured Badge: Fills the row spacing effectively */}
                                    <span className={classes.percentBadge} style={{ backgroundColor: uiColor }}>
                                        {item.percentDone}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Degree />
        </Fragment>
    );
}
export default Education;
