import React from "react";

function MultipleGreeting(name) {
    return ([<div> Merhaba, {name} </div>, <div> Hello, {name} </div>], <div>Hallo, {name}</div>);
}

export default MultipleGreeting;