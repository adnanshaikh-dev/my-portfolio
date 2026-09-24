import React from "react";
import PersonalData from "../../Data/PersonalData";
import CopyrightIcon from '@mui/icons-material/Copyright';
import "./footer.css";
import { useSelector } from "react-redux";

function Footer() {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.uiColor);
    
    // Dynamic real-time year tracking
    let currentYear = new Date().getFullYear();

    return (
        /* 🚀 MODERN EXECUTIVE FOOTER GRID CONTAINER */
        <footer className="footerCentered" style={{ color: nonThemeColor }}>
            <div className="footerContentContainer">
                <div className="copyrightBlock">
                    <CopyrightIcon className="copyrightIconVector" style={{ color: uiColor }} />
                    <span className="yearText">{currentYear}</span>
                    <span className="dividerPipe">|</span>
                    <span className="rightsText">All Rights Reserved.</span>
                </div>
                
                <div className="brandingAuthorBlock">
                    Handcrafted & Coded By 
                    <span className="authorName" style={{ color: uiColor }}>
                        &nbsp;{PersonalData.firstName}&nbsp;{PersonalData.lastName}
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
