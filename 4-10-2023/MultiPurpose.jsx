import React from "react";

function MultiPurpose({ index }) {
    const modules = [<div>Test</div>, <div>Tahsin</div>, <div>Fırat</div>, <div>Akdeniz</div>];
    if (index == null) return (modules);
    else return (modules[index]);
}
export default MultiPurpose;