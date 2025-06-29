/**
 * Tile Component
 * 
 * Displays a tile representing a technology or tool,
 * used in the tech stack section.
 * 
 * Params:
 * - src (string): Path to the logo/image.
 * - label (string): Name of the technology/tool.
 * 
 */
function Tile({ src, label }) {
    return (
        <div className="flex flex-col justify-center items-center gap-2 col-span-1 w-[100px] h-[100px]">
            <img 
                src={src ? src : "./src/assets/icons/noimage.svg"} 
                width="32px" 
                height="32px"
                loading="lazy"
                decoding="async"
                className="sm:size-[var(--size-tech-icons)]"
                />
            <p className="text-fluid-base text-nowrap">{label}</p>
        </div>
    )
}

export default Tile