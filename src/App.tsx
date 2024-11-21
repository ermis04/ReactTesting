import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme.context";
import HomePage from "./pages/HomePage";


function App() {
    const [mode, setMode] = useState(true);

    const changeMode = () => setMode((mode) => !mode);

    return (
        <ThemeProvider>
            <HomePage />
        </ThemeProvider>
    );
}

export default App;
