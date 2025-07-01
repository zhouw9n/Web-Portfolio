import Header from "../components/Header";
import SectionBlockAbout from "../components/SectionBlockAbout";
import portrait from "../assets/images/portrait.avif";
import { EDUCATION } from "../data/education";
import { WORK } from "../data/work";
import { motion } from "motion/react";
import { useEffect } from "react";

/**
 * About Page Component
 * 
 * Consists of a Header, Introduction Section, Education Section and Work Experience Section.
 */
function About() {
    useEffect(() => {
        window.scroll(0,0);
    },[])

    return (
        <motion.main
            transition={{duration: 0.3, ease: "easeIn"}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
        >
            <Header header="About" />
            <div className="top-[-7dvh] left-[-4dvw] relative flex flex-col gap-[var(--gap-section-fluid)] bg-[var(--black)] px-[4dvw] pb-[var(--padding-fluid)] rounded-b-[var(--rounded-content-container)] w-[calc(100%+8dvw)] text-[var(--white)]">
                {/* SECTION: Introduction */}
                <section>
                    <div className="flex flex-col md:gap-x-8 md:grid md:grid-cols-12 pt-5 text-fluid-base">
                        <h2 className="order-1 col-span-full pb-4 uppercase leading-none">Hi,</h2>
                        <h3 className="order-2 col-span-full pb-2 uppercase leading-none">My name is</h3>
                        <h3 className="order-3 col-span-7 pb-5 text-[var(--orange)] uppercase leading-none">Ruwen Chiew</h3>
                        <div className="flex flex-col gap-y-4 md:gap-y-8 order-5 md:order-4 md:col-span-8 lg:col-span-7 mt-5 md:mt-0">
                            <p>
                                With a background in <span className="font-medium">business</span>, <span className="font-medium">tech</span>, and <span className="font-medium">marketing</span>, 
                                I bring a broad perspective to digital projects, combining strategic thinking with a strong 
                                focus on user experience and clean design.
                            </p>
                            <p>
                                During my studies, I gravitated toward the more technical modules and learned how to code, 
                                especially enjoying <span className="font-medium">web development</span> and <span className="font-medium">design</span>. Since then, I've 
                                been growing my skill set through personal projects, always curious and eager to learn more.
                            </p>
                            <p>
                                Beyond the screen, I enjoy <span className="font-medium">photography</span>, <span className="font-medium">exploring</span> new places and 
                                <span className="font-medium"> finding</span> inspiration in the visual details of everyday life. These interests often shape how I think 
                                about aesthetic and user experience.
                            </p>
                        </div>

                        <div className="flex md:justify-end md:items-end order-4 md:col-span-4 md:col-start-9 md:row-span-2 md:row-start-3 w-full" >
                            <img 
                                src={portrait}
                                fetchPriority="high"
                                alt="Portrait image"
                                draggable="false" 
                                style={{
                                    userDrag: "none",
                                    WebkitUserDrag: "none"
                                }}
                                onContextMenu={(e) => e.preventDefault()} //Disables Context Menu (right click)
                                className="rounded-[5px] w-auto h-auto md:h-[460px] object-contain object-start aspect-auto select-none" 
                            />
                        </div>
                    </div>
                </section>

                {/* SECTION: Education */}
                <section className="">
                    <h2 className="uppercase">Education</h2>
                    <div className="flex flex-col gap-14 pt-5">
                        {EDUCATION.map((item, index) => (
                            <SectionBlockAbout 
                                key={index}
                                title={item.title}
                                timeline={item.timeline}
                                experience={item.experience}
                            />
                        ))}
                    </div>
                    
                </section>

                {/* SECTION: Work Experience */}
                <section>
                    <h2 className="uppercase">Work Experience</h2>
                    <div className="flex flex-col gap-14 pt-5">
                        {WORK.map((item, index) => (
                            <SectionBlockAbout
                                key={index}
                                title={item.title}
                                timeline={item.timeline}
                                experience={item.experience}
                            />
                        ))}
                    </div>
                </section>                
            </div>

            
            
        </motion.main>
    )
}

export default About