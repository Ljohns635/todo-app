import React from "react";
import { connect } from "react-redux";
import { clearCompletedTodos } from "../actions/action";

const ClearCompletedTodos = ({ clearCompletedTodos, children }) => {
  return (
    <button onClick={clearCompletedTodos} className="clear-completed">
      {children}
    </button>
  );
};

const mapDispatchToProps = (dispatch, completeProps) => {
  return {
    clearCompletedTodos: () => {
      dispatch(clearCompletedTodos(completeProps.completed));
    },
  };
};

export default connect(null, mapDispatchToProps)(ClearCompletedTodos);
