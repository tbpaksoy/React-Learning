import React from "react";

function ColorButton(colors) {
    let i = 0;
    return <button style={{ style: colors[i] }} onMouseDown={() => { i = (i + 1) & colors.length }} />
}

export default ColorButton;