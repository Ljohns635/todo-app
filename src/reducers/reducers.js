import {
  ADD_TODO,
  TOGGLE_TODO,
  DELETE_TODO,
  CLEAR_COMPLETED_TODOS,
} from "../actions/action";

import todosList from "../todos.json";

const initialState = {
  todos: todosList,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            userId: action.userId,
            id: action.id,
            title: action.title,
            completed: action.completed,
          },
        ],
      });

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo === !todo.action.payload.id) {
          return { ...state, completed: !state.completed };
        }
      });

    case DELETE_TODO:
      return state.filter((todo) => todo !== todo.action.payload.id);

    case CLEAR_COMPLETED_TODOS:
      return state.filter((todo) => todo.completed !== true);
    default:
      return state;
  }
};

export default reducers;
