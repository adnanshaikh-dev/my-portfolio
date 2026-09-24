import React from "react";
import styles from "./project.module.css";
import projectCoverImg from "../asset/project-cover10.png";
import ProjectItem from "./ProjectItem";
import ProjectsData from "../../Data/ProjectsData";
import SocialData from "../../Data/SocialData";
import Button from "../UI/Button";
import { useSelector } from "react-redux";

const Projects = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    let projects = ProjectsData.DUMMY_PROJECTS;

    return (
        <div id="projects" className={styles.mainWrapper}>
            <div className={styles.projects}>
                <section className={styles.projectImg}>
                    <img src={projectCoverImg} alt="Projects Showcase Cover" />
                </section>
                <section className={styles.projectHeader}>
                    <h1>
                        <span style={{ color: nonThemeColor }}>My Recent </span>
                        <span style={{ color: uiColor }}>Works</span>
                    </h1>
                    {/* 🚀 FIXED: Badala hua .NET specific high-impact paragraph text */}
                    <div>
                        My architectures leverage a wide variety of robust, modern backend frameworks and database systems. 
                        My core specialization lies in engineering production-ready <strong>ASP.NET Core REST Web APIs</strong>, 
                        implementing clean architectures (OOPs), and managing database handling queries seamlessly.
                    </div>
                </section>
            </div>
            
            <h1 className={styles.projectHeading} style={{ color: nonThemeColor }}>My Projects</h1>
            <div className={styles.projectList}>
                {projects.map((item, index) => {
                    return <ProjectItem key={index} project={item} />
                })}
            </div>
        </div>
    );
};

export default Projects;
