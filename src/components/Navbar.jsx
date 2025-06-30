import { motion } from "motion/react";
import { useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import { LINKS } from "../data/links";
import { THEMES } from "../data/themes";
import { BUTTON_LABELS, BUTTON_TYPES } from "../data/buttons";
import AnimatedInternalLink from "./AnimatedInternalLink";
import Button from "./Button";

/**
 * Navbar Component
 * 
 * Renders the navigation bar with internal links and a resume button. 
 * It dynamically updates the theme colors based on the current route 
 * and renders a responsive dropdown menu for smaller screens.
 */
function Navbar() {
    const location = useLocation();
    const menuRef = useRef();

    const [theme, setTheme] = useState(location.pathname !== "/" ? THEMES.dark : THEMES.light);
    const [toggleMenu, setToggleMenu] = useState(false);
    
    // Update theme dynamically based on route change
    useEffect(() => {
        setTheme(location.pathname !== "/" ? THEMES.dark : THEMES.light);
    },[location]);

    // Animation variants for dropdown menu open and close states
    const variantsMenu = {
        open: {
            scaleX: 1, 
            scaleY: 1,
            opacity: 1,
            top: "-42px",
            right: "-2vw",
            transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1]}
        },
        closed: {
            scaleX: 0,
            scaleY: 0,
            opacity: 0,
            top: "-30px",
            right: "1vw",
            transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1]}
        }
    }

    useEffect(() => {
        const handleClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setToggleMenu(false);
            }
        };

        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("click", handleClick);
        };
    },[])


    return (
        <motion.nav 
            transition={{duration: 0.5, ease: "easeIn"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
            className="py-4 select-none"
        >
            {/* === Navbar === */}
            <div className={`hidden right-[4dvw] absolute md:flex justify-end items-center gap-[var(--gap-nav-fluid)] py-[10px] h-10 text-2xl uppercase ${theme.desktop.textColorLinks}`}>
                
                {LINKS.internal.map((link, index) => {
                    return (
                        <AnimatedInternalLink
                            key={index} 
                            label={link.label} 
                            to={link.url} 
                            containerHeight="h-8" 
                            translateY={-32}
                        />
                    )                    
                })}
        
                <Button 
                    label={BUTTON_LABELS.RESUME} 
                    buttonType={BUTTON_TYPES.EXT}
                    href={LINKS.external.find((item) => (item.label === BUTTON_LABELS.RESUME))?.url}
                    icon={`${theme.desktop.iconButton}`} 
                    className={` gap-2  w-[142px] ${theme.desktop.textColorButton} ${theme.desktop.bgColorButton}`}
                />
            </div>

            {/* === Navbar Dropdown === */}
            <div ref={menuRef} className="md:hidden top-4 right-[var(--right-fluid-dropdown)] absolute flex flex-col justify-center items-end w-[calc(100dvw-1rem)]">
                <div className="z-50 relative size-8">
                    {/* Close Icon*/}
                    <motion.img
                        initial={{opacity: 1}}
                        animate={toggleMenu ? {opacity: 1, duration: 0.1} : {opacity: 0, duration: 0.1} }
                        exit={{opacity: 0}}
                        onClick={() => setToggleMenu(!toggleMenu)} 
                        src={`${theme.mobile.closeIcon}`}
                        className="size-8 cursor-pointer"
                    />
                    {/* Menu Icon */}
                    <motion.img
                        initial={{opacity: 1}}
                        animate={toggleMenu ? {opacity: 0, duration: 0.1} : {opacity: 1, duration: 0.1} }
                        exit={{opacity: 0}}
                        onClick={() => setToggleMenu(!toggleMenu)} 
                        src={`${theme.mobile.menuIcon}`}
                        className="top-0 right-0 absolute size-8 cursor-pointer"
                    />
                </div>
                {/* List */}
                <motion.div 
                    variants={variantsMenu}
                    animate={toggleMenu ? "open" : 'closed'}
                    initial="closed"
                    exit="closed"
                    className={`z-0 relative rounded-[5px] w-[calc(100dvw-1rem)] origin-top-right ${theme.mobile.bgColor}`}>

                    <div className={`flex flex-col gap-8 mt-[45px]  mb-[10px] px-[10px] text-2xl uppercase ${theme.mobile.textColorLinks}`}>
                        
                        {LINKS.internal.map((link, index) => {
                            return (
                                <AnimatedInternalLink
                                    onClick={() => setToggleMenu(!toggleMenu)}
                                    key={index} 
                                    label={link.label}
                                    to={link.url}
                                    containerHeight="h-8"
                                    translateY={-32}
                                />
                            )
                        })}
                        
                        <Button 
                            label={BUTTON_LABELS.RESUME}
                            buttonType={BUTTON_TYPES.EXT}
                            href={LINKS.external.find((item) => (item.label === BUTTON_LABELS.RESUME))?.url}
                            icon={`${theme.mobile.iconButton}`} 
                            className={`justify-between ${theme.mobile.bgColorButton} ${theme.mobile.textColorButton}`}
                        />
                    </div>
                </motion.div>


            </div>
        </motion.nav>
    )
}

export default Navbar