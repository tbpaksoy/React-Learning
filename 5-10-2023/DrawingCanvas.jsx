import React, { Component } from "react";

class DrawingCanvas extends Component {
    componentDidMount() {

    }
    drawTirangle() {
        const canvas = this.canvas;
        const ctx = canvas.getContext('2');

        const xy1 = 7;
        const xy2 = 33;
        const xy3 = 80;

        ctx.fillStyle = 'red';

        ctx.beginPath();

        ctx.moveTo(xy1, xy1);
        ctx.lineTo(xy2, xy2);
        ctx.lineTo(xy3, xy3);
        ctx.closePath();
        ctx.fill();
    }
    render() {
        return (
            <canvas ref="canvas" width={200} height={200}></canvas>
        );
    }
}
export default DrawingCanvas;