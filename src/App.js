import React from "react";
import { BrowserRouter } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import TodolList from "./components/TodolList";
import Navigation from "./components/Navigation"
import Footer from "./components/Footer";
import AddTodo from "./container/AddTodo";
import ClearCompletedTodos from "./container/ClearCompletedTodos";
import DeleteTodo from "./container/DeleteTodo";



uuidv4();

const App = () => (
  <BrowserRouter>
    <AddTodo />
    <TodolList />
    <ClearCompletedTodos />
    <DeleteTodo />
    <Footer />
  </BrowserRouter>
);

export default App;
