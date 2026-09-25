import React, { useEffect } from "react";
import Typewriter from 'typewriter-effect/dist/core';
// import profileAvatar from "../asset/logo.png";
import PersonalData from "../../Data/PersonalData";
import classes from "./home.module.css";
import { autoTypeData } from "../../Data/PersonalData";

import SocialLinks from "../SocialLinks/SocialLinks";
import { useSelector } from "react-redux";
import ImageUrl from "../../Data/dp.jpeg";
// const linkIcons=[GitHubIcon,LinkedInIcon,TwitterIcon,InstagramIcon,EmailIcon];

function Home(props) {

    const nonThemeColor = useSelector(state => state.nonThemeColor);
    const uiColor=useSelector(state=>state.uiColor);
    function handleTyper() {
        let textItems = autoTypeData;
        var autoTyper = document.getElementById('typer');
        new Typewriter(autoTyper, {
            strings: textItems,
            autoStart: true,
            pauseFor: 1000,
            loop: true,
        });
    }
    useEffect(
        handleTyper
    ,[]);
    return (
        <main id="home">
            {/* Professional Smooth Marquee Banner using CSS Modules */}
            <div className={classes.hiringMarquee}>
                <div className={classes.marqueeContent}>
                    🚀 Actively looking for the DotNet Developer opportunities or any suitable opportunity! Open to work with reasonable salary package and available to join immediately for full-time roles. &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
                    🚀 Actively looking for the DotNet Developer opportunities or any suitable opportunity! Open to work with reasonable salary package and available to join immediately for full-time roles. &nbsp;&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>

            <div className={classes.homeContent}>
                <h1 className={classes.greeting}>
                    Hi There !
                </h1>
                <h2>I'm &nbsp;<span id="name" style={{ color: uiColor, fontWeight: 600 }}>{PersonalData.firstName}&nbsp;{PersonalData.lastName}</span></h2>
                <h3 style={{ color: nonThemeColor }}>
                    {PersonalData.nickName}
                </h3>
                <div className={classes.autoText}>
                    I am <span id="typer" style={{ color: uiColor }}></span>
                </div>
                <p className={classes.connectText}>Feel free to <span style={{ color: uiColor, fontWeight:'600' }}>connect</span> with me.</p>
                <SocialLinks className={classes.links} />
            </div>
            <div className={classes.avatar}>
                    <img src={ImageUrl} alt="Loading ..." style={{borderColor:uiColor}} />
                </div>
        </main>
    )
}
export default Home;