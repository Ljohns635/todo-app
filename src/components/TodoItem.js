import React from "react";
import { connect } from "react-redux";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  clearCompletedTodos,
} from "../actions/action";
const TodoItem = (props) => {
  const { list } = props;
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
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: () => {
      dispatch(addTodo());
    },

    toggleTodo: () => {
      dispatch(toggleTodo());
    },

    deleteTodo: () => {
      dispatch(deleteTodo());
    },

    clearCompletedTodos: () => {
      dispatch(clearCompletedTodos());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
