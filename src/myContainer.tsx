import { useContext } from "react";
import { ThemeContext } from "./App";

export default function MyComponent() {
    const mode = useContext(ThemeContext);

    return (
        <div
            style={{
                height: "50%",
                width: "50%",
            }}
        >
            <p style={{ color: mode ? "black" : "white" }}>
                {mode ? "in light mode" : "in dark mode"}
            </p>
        </div>
    );
}
