import React, { useState } from "react";

function HeaderDiv() {
    let [values, setValues] = useState([]);

    return <div style={{ width: "100vw", height: "15vh", backgroundColor: "#191716", color: "#CEFDFF" }} onMouseEnter=
        {() => {
            let newValues = ["A", "B", "C"];
            setValues(newValues);
        }
        }
        onMouseLeave={() => { setValues([]) }}
    >
        {values.map(value => (<div style={{ fontSize: "3.5vh" }}>{value}</div>))}
    </div >;
}

export default HeaderDiv;