import React, { Component } from "react";
import { Route } from "react-router-dom";
import todosList from "./todos.json";
import TodoList from "./components/TodolList";
import Navigation from "./components/Navigation";
import { v4 as uuidv4 } from "uuid";
// import TodoItem from "./components/TodoItem";

uuidv4();

//! This is a warning
//* This is Caution
//? This is a question
//TODO : What needs to be done

class App extends Component {
  state = {
    todos: todosList,
  };

  addTodo = (evt) => {
    if (evt.key === "Enter") {
      const addedTodo = {
        userId: 1,
        //id:Math.floor(Math.random() * 30)
        id: uuidv4(),
        title: evt.target.value,
        completed: false,
      };

      this.setState({
        todos: [...this.state.todos, addedTodo],
      });
      evt.target.value = "";
    }
  };
  onToggle = (id) => {
    let makingNewTodos = this.state.todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return { ...todo };
    });
    this.setState({
      todos: makingNewTodos,
    });
  };

  onHandleDelete = (id) => {
    const deleteItem = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos: deleteItem });
  };

  onHandleComplete = () => {
    const deleteAllItems = this.state.todos.filter(
      (todo) => todo.completed !== true
    );
    this.setState({ todos: deleteAllItems });
  };

  render() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input
            className="new-todo"
            // name="title"
            // value={this.state.text}
            onKeyDown={this.addTodo}
            placeholder="What needs to be done?"
            autoFocus
          />
        </header>
        <TodoList
          todos={this.state.todos}
          onChange={this.onHandleDelete}
          onToggle={this.onToggle}
        />
        <footer className="footer">
          <span className="todo-count">
            <strong>
              {this.state.todos.filter((todo) => !todo.complete).length}
            </strong>
            item(s) left
          </span>
          <Navigation />

          <button onClick={this.onHandleComplete} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

export default App;
