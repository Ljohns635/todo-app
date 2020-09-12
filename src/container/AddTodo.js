import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/action";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          onKeyDown={(evt) => {
            if (evt.key === "Enter") {
              console.log(input.value);
              if (!input.value.trim()) {
                return;
              }
              dispatch(addTodo(input.value));
              input.value = "";
            }
          }}
          ref={(evt) => (input = evt)}
          placeholder="What needs to be done?"
          autoFocus
        />
      </header>
    </section>
  );
};

export default connect()(AddTodo);
