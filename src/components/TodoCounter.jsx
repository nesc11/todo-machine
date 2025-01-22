import { useTodoContext } from "../customHooks/useTodoContext";

function TodoCounter() {
  const { totalCompletedTodos: completed, totalTodos: total } =
    useTodoContext();
  return (
    <h1 className="text-xl text-center">
      You have completed <span className="font-bold">{completed}</span> out of{" "}
      <span className="font-bold">{total}</span> TODOs
    </h1>
  );
}

export default TodoCounter;
