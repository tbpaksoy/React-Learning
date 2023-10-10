import React, { Component } from "react";

class ShapeCreator extends Component {
    constructor() {
        super();
        this.state = {
            color: "",
            shape: "",
        };
    }

    handleShapeChange(event) {
        this.setState({ shape: event.target.value });
    }

    handleColorChange(event) {
        this.setState({ color: event.target.value });
    }

    getShape() {
        const { shape, color } = this.state;
        if (shape && color) {
            if (shape === "Rectangle") {
                return <div style={{ backgroundColor: color, height: 50, width: 50 }}></div>;
            } else if (shape === "Circle") {
                return <svg>
                    <circle fill={color} radius={25}></circle>
                </svg>;
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <select onChange={this.handleShapeChange.bind(this)}>
                    <option value={"Rectangle"}>Rectangle</option>
                    <option value={"Circle"}>Circle</option>
                </select>
                <select onChange={this.handleColorChange.bind(this)}>
                    <option value={"red"}>Red</option>
                    <option value={"green"}>Green</option>
                    <option value={"lime"}>Lime</option>
                </select>
                {this.getShape()}
            </div>
        );
    }
}

export default ShapeCreator;
