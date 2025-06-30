import iconMenuBlack from "../assets/icons/menu_black.svg";
import iconMenuWhite from "../assets/icons/menu_white.svg";
import iconCloseBlack from "../assets/icons/close_black.svg";
import iconCloseWhite from "../assets/icons/close_white.svg";
import iconArrowWhite from "../assets/icons/arrow_white.svg";
import iconArrowBlack from "../assets/icons/arrow_black.svg";

// Centralized configuration for themes when switching pages.
// Changes affect navigation bar on desktop as well as on mobile.
export const THEMES = {
    light: {
        desktop: {
            textColorLinks: "text-[var(--black)]",
            textColorButton: "text-[var(--white)]",
            iconButton: iconArrowWhite,
            bgColorButton: "bg-[var(--black)]"
        },
        mobile: {
            textColorLinks: "text-[var(--white)]",
            textColorButton: "text-[var(--black)]",
            iconButton: iconArrowBlack,
            bgColorButton: "bg-[var(--white)]",
            menuIcon: iconMenuBlack,
            closeIcon: iconCloseWhite,
            bgColor: "bg-[var(--black)]"
        }
    },
    dark: {
        desktop: {
            textColorLinks: "text-[var(--white)]",
            textColorButton: "text-[var(--black)]",
            iconButton: iconArrowBlack,
            bgColorButton: "bg-[var(--white)]",
            theme: "dark"
        },
        mobile: {
            textColorLinks: "text-[var(--black)]",
            textColorButton: "text-[var(--white)]",
            iconButton: iconArrowWhite,
            bgColorButton: "bg-[var(--black)]",
            menuIcon: iconMenuWhite,
            closeIcon: iconCloseBlack,
            bgColor: "bg-[var(--white)]"
        }
    }
}