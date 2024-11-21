import { useTheme } from '../../hooks/theme.hook';

export default function MyContainer1() {
    const { dark } = useTheme();

    return (
        <div>
            <p style={{ color: !dark  ? "black" : "white" }}>
                {!dark ? "in light mode" : "in dark mode"}
            </p>
        </div>
    )
}
