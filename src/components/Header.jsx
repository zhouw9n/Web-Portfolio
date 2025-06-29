/**
 * Header Component
 * 
 * Renders page header with a large heading.
 * This component is used on the About and Projects pages.
 * 
 * Props:
 * - header (string): The text to be displayed as the main heading.
 */
function Header({ header }) {
    return (
        <div className="top-[-6dvh] left-[-4dvw] -z-50 relative flex flex-col justify-center items-center bg-[var(--black)] pb-[6dvh] w-[calc(100%+8dvw)] text-[var(--white)]">
            <div className="flex justify-center items-end h-[var(--h-fluid-header)]">
                <h1 className="uppercase">{header}</h1>
            </div>
        </div>
    )
}

export default Header