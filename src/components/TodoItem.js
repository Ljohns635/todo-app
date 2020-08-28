import React from "react";

const TodoItem = (props) => {
  return (
    <li className={props.completed ? "completed" : ""}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={props.completed}
          onClick={(evt) => props.onToggle(props.id)}
        />
        <label>{props.title}</label>
        <button onClick={(evt) => props.delete(props.id)} className="destroy" />
      </div>
    </li>
  );
};

export default TodoItem;
