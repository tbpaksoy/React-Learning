import React from "react";
import './Resume.css'
function Summary({ name, surname }) {
    return <div className="summary">
        Hello, my name is {name} <b>{surname}</b>, I am from Antalya, Turkey and I am currently working on React.
        <LinkButton />
    </div>
}
function InfoBoxAtDown() {
    return <div style={{ width: "100vw", height: "20vh", alignSelf: "down", bottom: 100 }}></div>
}
function LinkButton({ link, image }) {
    return <a href="https://github.com/tbpaksoy" style={{ position: "relative" }}><img src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" className="link-button"></img></a>

}
function Resume({ name, surname }) {
    return <div className="resume">
        <Summary name={name} surname={surname} />
    </div>
}



export default Resume;