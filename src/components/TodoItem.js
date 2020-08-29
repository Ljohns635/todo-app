import React from "react";
import { connect } from "react-redux";
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

const mapStateToProps = (state) => {
  return {
    todo: state.list,
  };
};

export default connect(mapStateToProps)(TodoItem);
