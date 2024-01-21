import React, { useEffect, useReducer } from "react";
import todoReducer from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (todo) => {
    const action = {
      type: "ADD",
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "DELETE",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: "TOGGLE",
      payload: id,
    };
    dispatch(action);
  };
  return {todos, handleAddTodo, handleDeleteTodo, handleToggleTodo};
};

export default useTodo;
