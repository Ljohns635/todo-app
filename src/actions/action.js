import { v4 as uuidv4 } from "uuid";
uuidv4();
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED_TODOS = "CLEAR_COMPLETED_TODOS";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    // payload: {
    userId: 1,
    id: uuidv4(),
    title: title,
    completed: false,
    // },
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const clearCompletedTodos = () => {
  return {
    type: CLEAR_COMPLETED_TODOS,
  };
};


