import { useState, useEffect, useCallback } from "react";

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


    const calculateOffset = useCallback((date, timezoneOffset) => {
        const inputDate = new Date(date); 

        // Parse the timezoneOffset string (e.g., "+05:30" or "-08:00")
        const [sign, hours, minutes] = timezoneOffset.match(/([+-])(\d{2}):(\d{2})/).slice(1);
        const offsetInMinutes = (parseInt(hours, 10) * 60 + parseInt(minutes, 10)) * (sign === '+' ? 1 : -1);

        const systemOffset = inputDate.getTimezoneOffset();

        const adjustedTime = new Date(
            inputDate.getTime() - (offsetInMinutes - systemOffset) * 60 * 1000
        );

        return adjustedTime;
    }, []);

    return { timezone, calculateOffset };
};