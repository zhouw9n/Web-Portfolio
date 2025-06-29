import { PROJECTS } from "../data/projects";
import React, { useEffect } from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import SectionBlockProject from "../components/SectionBlockProject";
import SectionBlockProjectFold from "../components/SectionBlockProjectFold";
import { BUTTON_LABELS } from "../data/buttons";
import { useLocation } from "react-router";
import { motion } from "motion/react";
import iconArrowBlack from "../assets/icons/arrow_black.svg";

function Projects() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.slice(1);
            const element = document.getElementById(id);


            if (element) {
                element.scrollIntoView();
            }
        } else {
            window.scroll(0,0);
        }
    }, [location])

    return (
        <motion.main 
            transition={{duration: 0.3, ease: "easeIn"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
            className="scroll-smooth"
        >
            <Header header="Projects" />
            <div className="top-[-7dvh] left-[-4dvw] relative flex flex-col bg-[var(--black)] px-[4dvw] pb-[var(--padding-fluid)] rounded-b-[var(--rounded-content-container)] w-[calc(100%+8dvw)] text-[var(--white)]">
                <div className="flex flex-col items-center w-full">
                    {PROJECTS.map((project, index) => (
                        <React.Fragment key={index}>
                            <div>
                                <SectionBlockProject    
                                    project={project} 
                                />
                                <SectionBlockProjectFold
                                    label="Highlights"
                                    zIndex="z-10"
                                    bulletPoints={project.highlights} 
                                />
                                <SectionBlockProjectFold
                                    label="Improvements"
                                    zIndex="z-20"
                                    bulletPoints={project.improvements} 
                                />
                            </div>
                            {/* Button Container (Mobile) */}
                            <div className="lg:hidden z-30 relative flex flex-col justify-start gap-5 mb-24 w-full">
                                {/* Primary Button */}
                                {project.buttons
                                    .filter(button => button.label === BUTTON_LABELS.DEMO)
                                    .map((button, index) => (
                                        <Button 
                                            key={index}
                                            label={button.label}
                                            href={button.href}
                                            buttonType={button.buttonType}
                                            icon={iconArrowBlack}
                                            className="gap-2 bg-[var(--orange)] rounded-[5px] w-[115px] text-[var(--black)]"
                                        />
                                    ))}
                                {/* Secondary Button */}
                                <div className="flex gap-5">
                                    {project.buttons
                                        .filter(button => button.label === BUTTON_LABELS.FIGMA || button.label === BUTTON_LABELS.GITHUB)
                                        .map((button, index) => (
                                            <Button 
                                                key={index}
                                                label={button.label}
                                                href={button.href}
                                                buttonType={button.buttonType}
                                                icon={button.icon}
                                                className={button.className}
                                            />
                                    ))}
                                </div>
                            </div>
                        </React.Fragment> 
                    ))}
                </div>
            </div>
        </motion.main>
    )
}

export default Projects