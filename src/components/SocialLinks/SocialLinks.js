import React from "react";
import SocialData from "../../Data/SocialData";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp'; // WhatsApp icon imported

import classes from "./socialLinks.module.css";
import { useSelector } from "react-redux";

const SocialLinks = (props) => {
    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor = useSelector(state => state.theme.color); // Theme accent color from redux

    return (
        <div className={`${classes.socialContainer} ${props.className}`} style={{ color: nonThemeColor }}>
            
            {/* Row 1: LinkedIn */}
            <div className={classes.socialRow}>
                <a href={SocialData.linkedInLink} target="_blank" rel="noreferrer" style={{ color: uiColor }}>
                    <LinkedInIcon fontSize="large" />
                </a>
                <span className={classes.socialText}>Don't forget to follow me on LinkedIn.</span>
            </div>

            {/* Row 2: WhatsApp */}
            {/* Note: SocialData.whatsAppLink nahi bana hai toh aap direct "https://wa.me" bhi likh sakte hain */}
            <div className={classes.socialRow}>
                <a href={SocialData.whatsAppLink} target="_blank" rel="noreferrer" style={{ color: uiColor }}>
                    <WhatsAppIcon fontSize="large" />
                </a>
                <span className={classes.socialText}>I am also available on WhatsApp.</span>
            </div>

            {/* Row 3: Email */}
            <div className={classes.socialRow}>
                <a href={SocialData.emailLink} target="_blank" rel="noreferrer" style={{ color: uiColor }}>
                    <EmailIcon fontSize="large" />
                </a>
                <span className={classes.socialText}>Drop a mail for queries or collaborations.</span>
            </div>

        </div>
    )
};

export default SocialLinks;
