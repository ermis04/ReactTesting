import {createContext, useState} from 'react';

type ThemeContextType = {
    dark: boolean;
    toggle: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [dark, setDark] = useState<boolean>(false);

    const toggle = () => setDark((prev) => !prev);

    return (
        <ThemeContext.Provider value={{dark, toggle}}>
            {children}
        </ThemeContext.Provider>
    );
} 
