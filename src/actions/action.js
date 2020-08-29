import { v4 as uuidv4 } from "uuid";
uuidv4();
const ADD_TODO = "ADD_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO";
const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export default addTodo = () => {
  return {
    type: ADD_TODO,
    payload: {
      userId: 1,
      id: uuidv4(),
      title: evt.target.value,
      completed: false,
    },
  };
};

export default toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export default deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export default clearCompletedTodos = (completed) => {
  return {
    type: CLEAR_COMPLETED_TODOS,
    payload: completed,
  };
};
