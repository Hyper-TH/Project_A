import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useTimezone as useTimezoneHook } from "../hooks/useTimezone";

const Timezone = createContext();

export const TimezoneProvider = ({ children }) => {
    const { timezone, calculateOffset } = useTimezoneHook();

    return (
        <TimezoneProvider.Provider value={{ timezone, calculateOffset }}>
            {children}
        </TimezoneProvider.Provider>
    )
}

TimezoneProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export const useTimezone = () => useContext(Timezone);