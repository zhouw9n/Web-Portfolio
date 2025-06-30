import { BUTTON_LABELS, BUTTON_TYPES } from "./buttons";
import iconArrowBlack from "../assets/icons/arrow_black.svg";
import iconArrowOrange from "../assets/icons/arrow_orange.svg";
import videoBingeBoxMobile from "../assets/videos/bingebox_mobile.mp4";
import videoBingeBoxTablet from "../assets/videos/bingebox_tablet.mp4";
import videoBingeBoxDesktop from "../assets/videos/bingebox_desktop.mp4";
import videoWeather2DayMobile from "../assets/videos/weather2day_mobile.mp4";
import videoWeather2DayTablet from "../assets/videos/weather2day_tablet.mp4";
import videoWeather2DayDesktop from "../assets/videos/weather2day_desktop.mp4";
import videoPortfolioMobile from "../assets/videos/portfolio_mobile.mp4";
import videoPortfolioTablet from "../assets/videos/portfolio_tablet.mp4";
import videoPortfolioDesktop from "../assets/videos/portfolio_desktop.mp4";
import videoShareadeskMobile from "../assets/videos/shareadesk_mobile.mp4";
import videoShareadeskTablet from "../assets/videos/shareadesk_tablet.mp4";
import videoShareadeskDesktop from "../assets/videos/shareadesk_desktop.mp4";

// Array of all project details.
// Centralized here for maintainability and scalability.
export const PROJECTS = [
    // PROJECT 1
    {
        id: "01",
        name: "BingeBox",
        type: "(Web App)",
        summary: "A web app that lets you discover movies and TV shows, keep track of your favorites, and view detailed information. It also provides AI-powered recommendations based on what you like.",
        description: "A sleek and interactive platform for exploring trending movies and TV shows, searching for titles, saving favorites, and viewing detailed information. Backed by a vector-search-enabled database, it delivers personalized AI-powered recommendations based on your favorite titles.",
        
        tags: [
            "HTML",
            "JavaScript",
            "Tailwind",
            "React",
            "Node.js",
            "Express.js",
            "API",
            "AstraDB",
            "Render"
        ],

        challenges: [
            "Setting up and connecting vector-search-enabled database to support AI-powered recommendations",
            "Coordinating multiple async API requests parallel",
            "Handling limitations like loading delays or API failures"
        ],

        highlights: [
            "Build a complete AI-powered recommendation feature using vector search",
            "Gained experience witht the introduction of React and TailwindCSS",
            "Built backend services to securely handle API requests and protect secrete keys"
        ],

        improvements: [
            "Performance optimization for better load times and UX",
            "Refactor components for better scalability and maintainability",
            "Implement caching strategies to minimize repeated API calls"
        ],

        buttons: [
            {
                label: BUTTON_LABELS.READ_MORE,
                buttonType: BUTTON_TYPES.INT,
                icon: iconArrowBlack,
                className: "gap-2 bg-[var(--orange)] w-[185px] text-[var(--black)]",
            },
            {   
                label: BUTTON_LABELS.DEMO,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://zhouw9n.github.io/BingeBox/",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[115px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.FIGMA,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://www.figma.com/design/xtGFbe2gH3gyRA4NBtTiP3/BingeBox?node-id=198-2&t=YMdiep94abxuCey4-1",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[131px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.GITHUB,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://github.com/zhouw9n/BingeBox",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[144px] text-[var(--orange)]"
            }
        ],

        videoMobile: videoBingeBoxMobile,
        videoTablet: videoBingeBoxTablet,
        videoDesktop: videoBingeBoxDesktop,
    },
    
    // PROJECT 2
    {
        id: "02",
        name: "Weather2Day",
        type: "(Web App)",
        summary: "A sleek weather app that shows real-time conditions for your current or searched location with a clean, user-friendly interface.",
        description: "A modern and responsive weather app that displays real-time weather conditions for your current location or any searched city. The app provides essential weather details such as temperature, weather conditions, and features an autocomplete search function for a smoother UX.",
        
        tags: [
            "HTML",
            "JavaScript",
            "CSS",
            "Node.js",
            "Express.js",
            "API",
            "Render"
        ],

        challenges: [
            "Handling and formatting raw API data into a clear, user-friendly format (e.g., weather codes, wind directions, UV index levels)"
        ],

        highlights: [
            "Integrated geolocation support for automatic weather detection based on user location (IP-Address)",
            "Implemented debounce function to reduce API calls and enhance performance",
            "Used localStorage to save previously searched locations for faster access"
        ],

        improvements: [
            "Extend features such as an hourly forecast, weather warnings, and support for unit switching",
            "Cache data to reduce API calls and improve loading times"
        ],

        buttons: [
            {
                label: BUTTON_LABELS.READ_MORE,
                buttonType: BUTTON_TYPES.INT,
                icon: iconArrowBlack,
                className: "gap-2 bg-[var(--orange)] w-[185px] text-[var(--black)]",
            },
            {   
                label: BUTTON_LABELS.DEMO,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://zhouw9n.github.io/Weather2Day/",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[115px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.FIGMA,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://www.figma.com/design/ac69o6xx2ua5V7ebkzDi3Q/Weather2Day?node-id=0-1&t=YMdiep94abxuCey4-1",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[131px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.GITHUB,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://github.com/zhouw9n/Weather2Day",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[144px] text-[var(--orange)]"
            }
        ],

        videoMobile: videoWeather2DayMobile,
        videoTablet: videoWeather2DayTablet,
        videoDesktop: videoWeather2DayDesktop,
    },

    // PROJECT 3
    {
        id: "04",
        name: "shareadesk",
        type: "(Web App)",
        summary: "A desk sharing management app which lets you search, book and manage a work space, built as part of my university web development course.",
        description: "Built as part of my semester assignment in web development this web app simulates a platform to search, book and manage shared desks in a modern workspace. Further features include the integration of interactive maps, calender file to import bookings and currency exchange.",
        
        tags: [
            "HTML",
            "JavaScript",
            "CSS",
            "Node.js",
            "Express.js",
            "API",
            "Render"
        ],

        challenges: [
            "First-time experience working with REST APIs",
            "Ensuring responsiveness across different screen sizes and devices"
        ],

        highlights: [
            "Built a custom routing system using vanilla JavaScript",
            "Implemented a dynamic filter feature without relying on external libraries",
            "Extensive DOM manipulations to dynamically add and remove content"
        ],
        
        improvements: [
            "Refactor the codebase into reusable components to enhance maintainability, scalability, and code clarity",
            "Implement user authentication and backend integration for persistent user data management"
        ],

        buttons: [
            {
                label: BUTTON_LABELS.READ_MORE,
                buttonType: BUTTON_TYPES.INT,
                icon: iconArrowBlack,
                className: "gap-2 bg-[var(--orange)] w-[185px] text-[var(--black)]",
            },
            {   
                label: BUTTON_LABELS.DEMO,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://zhouw9n.github.io/shareadesk/",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[115px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.FIGMA,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://www.figma.com/design/vY69a0S5NiKHjVriDkd82Z/Share-a-Desk?node-id=0-1&t=YMdiep94abxuCey4-1",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[131px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.GITHUB,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://github.com/zhouw9n/shareadesk",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[144px] text-[var(--orange)]"
            }
        ],

        videoMobile: videoShareadeskMobile,
        videoTablet: videoShareadeskTablet,
        videoDesktop: videoShareadeskDesktop,
    },

    // PROJECT 4
    {
        id: "03",
        name: "Web Portfolio",
        type: "(Website)",
        summary: "A responsive web portfolio built to showcase my projects, design approach, and technical background, giving a clear view of who I am and what I create.",
        description: "A personal portfolio created to showcase my frontend projects, technical skills, and background. Built with a focus on clean layout, responsive structure, and smooth interactions to highlight my eye for UI/UX and deliver a professional yet personal first impression.",
        
        tags: [
            "HTML",
            "JavaScript",
            "Tailwind",
            "React",
            "Motion",
            "Netlify"
        ],

        challenges: [
            "Designing an interface that balances personality with clarity",
            "Structuring reusable and responsive React components",
            "Keeping the site performant while using animations and transitions"
        ],

        highlights: [
            "Showcases design sensibilities and responsive layout techniques",
            "Built from scratch using React and TailwindCSS",
            "Uses Motion for smooth transitions and animations",
        ],

        improvements: [
            "Implement a CMS or headless setup for easier content updates",
            "Dark mode toggle for better accessibility and preference",
            "Blog section to better track progress"
        ],

        buttons: [
            {
                label: BUTTON_LABELS.READ_MORE,
                buttonType: BUTTON_TYPES.INT,
                icon: iconArrowBlack,
                className: "gap-2 bg-[var(--orange)] w-[185px] text-[var(--black)]",
            },
            {
                label: BUTTON_LABELS.FIGMA,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://www.figma.com/design/QirofkvlufSHTB0egL8Fl7/Ruwen-Chiew-Portfolio?node-id=139-2&t=xO6Uz8j2EgSqQZNy-1",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[131px] text-[var(--orange)]"
            },
            {
                label: BUTTON_LABELS.GITHUB,
                buttonType: BUTTON_TYPES.EXT,
                href: "https://github.com/zhouw9n/web-portfolio",
                icon: iconArrowOrange,
                className: "gap-2 border-[1px] border-[var(--orange)] rounded-[5px] w-[144px] text-[var(--orange)]"
            }
        ],

        videoMobile: videoPortfolioMobile,
        videoTablet: videoPortfolioTablet,
        videoDesktop: videoPortfolioDesktop,
    }
]