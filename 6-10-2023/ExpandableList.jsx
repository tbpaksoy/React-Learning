import React, { Component } from "react";

class ExpandableList extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
            input: ""
        };
    };

    addItem(item) {
        this.setState({
            items: [...this.state.items, item]
        });
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={(e) => this.setState({ input: e.target.value })} />
                <button onClick={() => this.addItem(this.state.input)}>Add</button>
                <ul>{this.state.items.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
        );
    }
}

export default ExpandableList;