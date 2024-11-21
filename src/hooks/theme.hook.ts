import { useContext } from "react";
import { ThemeContext } from "../contexts/theme.context";


export const useTheme = () => {
    const {dark, toggle} = useContext(ThemeContext);

    return {dark, toggle};
}