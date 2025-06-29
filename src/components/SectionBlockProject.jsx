import { BUTTON_LABELS } from "../data/buttons";
import Tag from "./Tag";
import Button from "./Button";
import iconArrowBlack from "../assets/icons/arrow_black.svg";

/**
 * SectionBlockProject Component
 * 
 * Renders a full project section on the Projects page.
 * Includes the project ID, title, tags, buttons, description and sections 
 * containing a list of challenges, highlights and improvements.
 * 
 * Params:
 * - project (Object): Contains all relevant project data.
 */
function SectionBlockProject({ project }) {
    return (
        <div id={project.id} className="top-0 z-0 sticky h-screen">
            <section className="flex flex-col justify-center lg:gap-y-4 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_30px_auto] h-[60dvh]">
                {/* ID and Title */}
                <h2 className="lg:flex lg:items-end lg:col-span-3 text-[var(--orange)] leading-none">({project.id})</h2>
                <h3 className="lg:flex lg:items-end lg:col-span-7 lg:col-start-6 mt-2 uppercase leading-none">{project.name}</h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2.5 lg:col-span-7 lg:col-start-6 mt-4">
                    {project.tags.map((tag, index) => (
                        <Tag 
                            key={index} 
                            label={tag}
                        />
                    ))}
                </div>
                
                {/* Button Container (Desktop) */}
                <div className="hidden lg:flex lg:flex-col gap-5 mt-[var(--padding-description-fluid)]">
                    {/* Primary Buttons */}
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
                    
                    {/* Secondary Buttons */}
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

                <p className="lg:col-span-7 lg:col-start-6 mt-[var(--padding-description-fluid)] text-fluid-base">{project.description}</p>
            </section>
                        
            {/* Challenges */}
            <section className="border-[var(--white50)] border-t-[1px]">
                <div className="flex flex-col lg:grid lg:grid-cols-12 bg-[var(--black)] h-[40dvh]">
                    <h4 className="lg:col-span-4 pt-[var(--padding-projects-section-fluid)] pl-[1px] uppercase">Challenges</h4>
                    <ul className="lg:col-span-7 lg:col-start-6 lg:pt-[var(--padding-projects-section-fluid)] pl-7 text-fluid-base list-[square]">
                        {project.challenges.map((item, index) => (
                            <li 
                                key={index} 
                                className="mt-2 md:mt-4"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </div>   
    )
}

export default SectionBlockProject