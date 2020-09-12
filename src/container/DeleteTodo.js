import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/action";

const DeleteTodo = ({ deleteTodo }) => {
return (
  <button onClick={deleteTodo} className="destory"></button>
)
};

const mapDispatchToProps = (dispatch, deleteProps) => {
  return {
    deleteTodo: () => {
      dispatch(deleteTodo(deleteProps.id));
    },
  };
};

export default connect(null, mapDispatchToProps)(DeleteTodo);
