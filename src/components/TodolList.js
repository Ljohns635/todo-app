import React from "react";
import TodoItem from "./TodoItem";
import { connect } from "react-redux";

const TodoList = ({ list }) => {
  // console.log(li);
  return (
    <section className="main">
      <ul className="todo-list">
        {list.todos.map((li) => (
          <TodoItem
            key={li.id}
            title={li.title}
            onToggle={li.toggleTodo}
            id={li.id}
            delete={li.deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

const mapStateToProps = (state) => ({
  list: state.list,
});

export default connect(mapStateToProps)(TodoList);
