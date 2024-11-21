import { useTheme } from "../../hooks/theme.hook";

export default function MyContainer() {
    const { dark } = useTheme();

    return (
        <div
            style={{
                height: "50%",
                width: "50%",
            }}
        >
            <p style={{ color: !dark ? "black" : "white" }}>
                {!dark ? "in light mode" : "in dark mode"}
            </p>
        </div>
    );
}
