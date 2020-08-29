import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
