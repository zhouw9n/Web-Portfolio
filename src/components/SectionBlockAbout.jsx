/**
 * SectionBlockAbout Component
 * 
 * Renders a reusable section block on the About page, used for sections like Education and Work Experience.
 * Each block includes a title, timeline, and a list of experiences or achievements.
 * 
 * Params:
 * - title (string): Title of the experience
 * - timeline (string): Time duration of the experience
 * - experience (Array): A list of strings describing relevant experiences.
 * 
 */
function SectionBlockAbout({ title, timeline, experience}) {
    return (
        <div className="text-fluid-base">
            <div className="flex flex-col">
                <span className="font-medium text-[var(--orange)]">{title}</span>
                <span>{timeline}</span>
            </div>
            <ul className="flex flex-col gap-4 pt-6 pl-6 list-[square]">
                {experience.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default SectionBlockAbout