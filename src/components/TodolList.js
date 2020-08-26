import React, { Component } from "react";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              onToggle={this.props.onToggle}
              id={todo.id}
              delete={this.props.onChange}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default TodoList;
