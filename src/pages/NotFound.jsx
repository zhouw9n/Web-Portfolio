import { motion } from "motion/react";
import { useEffect } from "react";

/**
 * Not Found Page Component
 * 
 * Shows the user a 404 Page Not Found page.
 */
function NotFound() {
    useEffect(() => {
        window.scroll(0,0);
    },[])

    return(
        <motion.main
            transition={{duration: 0.3, ease: "easeIn"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
        >
            <div className="top-[-6dvh] left-[-4dvw] -z-50 relative flex flex-col justify-center items-center bg-[var(--black)] pb-[6dvh] rounded-b-[var(--rounded-content-container)] w-[calc(100%+8dvw)] h-[100svh] text-[var(--white)]">
                <h1>404</h1>
                <p className="pt-2">Page Not Found</p>
            </div>
            
            
        </motion.main>
    )
}

export default NotFound