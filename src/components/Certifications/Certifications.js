import React, { useState, useEffect } from "react";
import classes from "./certifications.module.css";
import CertificatesData from "../../Data/CertificatesData";
import { useSelector } from "react-redux";

// 🚀 MIXED ROBUST IMPORTS: Icons loaded cleanly
import { TbChevronLeft, TbChevronRight, TbAward, TbCode, TbHourglass } from "react-icons/tb";

const Certifications = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    
    let certificationsList = CertificatesData.certificationsList;
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("next");

    // Automatic slide loops tracker (Fatafat 2.5 seconds loop intervals set kiya hai)
    useEffect(() => {
        const autoInterval = setInterval(() => {
            nextSlideHandler();
        }, 2500); 
        return () => clearInterval(autoInterval);
    }, [currentIndex]);

    const nextSlideHandler = () => {
        setSlideDirection("next");
        setCurrentIndex((prevIndex) => (prevIndex === certificationsList.length - 1 ? 0 : prevIndex + 1));
    };

    const prevSlideHandler = () => {
        setSlideDirection("prev");
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificationsList.length - 1 : prevIndex - 1));
    };

    // Dynamic directional mapping classes
    const activeAnimationClass = slideDirection === "next" 
        ? classes.slideAnimationNext 
        : classes.slideAnimationPrev;

    return (
        <div className={classes.certificationsMain} id="certificates">
            <h1 className={classes.sectionTitle} style={{ color: uiColor }}>
                Achieved <span style={{ color: nonThemeColor }}>Certificates</span>
            </h1>

            {/* ==========================================================================
               🚀 NEW LAYER: Chhote aur Professional Certification Paragraphs
               ========================================================================== */}
            <div className={classes.certIntroPanel} style={{ color: nonThemeColor }}>
                <p>
                    Continuous learning is foundational to my engineering workflow. Through targeted global credentials and specialized bootcamps, I actively master modern industry standards, architectural patterns, and full-stack software paradigms.
                </p>
                <p>
                    Each certification represents hours of rigorous validation, hands-on enterprise assignments, and concrete domain expertise. These verified qualifications solidify my competencies in full-stack architecture, database management, and cloud ecosystems.
                </p>
            </div>
            
            {/* Top Categories Chips */}
            <div className={classes.topicsTextList}>
                {certificationsList.map((item, index) => (
                    <div 
                        key={index} 
                        className={`${classes.topicChip} ${currentIndex === index ? classes.activeChip : ""}`}
                        style={currentIndex === index ? { backgroundColor: `${uiColor}15`, borderColor: uiColor, color: uiColor } : { borderColor: `${nonThemeColor}20`, color: nonThemeColor }}
                        onClick={() => {
                            setSlideDirection(index >= currentIndex ? "next" : "prev");
                            setCurrentIndex(index);
                        }}
                    >
                        ✔ {item.title}
                    </div>
                ))}
            </div>

            <div className={classes.dualWorkspaceGrid}>
                
                {/* 📊 LEFT COLUMN: Analytics Metrics Panel */}
                <div className={classes.analyticsSidePanel}>
                    <div className={classes.metricCard}>
                        <div className={classes.metricIcon} style={{ color: uiColor, backgroundColor: `${uiColor}10` }}>
                            <TbAward />
                        </div>
                        <div className={classes.metricTexts}>
                            <h3 style={{ color: nonThemeColor }}>{certificationsList.length} Verified</h3>
                            <p>Global Credentials</p>
                        </div>
                    </div>

                    <div className={classes.metricCard}>
                        <div className={classes.metricIcon} style={{ color: uiColor, backgroundColor: `${uiColor}10` }}>
                            <TbCode />
                        </div>
                        <div className={classes.metricTexts}>
                            <h3 style={{ color: nonThemeColor }}>Full-Stack</h3>
                            <p>.NET & UI Ecosystem</p>
                        </div>
                    </div>

                    <div className={classes.metricCard}>
                        <div className={classes.metricIcon} style={{ color: uiColor, backgroundColor: `${uiColor}10` }}>
                            <TbHourglass />
                        </div>
                        <div className={classes.metricTexts}>
                            <h3 style={{ color: nonThemeColor }}>100+ Hours</h3>
                            <p>Continuous Learning</p>
                        </div>
                    </div>
                </div>

                {/* 🎬 RIGHT COLUMN: Extended Slider Box Workspace */}
                <div className={classes.carouselFrameworkBox}>
                    <div className={classes.sliderWindowView}>
                        
                        {/* 🚀 IMAGE VIEWPORT: Only image container handles translation inside masking bounds */}
                        <div className={`${classes.certFramePhotoArea} ${activeAnimationClass}`} key={currentIndex}>
                            <div className={classes.imageSliderWrapper}>
                                <img src={certificationsList[currentIndex].certificateImage || "https://unsplash.com"} alt={certificationsList[currentIndex].title} />
                            </div>
                        </div>

                        {/* 🚀 PERMANENT FIXED ACTIONS CONTROL DRAWER PANEL: (Separated from image animations completely) */}
                        <div className={classes.certMetaFooter}>
                            <div className={classes.metaTextStack}>
                                <h2 style={{ color: nonThemeColor }}>{certificationsList[currentIndex].title}</h2>
                                <h3 style={{ color: uiColor }}>Platform: {certificationsList[currentIndex].platform}</h3>
                            </div>

                            {/* ✅ FIXED ROW CONTROLS: Yeh buttons ab apni jagah se 1% bhi nahi hilenge */}
                            <div className={classes.footerActionControls}>
                                <button className={classes.slideNavBtn} onClick={prevSlideHandler} style={{ backgroundColor: uiColor, boxShadow: `0 4px 12px ${uiColor}30` }}>
                                    <TbChevronLeft />
                                </button>
                                <button className={classes.slideNavBtn} onClick={nextSlideHandler} style={{ backgroundColor: uiColor, boxShadow: `0 4px 12px ${uiColor}30` }}>
                                    <TbChevronRight />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Certifications;
