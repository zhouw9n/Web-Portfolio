/**
 * Tag Component
 * 
 * Displays a styled label tag for each projects,
 * used to represent the stack/tools.
 * 
 * Props:
 * - label (string): The text to display inside the tag.
 * 
 */
function Tag({ label }) {
    return (
        <div className="px-[5px] border-[1px] border-[var(--white50)] rounded-[5px] w-fit h-fit text-[var(--white50)] text-fluid-xs">
            <span>{label}</span>
        </div>
    )
}

export default Tag