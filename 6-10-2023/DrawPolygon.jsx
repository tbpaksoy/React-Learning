import React from "react";

function DrawPolygon({ points, color }) {
    let string = "";
    for (let e in points) {
        string += points[e].toString();
        if (e % 2 == 0) string += ",";
        else string += " ";
    }
    string = string.slice(0, -1);
    return (<svg height="500" width="500">
        <polygon points={string} style={{ fill: color }} />
    </svg>)
        ;
}

export default DrawPolygon;