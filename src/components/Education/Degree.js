import React from "react";
import classes from "./degree.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

// 🚀 IMPORTS: Apne dono logos ko top par import karein
import hnguLogo from "../../Data/hnguLogo.png"; 
import schoolLogo from "../../Data/schoolLogo.png"; // 👈 School logo ka correct path yahan set karein (jaise schoolLogo.png ya hscLogo.png)

function Degree(props) {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    // 🚀 UPDATED: Har object ke andar unka specific image variable 'logo' key me set kiya hai
    const degreesData = [
        {
            duration: "2023 - 2025",
            institute: "Department of Computer Science, Hemchandracharya North Gujarat University (HNGU), Patan",
            course: "M.Sc. (Computer Applications & Information Technology)",
            scoreType: "CGPA",
            scoreValue: "8.20",
            logo: hnguLogo, // 🏠 MSc ke liye University Logo
            bullets: [
                "Specialized in enterprise computing architecture, backend engineering, and web stack optimization.",
                "Completed advanced practical modules on Web API development and enterprise frameworks.",
                "Successfully campus hired by Zobi Web Solutions as a DotNet Developer."
            ]
        },
        {
            duration: "2020 - 2023",
            institute: "Department of Computer Science, Hemchandracharya North Gujarat University (HNGU), Patan",
            course: "B.Sc. (Computer Applications & Information Technology)",
            scoreType: "CGPA",
            scoreValue: "7.60",
            logo: hnguLogo, // 🏠 BSc ke liye bhi same University Logo
            bullets: [
                "Built core foundational layers in Object-Oriented Programming concepts, Data Structures, and Algorithms.",
                "Studied advanced relational database schemas, query performance optimization, and server logic.",
                "Developed full-stack basic web portals as part of university academic project assignments."
            ]
        },
        {
            duration: "2018 - 2020",
            institute: "Aashish Vidhyalaya, Patan",
            course: "Higher Secondary Certificate (HSC) - Commerce",
            scoreType: "Percentage",
            scoreValue: "74.86%",
            logo: schoolLogo, // 🏫 12th ke liye School Logo dynamically set kiya
            bullets: [
                "Completed senior secondary education focusing on Accountancy, Statistics, and Business Economics.",
                "Developed strong analytical foundations and data computation skills through advanced academic mathematical structures.",
                "Cleared final state board examinations with high consistency in March 2020, laying the groundwork for logical computer applications."
            ]
        }
    ];

    return (
        <div className={classes.degreeMain}>
            <h1 className={classes.sectionTitle} style={{ color: nonThemeColor }}>
                Education Timeline
            </h1>
            
            <div className={classes.cardsContainer}>
                {degreesData.map((edu, index) => (
                    <div key={index} className={classes.degreeCard}>
                        {/* Left Side: Circular Image Avatar Frame */}
                        <div className={`${classes.degreeImage} centered`} style={{ borderColor: uiColor }}>
                            {/* 🚀 FIXED: Static variable ki jagah 'edu.logo' se dynamic render hoga image */}
                            <img src={edu.logo} alt={`${edu.course} Logo`} />
                        </div>
                        
                        {/* Right Side: Information Content Card Box Wrapper */}
                        <Card className={classes.degreeWrapper}>
                            <div className={classes.degreeInfo}>
                                <h3 className={classes.durationText} style={{ color: uiColor }}>
                                    {edu.duration}
                                </h3>
                                <h1 className={classes.instituteText} style={{ color: nonThemeColor }}>
                                    {edu.institute}
                                </h1>
                                <h2 className={classes.courseText} style={{ color: uiColor }}>
                                    {edu.course}
                                </h2>
                                <div className={classes.scoreContainer}>
                                    <span className={classes.scoreLabel}>{edu.scoreType}:</span>
                                    <span className={classes.scoreValue} style={{ color: uiColor }}> {edu.scoreValue}</span>
                                </div>
                            </div>
                            
                            <ul className={classes.details}>
                                {edu.bullets.map((bullet, bIndex) => (
                                    <li key={bIndex}>{bullet}</li>
                                ))}
                            </ul>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Degree;
