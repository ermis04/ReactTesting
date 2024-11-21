import React, { Component } from "react";
import { ThemeContext } from "./App";

export default class myComponent extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {(mode) => (
                    <div>
                        <p style={{ color: mode ? "black" : "white" }}>
                            {mode ? "in light mode" : "in dark mode"}
                        </p>
                    </div>
                )}
            </ThemeContext.Consumer>
        );
    }
}
