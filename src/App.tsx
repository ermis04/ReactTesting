import React, { useState } from "react";
import "./App.css";
import Container0 from "./myContainer";
import Container1 from "./myContainer1";

export const ThemeContext = React.createContext<boolean>(true);

function App() {
    const [mode, setMode] = useState(true);

    const changeMode = () => setMode((mode) => !mode);

    return (
        <ThemeContext.Provider value={mode}>
            <section
                style={{
                    backgroundColor: mode ? "white" : "black",
                }}
            >
                <button onClick={changeMode}>
                    {mode ? "set Dark theme" : "set Light Theme"}
                </button>
                <Container0 />
                <Container1 />
            </section>
        </ThemeContext.Provider>
    );
}

export default App;
