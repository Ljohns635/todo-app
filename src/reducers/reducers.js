import { todos as initialTodos } from "../todos";
import {
  ADDTODO,
  TOGGLETODO,
  DELETETODO,
  CLEARCOMPLETEDTODOS,
} from "../actions/action";
import { v4 as uuidv4 } from "uuid";

export const todos = (state = initialTodos, action) => {
  switch (action.type) {
    case ADDTODO: {
      const newId = uuidv4();
      const newTodo = {
        userId: 1,
        id: newId,
        title: action.payload.inputText,
        completed: false,
      };
      return {
        ...state,
        [newId]: newTodo,
      };
    }
    case TOGGLETODO: {
      const newTodos = { ...state };
      const { id } = action.payload;
      newTodos[id].completed = !newTodos[id].completed;
      return newTodos;
    }
    case DELETETODO: {
      const newTodos = { ...state };
      delete newTodos[action.payload.id];
      return newTodos;
    }
    case CLEARCOMPLETEDTODOS: {
      const newTodos = { ...state };
      for (const todo in newTodos) {
        if (newTodos[todo].completed) {
          delete newTodos[todo];
        }
      }
      return newTodos;
    }
    default:
      return state;
  }
};
