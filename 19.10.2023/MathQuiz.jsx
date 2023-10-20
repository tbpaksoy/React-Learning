import React from "react";

function MathQuiz({ props }) {
    let result = 0;
    let os;
    switch (props.operator) {
        case operators[0]:
            result = props.first + props.second;
            os = "+";
            break;
        case operators[1]:
            result = props.first - props.second;
            os = "-";
            break;
        case operators[2]:
            result = props.first * props.second;
            os = "*";
            break;
        case operators[3]:
            result = props.first / props.second;
            os = "/";
            break;
    }
    return <div>
        <div> {props.first} {os} {props.second} </div>
        <input type="text" id="resultTxt" />
        <input type="submit" onClick={() => {
            let got = document.getElementById("resultTxt").value;
            if (got === result.toString()) {
                document.getElementById("resultNot").style.backgroundColor = "green";
            }
            else {
                document.getElementById("resultNot").style.backgroundColor = "red";
            }
            document.getElementById("actual").innerHTML = result;
        }} />
        <div id="actual"> </div>
        <div style={{ width: 50, height: 50 }} id="resultNot"></div>
    </div >
}

export default MathQuiz;

export const operators = ["add", "subtract", "multipy", "divide"];