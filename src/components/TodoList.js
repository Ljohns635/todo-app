import React from "react"
import TodoItem from "../components/TodoItem"
export default function TodoList(props) {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <TodoItem
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
            key={todo.id}
          />
        ))}
      </ul>
    </section>
  );
}
