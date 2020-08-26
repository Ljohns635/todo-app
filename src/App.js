import React, { Component } from "react";
import todosList from "./todos.json";
import { v4 as uuidv4 } from "uuid";
uuidv4();
//recieved help Tim La
//recieved help from Suri
//Worked in a group with Eleanor Hall and Martin Villa
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
            <strong>0</strong> item(s) left
          </span>
          <button onClick={this.onHandleComplete} className="clear-completed">
            Clear completed
          </button>
        </footer>
      </section>
    );
  }
}

class TodoItem extends Component {
  render() {
    return (
      <li className={this.props.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={this.props.completed}
            onClick={(evt) => this.props.onToggle(this.props.id)}
          />
          <label>{this.props.title}</label>
          <button
            onClick={(evt) => this.props.delete(this.props.id)}
            className="destroy"
          />
        </div>
      </li>
    );
  }
}

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

export default App;
