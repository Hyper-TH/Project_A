import { useState, useEffect } from "react";

export const useTimezone = () => {
    const [timezone, setTimezone] = useState('');

    useEffect(() => {
        const now = new Date();
        const offset = now.getTimezoneOffset(); // Timezone offset in minutes
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        const formattedOffset = `${offset <= 0 ? '+' : '-'}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;


        setTimezone(formattedOffset);
    }, []);

    return { timezone };
};