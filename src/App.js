import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import todosList from "./todos.json";
import TodoList from "./components/TodolList";
import Navigation from "./components/Navigation";
import { v4 as uuidv4 } from "uuid";

uuidv4();

const App = () => {
  const [todos, setTodos] = useState(todosList);

  // const addTodo = (evt) => {
  //   if (evt.key === "Enter") {
  //     let addedTodo = {
  //       userId: 1,
  //       id: uuidv4(),
  //       title: evt.target.value,
  //       completed: false,
  //     };

  //     setTodos([...todos, addedTodo]);
  //     evt.target.value = "";
  //   }
  // };

  // const handleEvent = (evt) => {
  //   if (evt.key === "Enter") {
  //     return reducer;
  //   }
  //   evt.target.value = "";
  // };

  // const onToggle = (id) => {
  //   let makingNewTodos = todos.map((todo) => {
  //     if (id === todo.id) {
  //       return { ...todo, completed: !todo.completed };
  //     }
  //     return { ...todo };
  //   });
  //   setTodos(makingNewTodos);
  // };

  // const onHandleDelete = (id) => {
  //   const deleteItem = todos.filter((todo) => todo.id !== id);
  //   setTodos(deleteItem);
  // };

  // const onHandleComplete = () => {
  //   const deleteAllItems = todos.filter((todo) => todo.completed !== true);
  //   setTodos(deleteAllItems);
  // };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          // onKeyDown={handleEvent}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
      {/* <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <TodoList
              {...props}
              todos={addTodo}
              onChange={onHandleDelete}
              onToggle={onToggle}
            />
          )}
        />

        <Route
          exact
          path="/active"
          render={(props) => (
            <TodoList
              {...props}
              todos={todos.filter((todo) => todo.completed === false)}
              onChange={onHandleDelete}
              onToggle={onToggle}
            />
          )}
        />
        <Route
          exact
          path="/completed"
          render={(props) => (
            <TodoList
              {...props}
              todos={todos.filter((todo) => todo.completed === true)}
              onChange={onHandleDelete}
              onToggle={onToggle}
            />
          )}
        />
      </Switch> */}

      <footer className="footer">
        <span className="todo-count">
          <strong>
            {/*{todos.filter((todo) => !todo.completed).length}*/}
          </strong>
          item(s) left
        </span>
        <Navigation />
        {/* <button onClick={onHandleComplete} className="clear-completed"> */}
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  );
};

export default App;
