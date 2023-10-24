import React, { useRef, useState } from "react";

function MathQuiz({ props }) {
    let [color, setColor] = useState(' ');
    const answer = useRef();
    let [showResult, setShowResult] = useState(' ');
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
        <input type="text" ref={answer} />
        <input type="submit" onClick={() => {
            if (answer.current.value === result.toString()) setColor("green");
            else color = setColor("red");
            setShowResult(result.toString());
        }} />
        <div> {showResult} </div>
        <div style={{ width: 50, height: 50, backgroundColor: color }}></div>
    </div >
}
export default MathQuiz;

export const operators = ["add", "subtract", "multipy", "divide"];