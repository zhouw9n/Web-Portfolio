import { motion } from "motion/react"
import { Link } from "react-router"


/**
 * AnimatedInternalLink Component
 * 
 * Renders internal links with an on hover reveal animation.
 * 
 * Props:
 * - label (string): - The visible text of the link.
 * - href (string): - Internal route path used with React Router.
 * - containerHeight (string): - Tailwind height class for the outer container.
 * - translateY: (number): - Vertical pixel value to move the label on hover.
 * - linkWidth (string): - Tailwind width class for the animated area.
 * - onClick (function): Optional callback function when the lin is clicked (for dropdown menu to close it when a link is clicked)
 */
function AnimatedInternalLink({ label, to, containerHeight, translateY, linkWidth, onClick }) {
    return (
        <div className={` overflow-hidden ${containerHeight}`}>
            <motion.div
                onClick={onClick}
                whileHover={{ y: translateY }}
                className={`flex flex-col ${linkWidth} `}
            >
                <Link to={to}>{label}</Link>
                <Link to={to}>{label}</Link>
            </motion.div>
        </div>
    )
}

export default AnimatedInternalLink