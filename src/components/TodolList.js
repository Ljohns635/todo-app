import React from "react";
import TodoItem from "./TodoItem";
const TodoList = (props) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            onToggle={props.onToggle}
            id={todo.id}
            delete={props.onChange}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
