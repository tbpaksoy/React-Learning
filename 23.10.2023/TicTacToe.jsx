import React from "react";

function TicTacToe() {
    let content = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    let symbol = "O";
    return (
        <div>
            {content.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((element, coulmnIndex) => (
                        <button id={rowIndex.toString() + ":" + coulmnIndex.toString()} onClick={() => {
                            if (document.getElementById(rowIndex.toString() + ":" + coulmnIndex.toString()).innerHTML == " ") {
                                document.getElementById(rowIndex.toString() + ":" + coulmnIndex.toString()).innerHTML = symbol;
                                if (symbol == "O") symbol = "X";
                                else symbol = "O";
                            }
                        }}>{element}</button>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TicTacToe;
