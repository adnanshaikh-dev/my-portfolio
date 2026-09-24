import React from "react";

function Routes(props) {

    const handleTabClick = (e, index, targetId, isResume) => {

        // Resume button
        if (isResume) {
            e.preventDefault();

            // Mobile menu close
            if (props.onClick) {
                props.onClick();
            }

            // Resume PDF download
            const downloadAnchor = document.createElement("a");
            downloadAnchor.href = "/Adnan_Resume.pdf";
            downloadAnchor.download = "Adnan_Resume.pdf";

            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            document.body.removeChild(downloadAnchor);

            return;
        }

        // Normal navbar links
        e.preventDefault();

        // Active tab update
        if (props.setActiveIndex) {
            props.setActiveIndex(index);
        }

        // Mobile navbar close
        if (props.onClick) {
            props.onClick();
        }

        // Smooth scrolling
        try {
            const element = document.querySelector(targetId);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth"
                });
            } else {
                window.location.hash = targetId;
            }

        } catch (error) {
            console.log(
                "Scroll alignment fallback handler:",
                error
            );
        }
    };

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#getInTouch" },
        { label: "Education", href: "#education" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Certificates", href: "#certificates" },
        { label: "Resume", href: "#getInTouch" }
    ];

    return (
        <>
            {navItems.map((item, index) => {

                const isResume = item.label === "Resume";

                return (
                    <a
                        key={index}
                        href={isResume ? "/Adnan_Shaikh_Resume.pdf" : item.href}
                        onClick={(e) =>
                            handleTabClick(
                                e,
                                index,
                                item.href,
                                isResume
                            )
                        }
                    >
                        <div
                            className={`navs ${
                                isResume
                                    ? "resume-btn"
                                    : props.activeIndex === index
                                    ? "active"
                                    : ""
                            }`}
                        >
                            {item.label}
                        </div>
                    </a>
                );
            })}
        </>
    );
}

export default Routes;