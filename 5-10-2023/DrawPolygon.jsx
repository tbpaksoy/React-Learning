import React from "react";

function DrawPolygon(points, color) {
    return <svg width={100} height={100}>
        <polygon points={points} fill={color} />
    </svg >
}

export default DrawPolygon;