import PreviewOverlay from "./PreviewOverlay";


/**
 * ProjectPreview Component
 * 
 * Renders a responsive project preview using a video background and an overlay. 
 * Displays different video resolutions based on screen size (mobile, tablet, desktop),
 * and overlay using the PreviewOverlay component.
 * 
 * Props:
 * - project (Object): An object containing project data.
 */
function ProjectPreview({ project }) {

    return(
        <div className="md:col-span-12">
            <div className="flex justify-center my-5 max-h-[95dvh] overflow-hidden">
                {/* Preview video (small devices) */}
                
                <div className="sm:hidden relative">
                    <video
                        src={project.videoMobile}
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="auto"
                        width="404"
                        height="876"
                        className="rounded-[5px] w-full h-auto object-contain"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center bg-[var(--black85)] backdrop-blur-none hover:backdrop-blur-[2px] px-2 rounded-[5px] transition-all duration-300 ease-in">
                        <PreviewOverlay 
                            id={project.id}
                            name={project.name} 
                            type={project.type} 
                            tags={project.tags}
                            summary={project.summary} 
                            buttons={project.buttons}
                        />
                    </div>
                </div>
                {/* Preview video (medium devices) */}
                <div className="hidden lg:hidden sm:block relative">
                    <video 
                        src={project.videoTablet}
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="auto"
                        width="758"
                        height="866"
                        className="rounded-[5px] w-full h-auto object-contain"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center bg-[var(--black85)] backdrop-blur-none hover:backdrop-blur-[2px] px-4 rounded-[5px] transition-all duration-300 ease-in">
                        <PreviewOverlay 
                            id={project.id}
                            name={project.name} 
                            type={project.type}
                            tags={project.tags} 
                            summary={project.summary} 
                            buttons={project.buttons}
                        />
                    </div>
                </div>
                {/* Preview video (large devices) */}
                <div className="hidden lg:block relative">
                    <video 
                        src={project.videoDesktop}
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="auto"
                        width="1920"
                        height="956"
                        className="rounded-[5px] w-full h-auto object-contain"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-center bg-[var(--black85)] backdrop-blur-none hover:backdrop-blur-[2px] px-8 rounded-[5px] transition-all duration-300 ease-in">
                        <PreviewOverlay
                            id={project.id} 
                            name={project.name} 
                            type={project.type}
                            tags={project.tags} 
                            summary={project.summary} 
                            buttons={project.buttons} 
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectPreview