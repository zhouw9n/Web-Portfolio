import { BUTTON_TYPES } from "../data/buttons";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import "../global.css";

/**
 * Button Component
 * 
 * Renders either an internal or external animated button based on the buttonType.
 * - Internal buttons use React Router's navigate() function.
 * - External buttons open a new tab using anchor tag.
 * 
 * Props:
 * - label (string): The visible text on the button.
 * - href (string): External URL or internal route path the button points to.
 * - buttonType (enum): Button type - BUTTON_TYPES.EXT (external) or BUTTON_TYPES.INT (internal).
 * - iconColor (string): Determines which icon is used based on color.
 * - className(string): Tailwind classes for styling.
 */
function Button({label, href, buttonType, icon, className}) {
    const navigate = useNavigate()

    // Handles navigation for internal buttons using React Router
    function handleNavigate() {
        navigate(href);
    }

    // Handles which type of button to render
    switch (buttonType) {
        // === External Button ===
        case BUTTON_TYPES.EXT: 
            return (
                <motion.a 
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center cursor-pointer text-2xl px-[10px] py-[10px] rounded-[5px] h-10 uppercase ${className}`}
                    whileHover="hover"
                >
                    {label}
                    <motion.img 
                        variants={{ 
                            hover: { x: 4, y: 4 }
                        }}
                        src={icon}
                        className="size-6 -rotate-45"
                    />
                </motion.a>
            );
        // === Internal Buttons ===
        case BUTTON_TYPES.INT:
            return (
                <motion.button 
                    onClick={handleNavigate}
                    className={`flex items-center cursor-pointer text-2xl px-[10px] py-[10px] rounded-[5px] h-10 uppercase ${className}`}
                    whileHover="hover"
                >
                    {label}
                    <motion.img 
                        variants={{ 
                            hover: { x: 4 }
                        }}
                        src={icon}
                        className="size-6"
                    />
                </motion.button>
            );
        // === No Valid Type ===
        default:
            return null;
    }
}

export default Button