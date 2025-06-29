import { LINKS } from "../data/links";
import Clock from "./Clock"
import AnimatedInternalLink from "./AnimatedInternalLink";
import AnimatedExternalLink from "./AnimatedExternalLinks";
import copyright from "../assets/icons/copyright.svg";


/**
 * Footer Component
 * 
 * Renders the site footer with navigation links, social links, location, current time and copyright.
 */
function Footer() {
    // Get the current year dynamically  
    const year = new Date().getFullYear();

    return (
        <footer className="flex flex-col gap-8 sm:gap-y-4 sm:grid sm:grid-cols-12">
            {/* Menu */}
            <div className="sm:col-span-3 uppercase">
                <h4>Menu</h4>
                <div className="flex flex-col gap-4">

                    {LINKS.internal.map((link, index) => {
                        return (
                            <AnimatedInternalLink
                                key={index}
                                label={link.label}
                                to={link.url}
                                containerHeight="h-6"
                                translateY={-24}
                                linkWidth="w-fit"
                            />
                        )
                    })}

                    {LINKS.external
                        .filter((link) => link.label === "Resume")
                        .map((link, index) => {
                           return (
                            <AnimatedExternalLink
                                key={index}
                                label={link.label}
                                href={link.url}
                                containerHeight="h-6"
                                translateY={-24}
                                linkWidth="w-fit"
                            />
                           )     
                        })
                    }
                </div>
            </div>

            {/* Socials */}
            <div className="sm:col-span-4 uppercase">
                <h4>Socials</h4>
                <div className="flex flex-col gap-4">

                    {LINKS.external
                        .filter((link) => (link.label !== "Resume"))
                        .map((link, index) => {
                            return (
                                <AnimatedExternalLink 
                                    key={index}
                                    label={link.label}
                                    href={link.url}
                                    containerHeight="h-6"
                                    translateY={-24}
                                    linkWidth="w-fit"
                                />
                            )
                        })
                    }                   
                </div>
            </div>

            {/* Locations */}
            <div className="sm:col-span-5 uppercase">
                <h4>Location</h4>
                <div className="flex flex-col gap-2">
                    <a href="https://maps.app.goo.gl/n7G2oLvFvAkRA4KB6" target="_blank" rel="noopener noreferre">Zurich / CH</a>
                    <Clock />
                </div>
            </div>

            <div className="flex flex-col items-end sm:col-span-12">
                <div className="flex gap-2 font-doto text-5xl">
                    <span>{year}</span>
                    <img
                        src={copyright}
                        height="100px"
                        width="100px"
                        loading="lazy"
                        decoding="async"
                        className="size-10"
                    />
                </div>
                <span className="font-doto text-5xl text-right uppercase">Ruwen Chiew</span>
            </div>

            
            <span className="sm:col-span-12 pb-[1.25rem] w-full font-doto text-[0.875rem] text-center uppercase text-nowrap">Build and designed with passion</span>
        </footer>
    )
}

export default Footer