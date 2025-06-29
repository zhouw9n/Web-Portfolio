import HeroSection from "../components/HeroSection";
import SectionBlockHome from "../components/SectionBlockHome";
import ProjectPreview from "../components/ProjectPreview";
import Tile from "../components/Tile";
import iconArrowBlack from "../assets/icons/arrow_black.svg";
import { motion } from "motion/react";
import { useEffect, useRef } from "react"
import { useScroll, useTransform } from "motion/react";
import { PROJECTS } from "../data/projects";
import { TECH_STACK } from "../data/techstack";
import { BUTTON_LABELS, BUTTON_TYPES } from "../data/buttons";




function Home() {
    useEffect(() => {
        window.scroll(0,0);
    },[])

    const containerHero = useRef();
    const { scrollYProgress: scrollYProgressHero } = useScroll({
        target: containerHero,
        offset: ["start start", "end end"]
    });

    const containerProjects = useRef();
    const { scrollYProgress: scrollYProgressProjects} = useScroll({
        target: containerProjects,
        offset:["start start", "end end"]
    })
    

    

    return (
        <motion.main 
            transition={{duration: 0.75, ease: "easeIn", delay: 0.1}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 1}}
            ref={containerHero} 
            className="mb-[var(--padding-fluid)]"
        >
            {/* === Section: Hero === */}
            <HeroSection scrollYProgress={scrollYProgressHero}/>

            {/* === Container Main Content === */}
            <div className="top-[50px] left-[-4vw] z-10 relative bg-[var(--black)] rounded-[var(--rounded-content-container)] w-[calc(100%+8vw)] text-[var(--white)]">

                <div className="flex flex-col gap-[var(--gap-section-fluid)]">
                    {/* SECTION: About */}
                    <SectionBlockHome 
                        heading="Hi,"
                        text="I'm a Business IT graduate focusing on web design and frontend development. 
                              I enjoy the way design and code intersect, blending creativity, structure and problem-solving. 
                              This portfolio showcases my personal projects as I explore the digital space, bridging business 
                              and technology to create modern, user-focused experiences."
                        button={{
                            label: BUTTON_LABELS.READ_MORE,
                            buttonType: BUTTON_TYPES.INT,
                            href: "/about", 
                            icon: iconArrowBlack, 
                            className: "gap-2 bg-[var(--orange)] w-[185px] text-[var(--black)]"
                        }}
                    />

                    {/* SECTION: Projects */}
                    <SectionBlockHome
                        heading="Projects"
                        text="Personal projects created to learn, grow, and refine my skills. They show my willingness to take on new challenges, 
                              explore new technologies, and continuously improve my knowledge. Each one is a step forward in my journey as a developer."
                    >
                        <div ref={containerProjects} className="relative md:col-span-12 h-[400svh]">
                            {PROJECTS.map((project, index) => {

                                const fadeDistance = 1.25 / PROJECTS.length;
                                const start = index * fadeDistance;
                                const end = start + fadeDistance;

                                const isLast = index === PROJECTS.length -1;

                                const opacity = isLast ? 1 : useTransform(scrollYProgressProjects, [start, end], [1, 0])

                                return (
                                    <motion.div
                                        key={index}
                                        className="top-0 sticky flex justify-center items-center h-[100svh]"
                                        style={{ zIndex: PROJECTS.length + index, opacity}}
                                    >
                                        <ProjectPreview project={project} />
                                    </motion.div>
                                );
                            })} 

                        </div>  
                    </SectionBlockHome>

                    {/* SECTION: Tech Stack */}
                    <SectionBlockHome
                        heading="Tech Stack"
                        text="Through university coursework and hands-on projects, 
                              I’ve gained practical experience with a wide range of web technologies, 
                              enabling me to bring ideas to life and build engaging, functional web experiences."
                    >
                        <div className="justify-items-center gap-x-4 gap-y-[var(--gap-y-techstack-fluid)] grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:col-span-full pt-[var(--padding-fluid)]">
                            {TECH_STACK.map((item, index) => (
                                <Tile label={item.label} src={item.src} key={index}/>
                            ))}
                        </div>
                    </SectionBlockHome>

                    {/* SECTION: Call To Action */}
                    <SectionBlockHome
                        heading="Still here?"
                        text="Glad you made it this far. I'm actively looking for my first opportunity as a frontend developer, a place where I can grow, 
                              contribute meaningfully, and make an impact. If you're hiring or think I’d be a great addition to your team, I’d love to hear from you."
                        button={{ 
                            label: BUTTON_LABELS.CONTACT,
                            buttonType: BUTTON_TYPES.EXT,
                            href: "mailto:ruwenchiew@gmail.com", // E-Mail Address
                            icon: iconArrowBlack,
                            className: "gap-2 bg-[var(--orange)] w-[158px] text-[var(--black)]"
                        }}
                    ></SectionBlockHome>
                </div>
            </div>
        </motion.main>
    )
}

export default Home