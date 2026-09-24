import React from "react";
import classes from "./programmingSkills.module.css";
import { useSelector } from "react-redux";

// 🚀 MIXED ROBUST IMPORTS: Foolproof stable repository icons mapping
import {
  TbBrandCSharp,
  TbBrandAngular,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandGit,
  TbBrandGithub,
} from "react-icons/tb";
import { FaDatabase, FaServer, FaCode } from "react-icons/fa6";
import {
  SiPostman,
  SiSwagger,
  SiRabbitmq,
  SiMysql,
  SiSocketdotio,
  SiFramework7,
} from "react-icons/si";

const ProgrammingSkills = (props) => {
  const uiColor = useSelector((state) => state.uiColor);
  const nonThemeColor = useSelector((state) => state.nonThemeColor);

  // 🚀 SKILLS CATEGORIZED: Structured segments Straight from your resume
  const categorizedSkills = [
    {
      title: "Backend Development",
      skills: [
        { name: "C#", Icon: TbBrandCSharp, iconColor: "#9B4F96" },
        { name: "ASP.NET Core", Icon: FaServer, iconColor: "#512BD4" },
        { name: "Web API", Icon: FaCode, iconColor: "#238392" },
        { name: "Entity Framework", Icon: SiFramework7, iconColor: "#512BD4" }
      ],
    },
    {
      title: "Frontend Stack",
      skills: [
        { name: "Angular", Icon: TbBrandAngular, iconColor: "#DD0031" },
        { name: "JavaScript", Icon: TbBrandJavascript, iconColor: "#F7DF1E" },
        { name: "HTML5", Icon: TbBrandHtml5, iconColor: "#E34F26" },
        { name: "CSS3", Icon: TbBrandCss3, iconColor: "#1572B6" },
      ],
    },
    {
      title: "Database Engines",
      skills: [
        { name: "SQL Server", Icon: FaDatabase, iconColor: "#CC292B" },
        { name: "MySQL", Icon: SiMysql, iconColor: "#00758F" },
      ],
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", Icon: TbBrandGit, iconColor: "#F05032" },
        { name: "GitHub", Icon: TbBrandGithub, iconColor: "#181717" },
        { name: "Postman", Icon: SiPostman, iconColor: "#FF6C37" },
        { name: "Swagger", Icon: SiSwagger, iconColor: "#85EA2D" },
        { name: "SignalR", Icon: SiSocketdotio, iconColor: "#512BD4" },
        { name: "RabbitMQ", Icon: SiRabbitmq, iconColor: "#FF6600" },
      ],
    },
  ];

  return (
    <div className={classes.mainCard} id="skills">
      {/* 🚀 PURPLE MAIN HEADING */}
      <h1 className={classes.sectionTitle} style={{ color: uiColor }}>
        Technical <span style={{ color: nonThemeColor }}>SkillSet</span>
      </h1>

      {/* ==========================================================================
         🚀 NEW LAYER: Highly Professional Broad Content Paragraphs (Fills space perfectly)
         ========================================================================== */}
      <div className={classes.skillsIntroductionPanel} style={{ color: nonThemeColor }}>
        <p>
          As a dedicated software engineer specializing in the <b>.NET and Microsoft Ecosystem</b>, my architectural approach centers on developing highly scalable, secure, and production-ready enterprise applications. By leveraging clean coding standards and advanced design principles like <b>Object-Oriented Programming (OOPs)</b> and dependency injection, I focus on bridging the gap between rigorous asynchronous backend logic and highly responsive client-side user interfaces.
        </p>
        
        <p>
          My operational workflow encompasses building modular services, designing multi-layered monolithic systems using frameworks like <b>ABP.IO</b>, and orchestrating smooth cross-origin resource communication pipelines. From relational database query optimizations down to microservices real-time messaging networks, my core competencies are engineered to sustain modern data-heavy enterprise platforms.
        </p>

        {/* Dynamic Contextual Quick Bullet Core Overview */}
        <div className={classes.coreCompetenciesPoints}>
          <h3>Core Technical Framework Capabilities:</h3>
          <div className={classes.bulletsGrid}>
            <div className={classes.bulletRow}><span className={classes.miniDot} style={{backgroundColor: uiColor}}></span> RESTful Web API Architectures & Middleware Routing</div>
            <div className={classes.bulletRow}><span className={classes.miniDot} style={{backgroundColor: uiColor}}></span> Relational Query Optimizations & LINQ State Tracing</div>
            <div className={classes.bulletRow}><span className={classes.miniDot} style={{backgroundColor: uiColor}}></span> Real-time Bi-directional Websockets using SignalR</div>
            <div className={classes.bulletRow}><span className={classes.miniDot} style={{backgroundColor: uiColor}}></span> Asynchronous Message Queuing Pipelines via RabbitMQ</div>
          </div>
        </div>
      </div>

      {/* 🚀 CATEGORIZED BLOCKS SYSTEM LAYOUT CONTAINER */}
      <div className={classes.dashboardGrid}>
        {categorizedSkills.map((category, blockIndex) => (
          <div
            key={blockIndex}
            className={classes.skillBlockCard}
            style={{ borderColor: `${uiColor}30` }}
          >
            <h2
              className={classes.blockHeader}
              style={{ color: nonThemeColor }}
            >
              {category.title}
            </h2>

            {/* 🚀 BOX CARD GRID LAYER WITH PERMANENT TEXT CORES */}
            <div
              className={classes.skillSetCard}
              style={{ color: nonThemeColor }}
            >
              {category.skills.map((item, index) => {
                const TargetIcon = item.Icon;
                return (
                  <div
                    className={classes.skillItem}
                    style={{ borderColor: uiColor }}
                    key={index}
                  >
                    <TargetIcon 
                      className={classes.skillSvgIcon} 
                      style={{ color: item.iconColor }} 
                    />
                    <span
                      className={classes.skillName}
                      style={{ color: nonThemeColor }}
                    >
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgrammingSkills;
