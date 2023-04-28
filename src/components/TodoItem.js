import React from "react";


function TodoItem({ completed, onComplete, onDelete, text }) {

    return (
        <li className="TodoItem" >
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>
                <span>&#10003;</span>
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>{text}</p>
            <span className="Icon Icon-delete" onClick={onDelete}>
                X
            </span>
        </li>
    );
}
export { TodoItem };
