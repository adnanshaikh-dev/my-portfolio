import React from "react";
import classes from "./experience.module.css";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

// 🚀 MIXED ROBUST IMPORTS: Icons for tech indicators mapping
import { TbBriefcase, TbCalendar, TbBuildingSkyscraper } from "react-icons/tb";

const Experience = () => {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    // ✅ STRUCTURED SCHEMAS: Back to your original single enterprise role dataset
    const experienceData = [
        {
            role: "DotNet Developer",
            company: "Zobi Web Solutions Pvt Ltd",
            duration: "January 2025 - February 2026",
            location: "Ahmedabad, Gujarat",
            techStack: ["C#", "ASP.NET Core", "Web API", "ABP.IO Framework", "Angular", "SQL Server"],
            bullets: [
                "Developed and maintained high-performance ASP.NET Core Web APIs for real-time client applications.",
                "Implemented clean modular monolithic architecture paradigms securely using the ABP.IO ecosystem framework.",
                "Designed, structured, and optimized complex relational database queries while contributing to frontend module layers using Angular.",
                "Systematically debugged, pinpointed, and resolved critical application bottlenecks to significantly improve overall functionality.",
                "Collaborated actively in an agile team environment to safely deliver scalable product features and micro-fixes well on time."
            ]
        }
    ];

    return (
        <div className={classes.experienceMain} id="experience">
            {/* 🚀 FIXED PURPLE TITLE LAYOUT HIGH CONTRAST */}
            <h1 className={classes.sectionTitle} style={{ color: uiColor }}>
                Professional <span style={{ color: nonThemeColor }}>Experience</span>
            </h1>

            {/* ==========================================================================
               🚀 NEW LAYER: Broad Informational Content Paragraphs (Fills space perfectly)
               ========================================================================== */}
            <div className={classes.experienceIntroductionPanel} style={{ color: nonThemeColor }}>
                <p>
                    Throughout my software engineering career, my core focus has been directed toward constructing secure, high-throughput, and data-resilient application backends. Engaging in multi-tier enterprise systems demands a comprehensive understanding of asynchronous request handling, service dependency boundaries, and systematic error tracking. My day-to-day operations focus heavily on ensuring minimal latency across distributed networks while keeping code maintainable.
                </p>
                
                <p>
                    Working closely within collaborative agile teams, I bridge the operational workspace between database administration and robust API middleware handling. By driving automation, optimizing query data streams, and mapping clean full-stack architectural frameworks, my contributions are geared toward sustaining continuous software lifecycle deployments and stable product releases.
                </p>

                
            </div>

            {/* Timeline Wrapper Container */}
            <div className={classes.timelineContainer}>
                {experienceData.map((exp, index) => (
                    <div key={index} className={classes.timelineRow}>
                        
                        {/* 🚀 LEFT TRACKER RAIL: Animated corporate timeline axis tracking points */}
                        <div className={classes.railTimelineAxis}>
                            <div className={classes.glowingNodePulse} style={{ backgroundColor: uiColor, boxShadow: `0 0 15px ${uiColor}` }}>
                                <TbBriefcase className={classes.axisIconVector} />
                            </div>
                            <div className={classes.verticalConnectLine} style={{ background: `linear-gradient(180deg, ${uiColor} 0%, rgba(128, 0, 128, 0.1) 100%)` }}></div>
                        </div>

                        {/* 🚀 RIGHT CONTENT CARD: Premium glassmorphic workspace layout deck */}
                        <Card className={classes.experienceWrapperCard} style={{ borderColor: `${uiColor}25` }}>
                            <div className={classes.expHeaderMeta}>
                                <div className={classes.titleGroup}>
                                    <h2 className={classes.roleTitle} style={{ color: uiColor }}>{exp.role}</h2>
                                    <div className={classes.companySubGroup} style={{ color: nonThemeColor }}>
                                        <TbBuildingSkyscraper className={classes.inlineMetaIcon} /> 
                                        <strong>{exp.company}</strong>
                                    </div>
                                </div>
                                <div className={classes.durationGroup} style={{ backgroundColor: `${uiColor}10`, color: uiColor }}>
                                    <TbCalendar className={classes.inlineMetaIcon} /> {exp.duration}
                                </div>
                            </div>

                            {/* 🚀 CORE RELEVANT TECH CAPSULES TAGS GRID */}
                            <div className={classes.techTagsCluster}>
                                {exp.techStack.map((tech, tIndex) => (
                                    <span key={tIndex} className={classes.techPillTag} style={{ borderColor: `${uiColor}40`, color: nonThemeColor }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Bullet points document list */}
                            <ul className={classes.expDetailsList}>
                                {exp.bullets.map((bullet, bIndex) => (
                                    <li key={bIndex}>{bullet}</li>
                                ))}
                            </ul>
                        </Card>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Experience;
