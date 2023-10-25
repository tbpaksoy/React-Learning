import React, { createElement, useState } from "react";

function CheckWinCondition(content) {
    let check = [];
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) check.push(content[i][j][0]);
    for (let i = 0; i < 3; i++) for (let j = 0; j < 3; j++) check.push(content[j][i][0]);
    check.push(content[0][0][0]);
    check.push(content[1][1][0]);
    check.push(content[2][2][0]);

    check.push(content[2][0][0]);
    check.push(content[1][1][0]);
    check.push(content[0][2][0]);

    let result = " ";

    for (let i = 0; i < check.length; i += 3) {
        if (check[i][0].toString() === check[i + 1][0].toString() && check[i + 1][0].toString() === check[i + 2][0].toString()) {
            result = check[i][0];
            return result;
        }
    }
    return result;
}

function TicTacToe() {
    let [content, setContent] = useState([[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]);
    let [symbol, setSymbol] = useState("O");
    return (
        <div>
            {content.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((element, columnIndex) => (
                        <button onClick={() => {
                            if (element === " ") {
                                const newContent = [...content];
                                newContent[rowIndex][columnIndex] = symbol;
                                setContent(newContent);
                                if (symbol == "O") setSymbol("X");
                                else setSymbol("O");
                            }
                            let winner = CheckWinCondition(content);
                            if (winner !== " ") document.getElementById("winner").innerHTML = "The winner is " + winner;
                        }}>{element}</button>
                    ))}

                </div>

            ))

            }
            <div id="winner"></div>
        </div>
    );
}

export default TicTacToe;
