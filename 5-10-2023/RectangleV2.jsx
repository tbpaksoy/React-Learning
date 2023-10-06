import React from "react";

function RectangleV2({ width, height, unitType, color, text }) {
    const w = width.toString() + unitType;
    const h = height.toString() + unitType;
    const t = text.toString();
    return <div style={{ w, h, backgroundColor: color }}>{t}</div>;
}

export default RectangleV2;