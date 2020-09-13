import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { Switch, Route, NavLink} from "react-router-dom"
import { connect } from "react-redux"
import { addTodo, clearCompletedTodos } from "./actions/action";

//watched Kano and Jacobs Video and coded along
function App(props) {
 

  const [inputText, setInputText] = useState("");

  const handleAddTodo = (evt) => {
    if (evt.which === 13) {
      props.addTodo(inputText)
      setInputText("");
    }
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          onKeyDown={(evt) => handleAddTodo(evt)}
          onChange={(evt) => setInputText(evt.target.value)}
          className="new-todo"
          value={inputText}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      <Switch>
        <Route exact path="/">
      <TodoList
        todos={Object.values(props.todos)}
      />
      </Route>
      <Route path="/active">
        <TodoList todos={Object.values(props.todos).filter(todo => 
          !todo.completed
        )}
        />
      </Route>
      <Route path="/completed">
      <TodoList todos={Object.values(props.todos).filter(todo => 
          todo.completed
        )}
        />
      </Route>
      </Switch>
      <footer className="footer">
        <span className="todo-count">
      <strong>{Object.values(props.todos).filter(todo => 
          !todo.completed
        ).length}</strong> item(s) left
        </span>
        <ul className="filters">
          <li>
            <NavLink exact to="/" activeClassName="selected">All</NavLink>
          </li>
          <li>
            <NavLink to="/active">Active</NavLink>
          </li>
          <li>
            <NavLink to="/completed">Completed</NavLink>
          </li>
        </ul>
        <button
          className="clear-completed"
          onClick={() => props.clearCompletedTodos()}
        >
          Clear completed
        </button>
      </footer>
    </section>
  );
}

const mapStateToProps = (state) => ({
todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: inputText => dispatch(addTodo(inputText)),
  clearCompletedTodos: () => dispatch(clearCompletedTodos())
})
export default connect(mapStateToProps, mapDispatchToProps)(App)

