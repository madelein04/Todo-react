import React from "react";
import { TodoContext } from "../TodoContext";


function TodoCounter() {

    const { totalTodos, completedTodos } = React.useContext(TodoContext);
    let title = ` Has complentado ${completedTodos} de ${totalTodos} TODOS`
    return (
        <h2 className="TodoCounter">{title}</h2>
    )
};

export { TodoCounter };