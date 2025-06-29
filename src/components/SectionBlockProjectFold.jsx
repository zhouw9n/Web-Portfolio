/**
 * SectionBlockProjectFold Component
 * 
 * Renders a reusable section block on the project page, 
 * which overlaps on the previous section block challenges or highlights.
 * Each block includes a heading and a list of bullet points.
 * 
 * Params:
 * - label (string): The section title/heading to display.
 * - zIndex (string): Tailwind z-index utility class to control layer stacking.
 * - bulletPoints (Array): An array of strings representing bullet points.
 * 
 */
function SectionBlockProjectFold({ label, zIndex, bulletPoints }) {
    return (
        <section className={`top-0 sticky min-h-screen w-full pointer-events-none ${zIndex}`}>
            <div className="h-[60dvh]"/>
            <div className="lg:grid lg:grid-cols-12 bg-[var(--black)] border-[var(--white50)] border-t-[1px] h-[40dvh]">
                <h4 className="lg:col-span-4 pt-[var(--padding-projects-section-fluid)] pl-[1px] uppercase">{label}</h4>
                <ul className="lg:col-span-7 lg:col-start-6 lg:pt-[var(--padding-projects-section-fluid)] pl-7 text-fluid-base list-[square]">
                    {bulletPoints.map((item, index) => (
                        <li key={index} className="mt-2 md:mt-4">{item}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default SectionBlockProjectFold