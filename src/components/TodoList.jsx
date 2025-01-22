import TodoItem from "./TodoItem";
import { useTodoContext } from "../customHooks/useTodoContext";

function TodoList() {
  const { filteredTodos, handleDelete, handleComplete } = useTodoContext();
  return (
    <ul className="flex flex-col gap-2 w-10/12 max-w-xl">
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleComplete={() => handleComplete(todo.id)}
          handleDelete={() => handleDelete(todo.id)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
