import { useEffect, useState } from "react";

/**
 * Clock Component
 * 
 * Displays the local time of Europe/Zurich, and updates every second.
 */
function Clock() {
    const [localTime, setLocalTime] = useState("");
    
    // Intl.DateTimeFormat options for formatting time
    const options = {
        timeZone: "Europe/Zurich",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }

    useEffect(() => {
        function updateTime() {
            const time = new Date().toLocaleString("de-CH", options);
            setLocalTime(time)
        }

        updateTime();
        const interval = setInterval(updateTime, 1000);
        // Cleanup function if removed or unmounted
        return () => clearInterval(interval);
        
    },[])
    
    return (
        <div className="font-doto">
            {localTime}
        </div>
    )
}

export default Clock