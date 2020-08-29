import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions/action";

const TodoList = (props) => {
  console.log(props);
  return (
    <section className="main">
      <ul className="todo-list">
        {/* {props.list.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            onToggle={props.toggleTodo}
            id={todo.id}
            delete={props.deleteTodo}
          />
        ))} */}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    todo: state.list,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
