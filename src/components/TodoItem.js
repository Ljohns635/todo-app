import React from "react";
import DeleteTodo from "../container/DeleteTodo";

const TodoItem = ({ id, onClick, completed, title }) => {
  // console.log(props);
  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onClick={onClick}
        />
        <label>{title}</label>
        <DeleteTodo id={id} />
      </div>
    </li>
  );
};


export default TodoItem;
