import { BUTTON_LABELS } from "../data/buttons"
import Button from "./Button"
import Tag from "./Tag";

/**
 * PreviewOverlay Component
 * 
 * Displays an overlay for a project preview. 
 * Shows the project name, type and a brief summary, and 
 * renders primary and secondary action buttons.
 * 
 * Props:
 * - id (string): Unique identifier for the project (used for anchor linking)
 * - name (string): Project name/title.
 * - type (string): Project category or type.
 * - summary (string): Project short summary.
 * - buttons (Array): Array of button objects containing properties like label, type, href, etc., to render appropriate buttons.
 */
function PreviewOverlay({ id, name, type, tags, summary, buttons }) {
    // Extract primary button - Read More
    const primaryButton = buttons.filter(
        button => button.label === BUTTON_LABELS.READ_MORE
    );

    // Extract secondary buttons - Demo & Github
    const secondaryButtons = buttons.filter(
        button => button.label !== BUTTON_LABELS.READ_MORE && button.label !== BUTTON_LABELS.FIGMA
    );

    return (
        <>
            {/* Title, Type, Summary */}
            <h3 className="uppercase">{name}</h3>
            <p className="text-fluid-base">{type}</p>

            <div className="flex flex-wrap gap-2 mt-2 md:max-w-[50%] lg:max-w-[50%]">
                {tags.map((tag, index) => (
                    <Tag key={index} label={tag}/>
                ))}
            </div>

            <p className="pt-6 pb-5 md:max-w-[85%] lg:max-w-[50%] text-fluid-base">{summary}</p>

            {/* Button Container */}
            <div className="flex flex-col gap-5">
                <Button 
                    label={primaryButton[0].label}
                    buttonType={primaryButton[0].buttonType}
                    href={`/projects#${id}`}
                    icon={primaryButton[0].icon}
                    className={primaryButton[0].className}
                />
                <div className="flex gap-5">
                    {secondaryButtons.map((button, index) => (
                        <Button 
                            label={button.label}
                            buttonType={button.buttonType}
                            href={button.href}
                            icon={button.icon}
                            className={button.className}
                            key={index}
                        />
                    ))}

                </div>
            </div>
        </>
    )
}

export default PreviewOverlay