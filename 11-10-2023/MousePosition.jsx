import React, { useState } from "react";

function MousePosition() {
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const handleMouseMove = (event) => {
        setMouseX(event.clientX);
        setMouseY(event.clientY);
    };
    return (
        <div onMouseMove={handleMouseMove} style={{ height: 700, width: 1000, backgroundColor: 'lime' }}>
            <h1>Mouse Poisition : ({mouseX},{mouseY}) </h1>
        </div>
    );
}

export default MousePosition;