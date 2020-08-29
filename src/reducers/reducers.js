import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETE_TODOS,
} from "react";

import todosList from "../todos.json";

const initialState = {
  todos: todosList,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo === !todo.action.payload.id) {
          return { ...state, completed: !state.completed };
        }
      });

    case DELETE_TODO:
      return state.filter((todo) => todo !== todo.action.payload.id);

    case CLEAR_COMPLETE_TODOS:
      return state.filter((todo) => todo.action.payload.completed !== true);
    default:
      return state;
  }
};

export default reducers;
