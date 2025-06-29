import { motion } from "motion/react"

/**
 * AnimatedExternalLink Component
 * 
 * Renders external links which open in a new tab with an on hover reveal animation.
 * 
 * Props:
 * - label (string): - The visible text of the link.
 * - href (string): - External URL the link points to.
 * - containerHeight (string): - Tailwind height class for the outer container.
 * - translateY: (number): - Vertical pixel value to move the label on hover.
 * - linkWidth (string): - Tailwind width class for the animated area.
 */
function AnimatedExternalLink({ label, href, containerHeight, translateY, linkWidth }) {
    return (
        <div className={` overflow-hidden ${containerHeight}`}>
            <motion.div
                whileHover={{ y: translateY }}
                className={`flex flex-col ${linkWidth} `}
            >
                <a href={href} target="_blank" rel="noopener noreferre" >{label}</a>
                <a href={href} target="_blank" rel="noopener noreferre">{label}</a>
            </motion.div>
        </div>
    )
}

export default AnimatedExternalLink