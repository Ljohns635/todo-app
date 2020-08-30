import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../actions/action";

const TodoList = (props) => {
  const { list } = props;
  console.log(props);
  return (
    <section className="main">
      <ul className="todo-list">
        {list.todos.map((list) => (
          <TodoItem
            key={list.id}
            title={list.title}
            onToggle={list.toggleTodo}
            id={list.id}
            delete={list.deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};
//? reference https://redux.js.org/basics/usage-with-react
const mapStateToProps = (state) => {
  console.log(state);
  return {
    list: state.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (title) => {
      dispatch(addTodo(title));
    },

    toggleTodo: (id) => {
      dispatch(toggleTodo(id));
    },

    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
