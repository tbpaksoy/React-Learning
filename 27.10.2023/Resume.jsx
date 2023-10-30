import React from "react";
import './Resume.css'
function Summary({ name, surname }) {
    return <div className="summary">
        Hello, my name is {name} <b>{surname}</b>, I am from Antalya, Turkey and I am currently working on React.
    </div>
}
function InfoBoxAtDown() {
    return <div style={{ width: "100vw", height: "20vh", alignSelf: "down", bottom: 100 }}></div>
}
function Resume({ name, surname }) {
    return <div className="resume">
        <Summary name={name} surname={surname} />
    </div>
}



export default Resume;