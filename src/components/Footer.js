import React from "react";
import { clearCompletedTodos } from "../actions/action";
import ClearCompletedTodos from "../container/ClearCompletedTodos";
import Navigation from "./Navigation"

const Footer = (id) => (
  <section>
    <footer className="footer">
      <span className="todo-count">
        <strong>{/*{todos.filter((todo) => !todo.completed).length}*/}</strong>
        item(s) left
      </span>
      <Navigation />
      <ClearCompletedTodos
        onClick={clearCompletedTodos(id)}
        className="clear-completed"
      >
        Clear completed
      </ClearCompletedTodos>
    </footer>
  </section>
);

export default Footer;
