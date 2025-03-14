import { useState } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { TodoContext } from "../ contexts/TodoContext";

export function TodoProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchText.toLowerCase())
  );

  let totalCompletedTodos = todos.filter((todo) => todo.completed).length;

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id == id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const handleAdd = (todoText) => {
    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const handleEdit = (id, todoText) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return todo.id == id ? { ...todo, text: todoText } : todo;
      })
    );
  };

  const handleInput = (event) => {
    let { value } = event.target;
    console.log(value);
    setSearchText(value);
  };

  return (
    <TodoContext.Provider
      value={{
        searchText,
        totalTodos: todos.length,
        handleDelete,
        handleComplete,
        handleAdd,
        handleEdit,
        handleInput,
        filteredTodos,
        totalCompletedTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
