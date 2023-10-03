import React, { Component } from "react";

class ToggleMessage extends Component {
    constructor(props) {
        super(this);
        this.state = { showMessage: false };
    }
    toggleMessage() {
        this.setState({ showMessage: !this.state.showMessage });
    }
    render() {
        return (<div>
            <button onClick={() => this.toggleMessage()}>Toggle Message</button>
            {this.state.showMessage && <p>Hello, World!</p>}
        </div>);
    }
}