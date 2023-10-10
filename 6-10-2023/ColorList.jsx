import React, { Component } from "react";

class ColorList extends Component {
    constructor() {
        super();
        this.state =
        {
            colors: [],
            input: ""
        };
    };

    addColor(color) {
        this.setState(
            {
                colors: [...this.state.colors, this.state.input]
            });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })}></input>
                <button onClick={() => this.addColor(this.state.color)}>Add Color</button>
                {this.state.colors.map(color => <div style={{ height: 50, width: 50, background: color }}></div>)}
            </div >
        );
    }
}

export default ColorList;