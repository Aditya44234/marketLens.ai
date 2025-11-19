

import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();


export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    )


    useEffect(() => {
        document.documentElement.classList.remove('light', 'dark', 'navy');
        document.documentElement.classList.add(theme === 'navy' ? 'dark' : theme);
        localStorage.setItem('theme', theme);
    }, [theme]);


    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'navy' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}


export function useTheme() {
    return useContext(ThemeContext);
}