import React from "react";

function TodoList(props) {
    const todos = props.todos.map((todo, index) => (<li key={index}>{todo}</li>));

    return <ul>{todos}</ul>
}

export default TodoList;