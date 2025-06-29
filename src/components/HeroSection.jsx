import { motion, useTransform } from "motion/react";
import copyright from "../assets/icons/copyright.svg";
import overlay from "../assets/overlay/grid.svg";

/**
 * HeroSection Component
 * 
 * Displays a sticky hero section with a grid overlay background, with a fadeout effect as the user scrolls down.
 * 
 * Props:
 * - scrollYProgress (float): Motion value between 0 and 1 representing the vertical scroll progress.
 */
function HeroSection({scrollYProgress}) {
    
    const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
    
    return (
        <motion.div 
            style={{opacity}}
            className="top-0 -z-10 sticky mt-12 h-[85svh]">
            <img 
                src={overlay}
                fetchPriority="high"
                className="w-full h-full object-cover"
            />
            <div className="top-0 right-0 z-10 absolute w-full">
                <div className="flex flex-col justify-around w-[100%] h-[85svh]">
                    <p className="text-fluid-base text-right">(Business IT / Frontend Developer)</p>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-left uppercase">Ruwen</h1>
                        <div className="flex flex-nowrap justify-end items-center gap-2">
                            <h1 className="text-right uppercase">Chiew</h1>
                            <img 
                                src={copyright}
                                loading="eager"
                                fetchPriority="high"
                                className="size-[var(--size-copyright)]"
                            />
                        </div>
                    </div>
                    <p className="max-w-[375px] md:max-w-[500px] text-fluid-base">Bridging business and technology through clean and responsive web experiences.</p>
                </div>
            </div>  
        </motion.div>
    )
}

export default HeroSection