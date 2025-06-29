import Button from "./Button"

/**
 * SectionBlockHome Component
 * 
 * Renders a reusable section block on the Home page, 
 * used for sections like About, Projects, Tech Stack, and Contact.
 * Each block includes a heading, text, optional button, and optional children components.
 * 
 * Params:
 * - heading (string): The heading of the section block.
 * - text (string): A short introduction of the section block.
 * - button (Object): An optional object containing button data.
 * - children (ReactNode): Optional child elements to render inside the section. 
 */
function SectionBlockHome({ heading, text, button, children}) {
    return(
        <section className="flex flex-col md:grid md:grid-cols-12 mx-[4vw] last:mb-[112px] pt-[4vw]">
            <h2 className="md:col-span-12 uppercase">{heading}</h2>
            <p className="md:col-span-7 md:col-start-6 pt-2 text-fluid-base">{text}</p>
            {button && (
                <div className="flex justify-start sm:justify-end col-span-12 pt-[1.25rem]">
                    <Button 
                        label={button.label}
                        buttonType={button.buttonType}
                        href={button.href} 
                        icon={button.icon}
                        className={button.className}
                    /> 
                </div>
            )}
            {children && children}
        </section>
    )
}

export default SectionBlockHome