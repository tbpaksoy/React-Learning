import React from "react";
import './Resume.css'
function Summary({ name, surname }) {
    return <div className="summary">
        Hello, my name is {name} <b>{surname}</b>, I am from Antalya, Turkey and I am currently working on React.
        <div style={{ flexDirection: "row" }}>
            <LinkButton link={"https://github.com/tbpaksoy"} image={"https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"} />
            <LinkButton link={"https://tr.linkedin.com/in/tbpaksoy"} image={"https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"} />
        </div>
    </div>
}
function InfoBoxAtDown() {
    return <div style={{ width: "100vw", height: "20vh", alignSelf: "down", bottom: 100 }}></div>
}
function LinkButton({ link, image }) {
    return <a href={link} style={{ position: "relative", height: 150, width: 150 }}><img src={image} className="link-button"></img></a>

}
function Resume({ name, surname }) {
    return <div className="resume">
        <Summary name={name} surname={surname} />
    </div>
}



export default Resume;