import React, { useState } from "react";
import classes from "./ProjectItem.module.css";
import Card from "../UI/Card";
import CloseIcon from '@mui/icons-material/Close'; 
import { useSelector } from "react-redux";

// Static default cover graphic agar kisi project me image na ho
import defaultProjectImg from "../asset/project-cover10.png"; 

const ProjectItem = (props) => {
    const uiColor = useSelector(state => state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const mode = useSelector(state => state.mode); // Redux se theme mode check karne ke liye

    // Modal state handler
    const [isModalOpen, setIsModalOpen] = useState(false);

    let description = props.project.description;
    if (!description || description === '') {
        description = "Core .NET enterprise software engineering module containing clean architectures, bug fixes, and scalable API components.";
    }
    
    // Popup ke liye full detailed description mapping
    const detailedDescription = props.project.detailedText || props.project.description || description;

    // Card summary text slice parameters
    let cardDescription = description;
    if (cardDescription.length > 110) {
        cardDescription = cardDescription.substr(0, 110) + " ...";
    }

    const toggleModalHandler = (e) => {
        e.preventDefault();
        setIsModalOpen(prev => !prev);
    };

    // 🚀 Dynamic Condition: Dark mode me solid purple background set karega bina hover ke bhi
    const isDarkMode = mode === "dark";
    const dynamicBtnStyle = isDarkMode 
        ? { backgroundColor: uiColor, color: "#ffffff", borderColor: uiColor } 
        : { backgroundColor: `${uiColor}15`, color: uiColor, borderColor: uiColor };

    return (
        <>
            {/* 🚀 BASE SUMMARY CARD */}
            <Card className={classes.projectItem}>
                <div className={classes.cardUpperMeta}>
                    <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
                    <p className={classes.description} style={{ color: nonThemeColor }}>{cardDescription}</p>
                    <p className={classes.dateUpdated} style={{ color: nonThemeColor }}>
                        {props.project.lastUpdated}
                    </p>
                </div>
                
                <div className={classes.controls}>
                    {/* ✅ GITHUB ICON BLOCK REMOVED COMPLETELY */}
                    <button 
                        onClick={toggleModalHandler}
                        className={classes.detailsCtaBtn}
                        style={dynamicBtnStyle}
                    >
                        View Details ↗
                    </button>
                </div>
            </Card>

            {/* ==========================================================================
               🚀 UPDATED SHOWCASE MODAL: Light & Dark Mode 100% Optimized
               ========================================================================== */}
            {isModalOpen && (
                <div className={classes.modalOverlay} onClick={toggleModalHandler}>
                    {/* JavaScript dynamic class toggling light/dark frames */}
                    <div className={`${classes.modalContentCard} ${isDarkMode ? classes.darkCardFrame : classes.lightCardFrame}`} onClick={(e) => e.stopPropagation()}>
                        
                        {/* ✕ Close button safely positioned INSIDE the card corner wrapper */}
                        <button className={classes.modalCloseXBtn} onClick={toggleModalHandler} style={{ backgroundColor: `${uiColor}20`, color: uiColor }}>
                            <CloseIcon fontSize="small" />
                        </button>

                        {/* Top: Large Project Banner Showcase */}
                        <div className={classes.modalImageSection}>
                            <img src={props.project.projectImage || defaultProjectImg} alt={`${props.project.projectTitle} Banner`} />
                        </div>

                        {/* Bottom Content Data Panels */}
                        <div className={classes.modalBodySection}>
                            <div className={classes.modalMetaHeader}>
                                <h2 style={{ color: uiColor }}>{props.project.projectTitle}</h2>
                                <span className={classes.modalTechTag} style={{ color: nonThemeColor }}>
                                    🛠️ Tech Infrastructure: {props.project.lastUpdated}
                                </span>
                            </div>

                            {/* Crisp readability multi-line scrollable text field blocks */}
                            <p className={classes.modalFullTextDescription} style={{ color: nonThemeColor }}>
                                {detailedDescription}
                            </p>

                            {/* Footer Controls Action Layer Drawer (GitHub Link removed) */}
                            <div className={classes.modalFooterControls}>
                                <div className={classes.footerSpacer}></div> {/* Center pushes the right button */}
                                <button 
                                    className={classes.modalMainCloseBtn} 
                                    onClick={toggleModalHandler}
                                    style={{ backgroundColor: uiColor, boxShadow: `0 4px 15px ${uiColor}40` }}
                                >
                                    Close Screen
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectItem;
